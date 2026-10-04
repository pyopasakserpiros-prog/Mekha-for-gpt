# MeKha 1.4.0 official handoff

Entry: index.html; development entry: index.dev.html. VERSION=1.4.0, SCHEMA=6.
Offline JavaScript, no network requests or external dependencies in the playable entry.

Load order: original core/patch layers -> living-world/validation -> living-deep -> apprenticeship -> original UI layers -> living-deep-ui -> apprenticeship-ui.

The Grok module is retained as a base but its unrestricted equipment/medicine allocation branch has been removed. Normal N.allocate owns allocation budgets, reserves, exclusions, locks and caps. N.autoCopyScroll rechecks policies and resources at execution. Copy costs are study investments, not item-distribution budget expenditure.

The daily living-world wrapper dispatches N.executeDayAgendas in deep mode. All members execute by slot with rotated stable ordering; plans are reevaluated against present state. Claims are reset per slot, and actual paired events update both schedules. Full-day study and story work take precedence. Side effects are bounded by one occurrence of each activity per person/day; severe recovery can repeat twice.

Apprenticeship state: c.master is canonical. c.mx.apprentice holds origin/consent reasons, guidance window, counters, learned art IDs and bounded historical decisions. s.patch.mentorship holds up to 80 recent offers. N.init is idempotent and must not borrow the active world's date while importing another world. Initial metadata dates are zero until an actual offer is accepted.

New game: G.pickMaster no longer assigns unilaterally. Existing management's unilateral rematching is removed. N.mentorshipDay evaluates teacher-initiated and student-initiated offers while respecting management/autoMentors flags and member locks. Existing imported master links are preserved.

Training and breakthrough: N.mentorBenefit supplies bounded multipliers; the old sim teachMap multiplier is disabled when this provider exists to avoid double counting. Temporary guidance requires an actual session. Availability and load determine the benefit; absent/unavailable masters give no bonus.

Private teaching: N.privateTeacher grants source access only for the direct teacher, with actual knowledge >=60 mastery and art compatibility. Public access checks remain separate inside N.sources, so personal access does not invent a library source. Learners pay normal cost and must meet normal requirements. N.dailyArts divides teacher effect among simultaneous learners. Full-day private learners reserve part of a non-teaching master's primary work share. Death/departure cancels unfinished private lessons; existing authorized public study may continue.

Activities use existing paired slot claims: master_session, master_care, master_art. data.asTeacher=true routes proactive teacher guidance/care to the pupil; resulting real events and effects still belong to the pupil and teacher. UI lists personal lessons and allows both proposal directions with live assessment and refusal reasons.

Schema 5 overflow migration: verify original checksum first; normalize finite q.done>q.work to q.work only for old Grok saves, recompute the envelope checksum, then use the normal migration/validation chain. Schema 6 malformed fields and cyclic lineages reject atomically. Completed orders are not awarded by the repair itself; normal paid work processing finishes them.

Build: python3 tools/build.py
Core/UI/migration gates: python3 tools/regress.py
Long-run: python3 tools/longrun.py (six independent 3,600-day worlds; three processes)
Package: python3 tools/package.py (build, manifest hashes, archive integrity)

Reports from v1.2/v1.3 are historical. Current reports are tests/results-v140-core.txt and tests/results-v140-longrun.json/txt. Real prior-engine generated saves in tests/fixtures/real-v130.json and real-grok-v140.json exercise migration without including the old code in this release.

Browser screenshot testing was unavailable: Playwright library exists, Chromium binary and agent-browser CLI do not. Do not describe DOM-stub checks as real browser/mobile hardware testing. No new ML model or foreign-faction apprenticeship system is included.
