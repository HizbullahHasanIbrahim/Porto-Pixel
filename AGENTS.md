# AGENTS.md — HZB Interactive Retro-Pixel Portfolio (Inspired by jld2nd.dev)

## 1. Project Overview
Proyek ini adalah website portofolio interaktif bergaya **Retro-Pixel 8-Bit & Classic OS** milik **Hizbullah Hasan Ibrahim (HZB)**, seorang mahasiswa Sistem Informasi & Creative Web Developer.
Arsitektur dan pengalaman pengguna mengadaptasi konsep **jld2nd.dev** (Awwwards Nominee): menggabungkan **8-Bit Preloader Boot Sequence**, *pinned scroll-driven storytelling* 8-bit, sistem *dual-mode* (**Developer Mode** & **Creative Mode**), 10 jendela pop-up ala sistem operasi klasik (`.exe`, `.sys`, `.dll`), mesin capit (*Claw Machine*) di halaman proyek, dan *mini-game Endless Runner* di halaman `/game`.

## 2. Tech Stack & Dependencies
- **Core Framework:** Astro (Static Site Generation / Multi-Page Architecture)
- **Animation Engine:** GSAP (`gsap` & `gsap/ScrollTrigger`)
- **2D Game & Interactive Rendering:** HTML5 `<canvas>` API & Inline Pixel SVGs
- **Styling:** Vanilla CSS3 dengan CSS Custom Properties (CSS Variables), Scoped Astro Styles, dan `image-rendering: pixelated`
- **Fonts:** Google Fonts (`Space Grotesk` / `Syne` untuk heading modern + `JetBrains Mono` & `Press Start 2P` / `Silkscreen` untuk elemen pixel/terminal)

## 3. Design System & Theme Specification
Website wajib mendukung **Dual-Mode Theme** yang tersimpan secara persisten di `localStorage` (`hzb-theme-mode`) dan dikontrol melalui atribut `data-mode="developer"` atau `data-mode="creative"` pada elemen `<html>`:

1. **Developer Mode (Default - Dark Terminal / 8-Bit Cyber):**
   - `--bg-primary`: `#0b0d10`
   - `--bg-elevated`: `#141820`
   - `--text-primary`: `#f1f5f9`
   - `--text-muted`: `#94a3b8`
   - `--accent-primary`: `#00ff66` (Matrix/Terminal Green)
   - `--accent-secondary`: `#38bdf8` (Cyan Pixel)
   - `--border-color`: `#00ff66`
   - `--pixel-shadow`: `4px 4px 0px #00ff66`

2. **Creative Mode (Light Retro OS / Playful Paper):**
   - `--bg-primary`: `#f4f1ea` (Warm Retro Paper)
   - `--bg-elevated`: `#ffffff`
   - `--text-primary`: `#18181b`
   - `--text-muted`: `#52525b`
   - `--accent-primary`: `#ff4d00` (Retro International Orange)
   - `--accent-secondary`: `#7c3aed` (Arcade Purple)
   - `--border-color`: `#18181b`
   - `--pixel-shadow`: `4px 4px 0px #18181b`

3. **UI Rules:**
   - **Dilarang menggunakan blur shadow** pada komponen utama; selalu gunakan *hard-edge pixel shadow* (`var(--pixel-shadow)`) dan `border: 2px solid var(--border-color)`.
   - **Zero Broken Images:** Seluruh ikon 8-bit (Pac-Man dot, hati, otak, DNA, tangan pixel, karakter pixel, trofi, kursor, blok Tetris, bola dunia) WAJIB dibuat menggunakan **Inline SVG (`viewBox` berbasis grid pixel)** atau **CSS Pixel Art / Canvas**, bukan memanggil file gambar eksternal yang tidak ada.

## 4. Target Directory Structure
```text
src/
├── components/
│   ├── PixelPreloader.astro  # Fullscreen 8-Bit Boot Loader (0-100%, Morphing Icons & Pixel Grid Shutter)
│   ├── Header.astro          # Logo pixel, Mode Switcher (Dev/Creative), Quick Nav (/projects, /game, #contact)
│   ├── SectionNav.astro      # Navigasi titik vertikal ala makanan Pac-Man di sisi kanan layar (12 seksi)
│   ├── RetroWindow.astro     # Komponen reusable jendela OS (.exe, .alert, .sys)
│   ├── ContactDialog.astro   # Modal native <dialog> bergaya terminal (C:/HZB.DEV/CONTACT)
│   └── PixelIcons.astro      # Kumpulan inline SVG 8-bit (Pac-Man, Heart, Brain, DNA, Hands, Trophy, Claw, Globe)
├── data/
│   └── projects.ts           # Data portofolio proyek (Web Dev, UI/UX, Database/IS, Hackathon)
├── layouts/
│   └── BaseLayout.astro      # Kerangka HTML5, Google Fonts, Theme Init Script, PixelPreloader, Header & ContactDialog
├── pages/
│   ├── index.astro           # Landing page Pinned Scroll Storytelling (Hero, Creator LVL, Pixels->Ideas->Brain, DNA, Emotion/Beauty/Hands, 10-Window OS Cascade, Tetris CTA, World Footer)
│   ├── projects.astro        # Halaman daftar proyek + fitur interaktif Arcade Claw Machine
│   ├── game.astro            # Halaman mini-game HTML5 Canvas (Pixel Runner + Local Leaderboard SAVE_SCORE.EXE)
│   └── 404.astro             # Halaman 404 interaktif bergaya Space Invaders
└── styles/
    └── global.css            # CSS Variables, Reset, Retro Window classes, Pixel Art utilities, Animations

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
