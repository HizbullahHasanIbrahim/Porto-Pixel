# SDD ledger — plan: Tahap 1 Stability & Accessibility + Tahap 2 single source data

Baseline: npx astro check clean, npm run build ok, uncommitted user work present (PixelPreloader, content.config.ts) — must not be touched destructively.

Tasks:
- T1 Game loop lifecycle cleanup (projects.astro, game.astro, 404.astro)
- T2 sparkleEffect cleanup/pointer-fine/reduced-motion
- T3 index.astro SKIP BOOT + Escape + GSAP reduced-motion fallback
- T4 global.css focus-visible + 100dvh fallbacks
- T5 projects.astro project-card Enter/Space
- T6 ContactDialog remove backdrop blur
- T7 Single source data: delete src/data/projects.ts, type from astro:content
- T8 Verify: astro check + npm run build

Task 1 (projects.astro): complete — rafId guard, visibilitychange, pagehide, IntersectionObserver, named keydown cleanup
Task 2 (game.astro): complete — rafId guard via startLoop/stopLoop, visibility pause/resume, pagehide cleanup
Task 3 (404.astro): complete — rafId guard, IntersectionObserver, visibilitychange, pagehide, named keydown
Task 4 (sparkleEffect.ts): complete — dispose-on-reinit auto-disable pointer:fine + reduced-motion, returns cleanup
Task 5 (index.astro): complete — SKIP BOOT button + Escape unlock, reduced-motion hero fallback (skip timeline, set final states)
Task 6 (PixelPreloader.astro): complete — Escape skip boot (completePreloader immediately) + guard flag
Task 7 (global.css): complete — focus-visible, 100dvh fallbacks
Task 8 (projects.astro keyboard): complete — Enter/Space opens project dialog
Task 9 (ContactDialog.astro): complete — removed backdrop-filter blur, solid rgba backdrop
Task 10 (single source of truth): complete — replaced `import type { Project } from '../data/projects'` with CollectionEntry type; deleted src/data/projects.ts

Ruling: worktree not created — working tree already has user's uncommitted work; user asked edits in place, changes are additive & reversible via git diff.
Verification: npx astro check → 0 errors; npm run build → success (dist/ complete).
