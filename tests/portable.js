// Exercise the actual inline entry point, including boot and delegated clicks.
// This is a DOM stub test, not a real browser or Android test.
const fs = require('fs'), vm = require('vm'), path = require('path'), assert = require('assert');
const html = fs.readFileSync(process.argv[2] || path.join(__dirname, '..', 'index.html'), 'utf8');
assert(!/<script\b[^>]*\bsrc=/i.test(html), 'Entry point needs external JavaScript');
assert(!/<link\b[^>]*rel="stylesheet"/i.test(html), 'Entry point needs external CSS');
assert(!/\bfetch\s*\(/.test(html), 'Entry point fetches external data');
const scripts = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(m => m[1]);

async function run(blockStorage) {
  const elements = {}, listeners = {}, storage = {};
  const el = id => elements[id] || (elements[id] = {id, innerHTML: '', textContent: '', className: '', scrollTop: 0});
  const timers = new Set();
  const ctx = vm.createContext({console, performance, setTimeout: (fn, ms) => {
    const t = setTimeout(fn, ms); timers.add(t); return t;
  }, clearTimeout, document: {
    getElementById: el, addEventListener: (event, cb) => {listeners[event] = cb;},
    querySelector: () => null, querySelectorAll: () => [],
  }, navigator: {}, history: {pushState() {}}, confirm: () => true});
  ctx.window = ctx;
  ctx.addEventListener = () => {};
  Object.defineProperty(ctx, 'localStorage', {get() {
    if (blockStorage) throw new Error('Storage blocked');
    return {getItem: k => storage[k] || null, setItem: (k, v) => {storage[k] = v;}};
  }});
  try {
    scripts.forEach((s, i) => vm.runInContext(s, ctx, {filename: 'inline-' + i}));
    const G = ctx.G;
    assert(G.S && G.S.order.length > 0, 'Boot failed to create a game');
    assert(el('view').innerHTML.includes('สถานะสำนัก'), 'Home failed to render');
    for (const t of ['disc', 'sect', 'world', 'rep', 'menu', 'home']) {
      const target = {tagName: 'BUTTON', dataset: {a: 'tab', t}};
      listeners.click({target: {closest: () => target}});
      assert.equal(G.UI.tab, t);
      assert(el('view').innerHTML.length > 100);
    }
    const before = G.S.day;
    G.UI.adv(7);
    await new Promise(resolve => setTimeout(resolve, 800));
    assert(!G.UI.busy, 'Advance left the UI busy');
    assert(G.S.day > before, 'Time did not advance');
    const exported = G.serialize(), expectedDay = G.S.day;
    G.newGame(42);
    assert(G.loadText(exported).ok, 'Save import failed');
    assert.equal(G.S.day, expectedDay);
    const result = G.save('1');
    assert.equal(result.ok, !blockStorage);
    if (!blockStorage) assert(G.load('1').ok);
    console.log('PASS portable boot/clicks/time/save, blocked storage=' + blockStorage);
  } finally { for (const t of timers) clearTimeout(t); }
}
run(false).then(() => run(true)).catch(e => {console.error(e); process.exitCode = 1;});
