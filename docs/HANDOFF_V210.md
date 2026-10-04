# MeKha 2.1.0 engineering handoff

Version 2.1.0, save schema 8, portable index.html. Official attached 2.0.0 is the baseline. No model integration or training was authorized in this patch.

Load order: base 2.0 modules, civil-core/actions/life/economy/sect/politics/world/personal/simulation/validation, original UI modules, civil-ui. index.dev.html is authoritative; tools/build.py inlines local CSS/JS into index.html. No fetch, CDN or npm at play time.

G.CIVIL adapts both player characters and foreign roster actors. Personal wallets, stock, currency owners, memories, permissions and timing stay in actual state. X.define creates contextual contracts; X.validate rechecks eligibility. X.execute owns contextual counters/history and observational capture. G.WORLD and G.N continue native primary work and existing lifecycle systems. N.actionId recognizes contextual keys. Cache is limited to one agenda-building operation and never reused after execution.

G.ACTIONS contains 236 records, including all original 220; 212 are contextual contracts. The remaining 24 are existing routes or events. Supported != universally selectable. See data/action-keywords-v210.json and UI catalog. Do not treat outcome records as direct NPC choices. The prepared action audit exercises all 212 contextual routes; it does not prove all appear frequently in natural play.

Schema-8 import validates civil state and base world state before initialization. schema-7 migration initializes owned inventories, organizations and personal state without spending resources or RNG. Existing real schema-6/older fixtures remain covered. Raw external JSON is checksummed; local storage retains the existing LZ1 format and dictionary limit 55295.

Training export uses kind observational_decision_outcomes and featureSchema mekha-decision-v1. Every sample has actor/group/day, canonical action, executable key, parameters, pre-choice features, alternatives (up to 12 including chosen key), before/after scalar snapshots and 30/90/180-day observations. Group health, injuries, membership and strength are included. Pending <=128, complete <=256. Sampling interval 20; disabled by default. Inner native fulfillment of a contextual action is not sampled twice. Exported observations do not establish counterfactual superiority.

For later training: fork actual checksummed state with G.loadText, validate and execute a candidate, simulate equal horizons with controlled seeds, compare domain objectives and held-out worlds. Preserve per-action prerequisites and native fallback routes. Do not label the existing teacher-imitation models as improved without outcome benchmarks. No pretrained ZIP has been silently added to this game.

Tests: python3 tools/regress.py (22 scripts), node tests/civil-action-audit.js, node tests/civil-longrun.js SEED natural|stress DAYS. Browser test is optional and needs Playwright plus installed Chromium; browser download was network-blocked here. DOM stub tests must not be described as real mobile/browser tests.

Package: python3 tools/package.py; manifest checks every archived file by SHA-256 and entry byte equality. Historical v1/v2.0 reports are not evidence for this release. See QA_V210_TH.md for current results and limits.
