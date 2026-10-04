# MeKha 2.0.0 engineering handoff

VERSION 2.0.0, SCHEMA 7. Offline inline index.html is the playable entry. index.dev.html is the canonical load list. Current base is the official 1.4.0 from this thread; previous v140 notes remain historical.

## Architecture

Original modules are retained. New load order after apprenticeship: action-registry, world-brain, world-consequences, world-integration, world-territory, world-history, world-validation, world-storage. world-ui loads after original UI layers and apprenticeship UI. Native production, resource costs, cultivation, expedition combat, learning permissions, inventory and reciprocal mentorship remain authoritative.

G.ACTIONS is a central metadata registry; supported=false vocabulary is NEVER eligible as an AI action. Supported includes real native duties, world outcomes and organization actions, not just personally selectable activities. There are 220 records, 87 wired to present behavior, 133 reserved. Do not advertise 220 executable actions.

G.WORLD owns W.people/person adapters over local c.mx.brain and foreign roster r.mx.brain. No LLM, worker or network. The existing asynchronous G.advance yields between daily transactions. A daily transaction still runs synchronously; no claim of multicore use or guaranteed phone frame time. Browser automation could not be run because neither agent-browser nor Chromium is installed.

## State

patch.simulation contains quality/debug, event sequence and bounded events, monthly reports, decision metrics, merchant/transport economy, finite resource-site stock/control, aggregate population results, last observed resources/faction positions/policies, shortage-crossing state and primary-duty day.

Each brain owns bounded goals and history, memories, knowledge, multidimensional relations, savings, current needs/tier, next review/decision, counts/month totals, monthly summaries, trace, travel, focus, current plan, baseline and political cohort. Foreign adapters intentionally do not fabricate local martial-art access or individual inventory. Foreign learning investments change paid cultivation and foundation; local arts/equipment still use actual N APIs.

Deep memory/knowledge budgets are 48/32 for tier 1, half for tier 2 and a quarter for tier 3. Normal is 32/24 before tier scaling, low 24/20. Relationship neighbors max 24; goals max 6; goal history 16; event ring <=360 (major/minor budgets separate); reports 12 with up to 80 person rows; selected debug trace 24 or 4 without debug. Recent local life schedules deep 128, normal 96, low 64. Older counts and monthly totals are retained. Traditional foreign secondary history 16 (news 12) and old monthly rows 6; canonical brain months retain up to 12 (6 for background).

Memories and knowledge are historical snapshots, not live entity pointers; expired event IDs and dead participants in those snapshots are intentional. Live relations, goal targets and cohorts are cleaned when participants leave. W.cleanup must run every daily transaction after native casualties, including foreign faction removals.

## Decisions and consequences

W.review computes needs and reconciles actual progress, deadlines and missing targets. W.goalPlan creates finite derived steps; W.record advances a step only on matching actual activity. Utility combines existing duty/trait score with goal, need, relationship, memory, exposure/risk and repetition terms. Native high-priority study/story commitments and per-slot partner claims remain in effect.

Local selection picks highest revalidated score; hashes rotate fairness/tie order, not a random top-three personality pick. Foreign side selection replaces the old random side layers; paid primary foreign cultivation remains. Old world organization random decisions are bypassed in deep mode via W.factionDecision, while native combat, population income and trade persist. Conflicts use the existing skirmish solver on bounded scheduled ticks.

Savings start at zero on migration. Treasury stipends credit no more than the actually paid stipend portion; extra work pays from spendable treasury; reward and favor transfers conserve currency. External native taxes/production are explicit economic sources. Medicine/equipment consumption and study call the original rule APIs, respecting flags, locks, reserve, grade, source, compatibility and funds. Gift observations create real gratitude and witnessed jealousy. Political support changes succession defaults, not player authority.

Information starts with involved actors, witnesses, delayed public reports or conversation. Merchant rumors reference an actual discovered physical location with remaining resources. Private goal creation does not directly disclose to the target. Verification and sharing operate on original knowledge and must not create recursive new rumor events. Native combat still resolves actual simulated strength; this is not a universal sensor/visibility simulation.

Organization decisions pay real funds for shortages, medicine, production, library, fortifications, recruitment and allowances. War/roads/site control affect supply/price; herbs and ore purchases are merchant-stock limited. Site capture calls native battle/aftermath, costs treasury and food, and can kill members. NPC neutral-site expansion requires known information and feasible capacity; full autonomous territorial campaigns are not implemented. The UI capture button selects up to three ready members and asks confirmation.

## Saves

G.MIGRATE[6] uses N.init without borrowing active-world day/RNG. Tests include authentic old-engine schema 4/5/6 fixtures. Prior Grok production-overflow repair still verifies original checksum before its schema-5-only normalization. Current malformed schema-7 state is validated BEFORE initialization and rejected atomically.

world-storage transparently compresses only mekha_patch_* local-storage values. G.store.get returns exact original JSON, so old loader/checksum code and export remain unchanged. LZ1 uses UTF-8 bytes, initial dictionary 256, frozen dictionary limit **55295**, output codepoints below the surrogate range, 32 MiB expansion guard. Preserve this exact contract; future codec changes require a different prefix and old decoder. Tests cover Thai/emoji, dictionary saturation, legacy raw saves, byte-for-byte round trips and actual G.save/load.

Browser storage can still be blocked or filled by numerous manual slots or debug-heavy worlds. Never promise unlimited storage. Backup/export remains important. Do not silently delete user saves to free space.

## Validation and release

python3 tools/build.py
python3 tools/regress.py — 19 engine/UI/portable/migration/storage suites
python3 tools/stress_v200.py — six isolated seeds, each 3,600 days, checks 30/180/360/etc, massive investment, policies, missions, war, bounded histories and compression round trips
python3 tools/package.py — rebuild inline entry, SHA256 manifest, archive integrity

Current reports: tests/results-v200-core.txt and tests/results-v200-stress.json plus per-seed reports. Historical results-v140/v130 are not verification of this release. All phone performance estimates remain unverified; report host timings as host timings only. No screenshot or hardware test occurred.

Scope left for future patches: fully unified foreign arts/gear ownership, autonomous branch creation/returning emigrant leaders, family systems, all reserved crimes/diplomacy verbs, more complete travel visibility and faction-to-faction relations. Do not fake those with narrative text.
