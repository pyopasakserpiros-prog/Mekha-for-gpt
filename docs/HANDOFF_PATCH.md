# MeKha 1.1.0 — practical developer handoff

## Identity and scope

This branch is **Sonnet's MeKha 1.0.1 engine/UI**, with actual integrated content adapted from SanMakra 1.1.3. Do not replace it with SanMakra's `Sect` engine. `window.G` owns rules and `G.S` owns all serializable state; `G.PATCH` is definitions, `G.N` additive rules. SanMakra 1.1.4 is a separate project. The first two new digits refer to this branch's release, not a promise of equivalent numeric balance.

Implemented: 662 fixed-name/grade definitions (630 craftable, 32 regional materials), 114 usable arts, 60 conditional stories (13 three-stage combat trials), 24 fixed legendary visitors, 33 imported traits, 12 adapted manuals in addition to 12 original ones; named inventory, recipes, shared labor, consumables, mounts, site pools, learning, offices, stewardship, personal goals/journals, named foreign development, dated news and editor.

Intentionally retained differences: 30 lodging places maximum, original Sonnet realm ladders (Qi6/body7/faith5), six factions, four communities, original aggregate supplies/gear alongside named items. No imperial court, branches, territorial ownership or simultaneous dual-path practice. Divine harmony maps to the existing protection community domain. Original population-economic faction model remains active; the named roster represents existing combat cultivators, its representative is distinct from the faction's aggregate leader name.

## Architecture map and loading

`index.dev.html` defines classic-script order; `tools/build.py` embeds every script and CSS into authoritative `index.html`. No fetch, ESM, CDN or Worker. All shipped files are editable; no dependencies/build tools are needed to play.

| File | Responsibility / main extension entry |
|---|---|
| `js/data.js` | Original `G.PATHS`, manuals, jobs, facilities, communities, factions, balance `G.CFG` |
| `js/core.js` | Saved mulberry32 RNG, IDs, names, character construction, original game creation |
| `js/sim.js` | Original chronological production, craft, consumption, cultivation, faith, health, social rules; small hooks for training, shared craft labor, traits, spoilage |
| `js/world.js` | Original diplomacy, intelligent threats, factions, travel and automatic combat; per-expedition travel days, limited ecological threat growth and raider recovery interval |
| `js/actions.js` | Base commands, cooperative advance, envelope/checksum/storage/migration |
| `js/content-sanmakra.js` | Readable JSON definitions bundled as `window.G.PATCH`; edit definitions here, no import dependency on an external SanMakra folder |
| `js/patch-core.js` | Content translation, pure defaults/migration, trait modifiers, path/manual matching, IDs, founder supplies, legend character factory, busy-command guards |
| `js/patch-items.js` | Stack/equip/refine/pills, paid queues, recipe research, named trade, mounts, conditional loot, returning cargo |
| `js/patch-arts.js` | Eligibility/source resolution, exclusive studies, teachers, mastery/active set, applied production/training/combat bonuses |
| `js/patch-stories.js` | State predicates, weighted eligibility, stages, costs, occupations, rewards, real trials, deadlines/cooldowns |
| `js/patch-lives.js` | Leadership/offices, allocation/steward, emergency recovery, goals/journals/ledger, foreign identities/training/archives/news, final daily wrapper |
| `js/patch-validation.js` | Central additive-schema validation; wrappers validate before replacing live state |
| `js/ui.js`, `js/ui2.js` | Original six tabs, character sheets, event delegation, nested modal/back behavior; new chips dispatch to `G.N.views` |
| `js/patch-ui.js`, `css/style.css` | Inventory SVGs/grid/filters, every new screen/action, additions to original character/home/report pages |
| `tests/harness.js` | Load production engine in Node without DOM; same script order as delivered game |
| `tests/fixtures/sonnet-schema1.json` | Actual old-engine save fixture, independent of external source directories |

Load patch core → items → arts → stories → lives → validation after original actions and before UI. Patch UI loads after UI2 and before boot. Wrappers deliberately retain original methods. Never move a wrapper earlier than its dependency; init calls during original newGame must tolerate `S.patch` not yet present. Pure defaulting must not read global live state when given a candidate save.

## Daily order and dependencies

1. Clear current alerts; initialize additive defaults; release finished story occupations at the safe boundary; capture jobs; pay dragon nutrition and mount upkeep.
2. Original day: increment date/reset flow/context → environment → teaching map → production → construction → crafting → consumption/spoilage/upkeep → cultivation/breakthroughs → travel/automatic encounters → finite community faith → health/aging → relationships → world/faction budgets → threats → original conditional events.
3. Original monthly cycle on day%30: tribute, applicants, promotions, detail transitions; assignment on day%5; decision deadlines; flow averages/history.
4. Post-day: arts (study, signatures, mastery, recovery) → authored stories (deadlines/readiness/eligible generation) → paid named foreign development and snapshots → personal milestones and monthly ledger → weekly steward on day%7==1 → cleanup/clamp/merge.

Cultivation uses **yesterday's stored faith**, because faith generation follows cultivation. Returned expedition cargo is awarded after surviving return, not on discovery. New studies start after local production, so they occupy tomorrow onward. Shared crafting splits the existing W in half only while a named queue exists; it never duplicates W. Queue ingredients are paid once up front. Story study lasts two calendar days; studies/expeditions/manual changes cannot overlap.

`G.advance` repeatedly calls the same `stepDay` with an ~8ms cooperative budget and yields via setTimeout. Progress/stop are UI mechanics, never extra simulation/RNG. Important alerts stop at day boundaries; waiting decisions pause. Do not add artificial delays to make CPU work look expensive. Measured Linux means are below1ms/day; phone speed is unknown.

## Core invariants

- Stable string IDs: no array indices for references. New own entities use `mx_<kind>_<S.nextId++>`, foreign roster people `fp_<faction>_<monotonic next>`. Save the generator counters.
- Simulation uses `G.R/ri/pick/ch/rn` only; no Math.random/Date.now after game creation. Hash-derived foreign aptitudes do not consume RNG or alter population.
- Never create people, wealth, realms or troops merely by changing faction detail. Original expandRoster transfers level0 troops into named people; additive init annotates existing entries only. Remote details persist when inactive.
- One owned item per slot/person, owned quantity1; exact unowned stacks combine definition/quality/affix/lock. Definition fixes grade. An away owner cannot transfer gear.
- State/chars/order/master/expedition membership and active learning must agree. Death returns gear, clears offices/heir, archives skills/journal and original biography, removes living references. Promotion must preserve study occupation; succession cancels an elected leader's study/active story explicitly before assigning duties.
- Spend resources before queues/studies/choices; never spend again on continuation. Material gathering/refinement conserve named units. Diplomatic story payments and battle loot come from faction wealth, stolen money/food transfer to hostile stores.
- Validate imports fully before `G.S` replacement; preserve current world on any failure. Editor commands are explicit and marked in state, not a reason to weaken import checking.
- Bound log400/dead120/battles40, journals24/person, story history80, decisions80, ledger36, foreign archives24/memories16. Old name reservation registry remains monotonic (see limitations).
- Numeric training trait multiplier caps at8 before equipment/art effects. No universal cultivation-strength/loot shortcut from mounts. Actual health is0–100; permanent named HP buffs affect battle HP, not that percentage.

## Save schema and migration

Current schema2 envelope `{game:'sect',ver:'1.1.0',schema:2,sum,S}` retains legacy game tag for old Sonnet import. Separate storage prefix `mekha_patch_` (three slots, auto, auto_bak); SanMakra saves are unrelated and rejected. `sum` is djb2 checksum of JSON.stringify(S); not a cryptographic signature. Missing checksum remains accepted for plain legacy edited saves; structural validation still applies.

Schema1→2: `G.MIGRATE[1]` runs pure `N.init(s)`, annotates current characters, initializes empty items/activity state, does **not** grant founder items/wealth/RNG draws, and defaults stewardship disabled. New-game-only founder supplies are added in the newGame wrapper.

Important additive shapes:

```js
S.patch = {
 items:[{id,def,grade,qty,quality,affix,locked,owner:null}],
 orders:[{id,def,work,done,cost:{silver:30},ingredients:{mat_bamboo_0:2}}],
 knownRecipes:[],knownArts:[],artSources:{},legends:{},
 stories:{active:[],history:[],cooldowns:{},last:-100},
 management:{enabled,direction,admission,target,reserve,autoEquip,autoPills,
   autoStudy,autoBuild,storyMode,allocation,maxGrade,itemReserve,budget},
 offices:{training:'c2'},heir:null,decisions:[],ledger:[],baseline:{},
 foreignFollow:[],cheat:false
};
character.mx = {
 mana,permanentHp,permanentMana,buffs:[],cooldowns:{},
 arts:[],active:[],mastery:{},study:null,signatures:[],legend:null,
 goal:{kind:'realm',target:2,done:false},days:{farm:40},journal:[],
 lastRealm,exclude:false
};
// Active study additionally remembers exclusive occupation:
// {id,remaining,kind:'teacher',teacher:'c2',resumeJob:'cultivate',resumeFix:0}
// Story instance: {id,def,actor,village,faction,stage,ready,due,choices,trace,spent}
// Expedition retains travel,cargo,scrollCargo,resume alongside original fields.
// faction.mx owns next/archive/journal/news/leader; each roster entry owns mx.
```

For schema changes bump `G.SCHEMA`, add `G.MIGRATE[2]`, run on detached candidate state, add a captured schema2 fixture and continuation test. Keep definition IDs permanent. Base missing manual/job references can be repaired; unknown named item/art definitions currently reject with Thai errors rather than silently replace value. If retiring a definition, provide an explicit ID mapping/refund migration. Validators derive art array maxima from definition count; definition-count assertions in tests intentionally need updating when adding content.

## Worked content examples

Add an item in `G.PATCH.items`, update its regional loot pool separately. A recipe does not automatically appear in every site. Use another existing material's shape, and extend grade/theme/craftable/shop/sourceText explicitly:

```js
items.moon_example_sword = {
 id:'moon_example_sword',name:'กระบี่เดือนหงาย',type:'weapon',subtype:'sword',
 icon:'sword',grade:2,theme:'moon',stats:{atk:.12,pierce:.03},
 paths:['qi'],minRealm:1,price:95,cost:{coin:45,ore:18,stone:8},
 ingredients:{mat_moon_1:2},work:24,craftable:true,shop:false,
 desc:'กระบี่ที่เก็บความเย็นไว้ตามคม',sourceText:'ถ้ำจันทราและสูตรที่ค้นพบ'
};
lootPools.moon_cave.categories.weapon.entries.push({id:'moon_example_sword',weight:4});
```

Check actual existing material ID before copying. Ordinary `coin` maps to silver; `medicine` maps to original pillFound. Named ingredients always refer to material definitions. Grades0..5, quality0..2, affix from P.affixes. New recipes do not become retroactive knownRecipes unless migrated/granted; exploration can unlock a found crafted object's recipe, or research can purchase it with a suitable library.

Art example (usable ability, not a new cultivation ladder):

```js
arts.moon_example_breath = {
 id:'moon_example_breath',name:'ลมหายใจจันทร์นิ่ง',paths:['qi'],realm:2,
 tier:2,source:'scroll',sites:['moon_cave'],effect:'train',amount:.1,
 requirements:{spirit:55},foundation:45,cost:{coin:30,stone:10},days:8,
 description:'ประคองความเร็วฝึกเมื่อจัดเข้าชุด',origin:'ตำรับที่ค้นจากผนังถ้ำ'
};
```

`realm` in imported definitions is a common six-position content scale; `N.needed` maps it to each actual Sonnet ladder. `N.sources` supports public/library, matching manual chapters, signature and ready teachers. New noncombat effect must be consumed by real production/cultivation rules, not only shown on a card. Add to effect labels and targeted checks. A weapon requirement is a **subtype** and disables the effect if mismatched; learning itself need not hold the weapon.

Story example: clone an existing definition with permanent ID/title/text/second/group/label/trigger/tier/weight/minDay/cooldown/cost/terms[3]/stages/reward. `N.context` must prove an actor and relevant faction/village exist. Add a new predicate plus Thai trigger label, not a uniform random crisis. High tiers need eligible advanced characters and lower weight. Current chains deliberately share safe/risk/trial mechanics; they are not60 different simulation subsystems.

## Extending cultivation and behavior

Adding a manual within Qi/body/faith: native G.MANUALS uses `{p,n,d,sp,bt,cost,rank,lore,tech:[{r,n,atk,def,heal}]}`; imported P.manuals adapts `{path,name,speed,risk,cost,role,affinity,domain,start,desc}`. Update `N.manualMap/N.legacyManuals` only where equivalence is genuine. Path/manual changes lose original progression as documented and disable incompatible active arts. Never silently give every legacy manual access to every art.

A fourth path requires a real branch in original cultivation, btInfo/attemptBT/calcLife, combat fighter, resource costs, assignment, personality preferences and UI tag/filter helpers. Original bestPath/current hardcoded Qi/body/faith arrays must also be generalized. There is no empty fourth-path plugin pretending this is data-only.

Character behavior: extend existing autoAssign/steward rather than install a second independent scheduler. Busy jobFix excludes study/story/travel; player fixed jobs win. Use goals with paid/observed achievements and actual journal milestones. Add trait factors at the consumed rule (work, recover, study, trust, weapon matchup, diplomacy), translate the label, and test both positive and negative consequences. Offices confer real limited bonuses only while a ready eligible elder is home. Observer-facing foreign details must come from dated `f.mx.news`, not current hidden live values.

Recommended next implemented extension points: specialized workshop orders (`patch-items`), mentor/goals/relations (`patch-lives/arts`), richer authored consequences (`patch-stories`), extra regional definitions (`content`), faction capital allocation (`world/foreignDay`). Future ideas: departments with separate budgets, branches and territories, imperial court. These are **not implemented** in this release; design migrations before adding persistent entities.

## Regression commands

Python/Node are needed only for development:

```sh
node tests/suite.js
node tests/patch.js
node tests/ui_test.js
node tests/patch-ui.js
node tests/patch-longrun.js
python tools/build.py
node tests/portable.js
python tools/package.py
```

suite covers original rules; patch tests all630 recipes/114 arts/60 safe story branches and a real three-stage trial,12 consumable effects, fixed legends, faith, dated foreign conservation, heir/cleanup, old migration and adversarial saves. DOM tests exercise existing/new rendering and actual action handlers, but do **not** test CSS layout. Portable executes actual shipped inline scripts with usable/blocked browser storage. Longrun executes eight seeds ×20 years with four stewardship directions, auto study, safe stories and default responses to original decisions. It writes actual metrics to `tests/results-longrun.json`; failures must be investigated, not turned into expected passes.

## Balance assumptions and limitations

- Trait caps and regional rarity are centralized enough to tune; high-tier items require site-specific resources and appropriate facilities. Loot category→item weighted pools retain fixed named grades. Equipment supports preparation; does not guarantee outcomes.
- Wilderness threat tier caps at2.5 and group size8; bandits need60 days between raids. The earlier original formula grew forever with calendar time and made survival mathematically impossible. Combat round design remains Sonnet's, with applied named effects; no tactical overhaul.
- Extra stored food decays past30-day reserve. Faction tax/stock remain aggregates; rising distant wealth can accumulate after development ceilings. Future capital sinks can deepen this without creating fictional purchases.
- Foreign aptitudes are hash-derived from saved seed/identity; original paid world advancement and additive paid training both operate. Prior losses are archived; representative succession differs from the unchanged aggregate leader string.
- Histories have bounds; `S.names` retains used names and grows with discarded applicants. Measured20-year saves remain below~0.7MB; unlimited-century growth is not claimed bounded.
- Max30 members and3000 item stacks; import validation caps qty25000 and large balances. These protect mobile rendering and untrusted imports; revise alongside stress tests if scaling up.
- No actual Android/Chrome/Snapdragon measurement or visual screenshot check. Chromium installation was blocked by environment; report DOM validation honestly. Android file handlers can block JavaScript/storage even with standalone HTML; exported saves remain essential.
