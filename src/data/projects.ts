export interface Project {
  id: string;
  title: string;
  year: number;
  client: string;
  role: 'Design' | 'Development' | 'System Analysis';
  techStack: string[];
  description: string;
  posterSVG: string; // inline SVG sebagai poster pixel 8-bit
}

export const projects: Project[] = [
  {
    id: 'proj-1',
    title: 'E-Commerce Platform "PIXELMART"',
    year: 2024,
    client: 'Startup Retail Indonesia',
    role: 'Development',
    techStack: ['Astro', 'React', 'Tailwind', 'PostgreSQL', 'Redis'],
    description: 'Platform e-commerce full-stack dengan arsitektur mikro-layanan, sistem keranjang real-time, dan pembayaran terintegrasi Midtrans. Menggunakan Astro untuk performa SSR optimal dan React untuk interaktivitas keranjang.',
    posterSVG: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges">
      <rect width="64" height="64" fill="#141820"/>
      <rect x="8" y="8" width="48" height="48" fill="#0b0d10" stroke="#00ff66" stroke-width="2"/>
      <text x="32" y="20" font-family="monospace" font-size="6" fill="#00ff66" text-anchor="middle">🛒</text>
      <rect x="16" y="28" width="32" height="4" fill="#00ff66"/>
      <rect x="16" y="36" width="20" height="3" fill="#38bdf8"/>
      <rect x="16" y="42" width="28" height="3" fill="#38bdf8"/>
      <rect x="24" y="50" width="16" height="4" fill="#00ff66" rx="2"/>
    </svg>`
  },
  {
    id: 'proj-2',
    title: 'Sistem Informasi Akademik "SIAKAD-PIXEL"',
    year: 2023,
    client: 'Universitas Teknologi Digital',
    role: 'System Analysis',
    techStack: ['Laravel', 'MySQL', 'Docker', 'Redis', 'GitLab CI'],
    description: 'Perancangan arsitektur database terdistribusi untuk sistem akademik 10.000+ mahasiswa. Normalisasi hingga 3NF, partisi tabel per semester, read-replica untuk laporan, dan migrasi zero-downtime dari sistem legacy.',
    posterSVG: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges">
      <rect width="64" height="64" fill="#141820"/>
      <rect x="8" y="8" width="48" height="48" fill="#0b0d10" stroke="#00ff66" stroke-width="2"/>
      <rect x="12" y="12" width="10" height="10" fill="#00ff66"/>
      <rect x="26" y="12" width="10" height="10" fill="#38bdf8"/>
      <rect x="40" y="12" width="10" height="10" fill="#00ff66"/>
      <rect x="12" y="26" width="38" height="2" fill="#00ff66"/>
      <rect x="12" y="32" width="14" height="14" fill="#38bdf8"/>
      <rect x="30" y="32" width="20" height="14" fill="#00ff66"/>
      <rect x="12" y="50" width="38" height="2" fill="#00ff66"/>
    </svg>`
  },
  {
    id: 'proj-3',
    title: 'Design System "RETRO-UI"',
    year: 2024,
    client: 'Internal Open Source',
    role: 'Design',
    techStack: ['Figma', 'Storybook', 'TypeScript', 'CSS Variables', 'Vite'],
    description: 'Design system bergaya retro 8-bit dengan token warna dual-mode (Developer/Creative), komponen aksesibel (WCAG AA), dan dokumentasi interaktif. Dipakai 3 tim produk internal.',
    posterSVG: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges">
      <rect width="64" height="64" fill="#141820"/>
      <rect x="8" y="8" width="48" height="48" fill="#0b0d10" stroke="#00ff66" stroke-width="2"/>
      <rect x="14" y="14" width="12" height="12" fill="#00ff66"/>
      <rect x="30" y="14" width="12" height="12" fill="#38bdf8"/>
      <rect x="14" y="30" width="28" height="12" fill="#00ff66" fill-opacity="0.2" stroke="#00ff66" stroke-width="1"/>
      <circle cx="32" cy="48" r="6" fill="#38bdf8"/>
      <rect x="29" y="45" width="6" height="6" fill="#0b0d10"/>
    </svg>`
  },
  {
    id: 'proj-4',
    title: 'Hackathon Winner: "BUG-HUNTER ARCADE"',
    year: 2024,
    client: 'Hackathon Nasional "CodeQuest 2024"',
    role: 'Development',
    techStack: ['Phaser.js', 'WebSocket', 'Node.js', 'Socket.io', 'Vercel'],
    description: 'Game multiplayer real-time 2D platformer dibuat dalam 48 jam. 4 pemain bersaing mengumpulkan bug (token) sambil menghindari antivirus. Juara 1 kategori "Best Technical Implementation".',
    posterSVG: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges">
      <rect width="64" height="64" fill="#141820"/>
      <rect x="8" y="8" width="48" height="48" fill="#0b0d10" stroke="#ff4d00" stroke-width="2"/>
      <rect x="20" y="16" width="24" height="8" fill="#ff4d00"/>
      <rect x="24" y="28" width="16" height="20" fill="#7c3aed"/>
      <rect x="20" y="28" width="4" height="12" fill="#ff4d00"/>
      <rect x="36" y="28" width="4" height="12" fill="#ff4d00"/>
      <rect x="24" y="52" width="6" height="4" fill="#ff4d00"/>
      <rect x="34" y="52" width="6" height="4" fill="#ff4d00"/>
      <text x="32" y="44" font-family="monospace" font-size="5" fill="#ff4d00" text-anchor="middle">🏆</text>
    </svg>`
  },
  {
    id: 'proj-5',
    title: 'Dashboard Analytics "PIXEL-INSIGHTS"',
    year: 2023,
    client: 'SaaS Analytics Startup',
    role: 'Development',
    techStack: ['Next.js', 'D3.js', 'ClickHouse', 'TypeScript', 'Tailwind'],
    description: 'Dashboard real-time memproses 1M+ events/hari. Visualisasi custom dengan D3.js, query sub-second via ClickHouse, dan fitur export PDF/CSV. Meningkatkan kecepatan pengambilan keputusan klien 40%.',
    posterSVG: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges">
      <rect width="64" height="64" fill="#141820"/>
      <rect x="8" y="8" width="48" height="48" fill="#0b0d10" stroke="#00ff66" stroke-width="2"/>
      <rect x="12" y="12" width="8" height="30" fill="#00ff66"/>
      <rect x="24" y="18" width="8" height="24" fill="#38bdf8"/>
      <rect x="36" y="10" width="8" height="32" fill="#00ff66"/>
      <rect x="48" y="22" width="8" height="20" fill="#38bdf8"/>
      <polyline points="12,42 24,36 36,30 48,22" fill="none" stroke="#ff4d00" stroke-width="2"/>
    </svg>`
  },
  {
    id: 'proj-6',
    title: 'Mobile App "PIXEL-TASK" (PWA)',
    year: 2024,
    client: 'Freelance - Productivity Tool',
    role: 'Design',
    techStack: ['React Native', 'Expo', 'SQLite', 'Zustand', 'TypeScript'],
    description: 'Aplikasi manajemen tugas offline-first dengan sinkronisasi background. UI retro pixel dengan animasi frame-by-frame. Fitur: pomodoro terintegrasi, kategori warna, dan backup ke Google Drive.',
    posterSVG: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges">
      <rect width="64" height="64" fill="#141820"/>
      <rect x="8" y="8" width="48" height="48" fill="#0b0d10" stroke="#00ff66" stroke-width="2"/>
      <rect x="16" y="14" width="32" height="4" fill="#00ff66"/>
      <rect x="16" y="22" width="10" height="10" fill="none" stroke="#38bdf8" stroke-width="2"/>
      <rect x="16" y="36" width="20" height="10" fill="#00ff66" fill-opacity="0.2" stroke="#00ff66" stroke-width="1"/>
      <text x="32" y="30" font-family="monospace" font-size="8" fill="#00ff66" text-anchor="middle">✓</text>
      <rect x="26" y="50" width="12" height="4" fill="#38bdf8" rx="2"/>
    </svg>`
  },
  {
    id: 'proj-7',
    title: 'API Gateway "PIXEL-GATE"',
    year: 2023,
    client: 'Enterprise Fintech',
    role: 'System Analysis',
    techStack: ['Go', 'gRPC', 'Kubernetes', 'Prometheus', 'OpenTelemetry'],
    description: 'Arsitektur API Gateway high-throughput (50k RPS) dengan rate-limiting adaptive, circuit breaker, dan distributed tracing. Migrasi dari monolith ke microservices tanpa downtime.',
    posterSVG: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges">
      <rect width="64" height="64" fill="#141820"/>
      <rect x="8" y="8" width="48" height="48" fill="#0b0d10" stroke="#00ff66" stroke-width="2"/>
      <rect x="18" y="18" width="10" height="28" fill="#00ff66"/>
      <rect x="36" y="18" width="10" height="28" fill="#00ff66"/>
      <rect x="28" y="12" width="8" height="10" fill="#38bdf8"/>
      <line x1="23" y1="30" x2="41" y2="30" stroke="#ff4d00" stroke-width="2"/>
      <line x1="23" y1="38" x2="41" y2="38" stroke="#ff4d00" stroke-width="2"/>
      <circle cx="32" cy="50" r="4" fill="#ff4d00"/>
    </svg>`
  },
  {
    id: 'proj-8',
    title: 'Game Jam Entry "RETRO-RUNNER"',
    year: 2024,
    client: 'Global Game Jam 2024',
    role: 'Development',
    techStack: ['Godot 4', 'GDScript', 'Aseprite', 'itch.io'],
    description: 'Endless runner 2D buatan 72 jam dengan estetik Game Boy. Procedural generation level, 3 power-up unik, dan leaderboard online. Diunduh 5.000+ kali di itch.io minggu pertama.',
    posterSVG: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges">
      <rect width="64" height="64" fill="#141820"/>
      <rect x="8" y="8" width="48" height="48" fill="#0b0d10" stroke="#ff4d00" stroke-width="2"/>
      <rect x="20" y="20" width="12" height="20" fill="#7c3aed"/>
      <rect x="16" y="24" width="4" height="8" fill="#ff4d00"/>
      <rect x="32" y="24" width="4" height="8" fill="#ff4d00"/>
      <rect x="20" y="44" width="5" height="5" fill="#ff4d00"/>
      <rect x="31" y="44" width="5" height="5" fill="#ff4d00"/>
      <polyline points="12,52 20,44 32,44 40,52" fill="none" stroke="#7c3aed" stroke-width="2"/>
      <text x="32" y="16" font-family="monospace" font-size="5" fill="#ff4d00" text-anchor="middle">🎮</text>
    </svg>`
  }
];