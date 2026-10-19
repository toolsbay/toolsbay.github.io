import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const svg = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Gradients -->
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#111310" />
      <stop offset="50%" stop-color="#1A1E18" />
      <stop offset="100%" stop-color="#111310" />
    </linearGradient>
    
    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#D9D28B" />
      <stop offset="100%" stop-color="#B2BD7E" />
    </linearGradient>

    <linearGradient id="cardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1F241D" stop-opacity="0.9" />
      <stop offset="100%" stop-color="#161914" stop-opacity="0.9" />
    </linearGradient>

    <radialGradient id="glow" cx="20%" cy="25%" r="45%">
      <stop offset="0%" stop-color="#6A795D" stop-opacity="0.35" />
      <stop offset="100%" stop-color="#6A795D" stop-opacity="0" />
    </radialGradient>

    <radialGradient id="goldGlow" cx="80%" cy="75%" r="50%">
      <stop offset="0%" stop-color="#D9D28B" stop-opacity="0.18" />
      <stop offset="100%" stop-color="#D9D28B" stop-opacity="0" />
    </radialGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="630" fill="url(#bgGrad)" />
  <rect width="1200" height="630" fill="url(#glow)" />
  <rect width="1200" height="630" fill="url(#goldGlow)" />

  <!-- Outer Luxury Border -->
  <rect x="30" y="30" width="1140" height="570" rx="28" fill="none" stroke="#2C342A" stroke-width="2" />
  <rect x="30" y="30" width="1140" height="570" rx="28" fill="none" stroke="#D9D28B" stroke-width="1.5" stroke-opacity="0.25" />

  <!-- Corner Accent Dots -->
  <circle cx="50" cy="50" r="4" fill="#D9D28B" />
  <circle cx="1150" cy="50" r="4" fill="#D9D28B" />
  <circle cx="50" cy="580" r="4" fill="#D9D28B" />
  <circle cx="1150" cy="580" r="4" fill="#D9D28B" />

  <!-- Top Pill Badge -->
  <g transform="translate(80, 80)">
    <rect width="360" height="42" rx="21" fill="#1F241D" stroke="#D9D28B" stroke-opacity="0.5" stroke-width="1.5" />
    <text x="25" y="27" font-family="'Plus Jakarta Sans', Arial, sans-serif" font-size="14" font-weight="700" fill="#D9D28B" letter-spacing="1.5">⚡ 100% ZERO-SERVER WEB UTILITIES</text>
  </g>

  <!-- Logo and Main Title -->
  <g transform="translate(80, 160)">
    <!-- Logo Icon Box -->
    <rect width="76" height="76" rx="20" fill="#6A795D" stroke="#B2BD7E" stroke-width="2" />
    <path d="M26 38 H50 M26 38 A4 4 0 0 1 50 38 V50 A4 4 0 0 1 46 54 H30 A4 4 0 0 1 26 50 Z" fill="none" stroke="#D9D28B" stroke-width="3.5" stroke-linecap="round" />
    <path d="M33 38 V30 A5 5 0 0 1 43 30 V38" fill="none" stroke="#D9D28B" stroke-width="3.5" stroke-linecap="round" />
    <circle cx="38" cy="45" r="2.5" fill="#D9D28B" />

    <!-- Brand Text -->
    <text x="96" y="58" font-family="'Plus Jakarta Sans', Arial, sans-serif" font-size="64" font-weight="800" fill="#FAF9F5" letter-spacing="-1.5">Tools<tspan fill="url(#goldGrad)">Bay</tspan></text>
  </g>

  <!-- Headline -->
  <text x="80" y="300" font-family="'Plus Jakarta Sans', Arial, sans-serif" font-size="44" font-weight="800" fill="#FAF9F5" letter-spacing="-1">
    55+ Free Browser Tools &amp; Utilities
  </text>
  
  <text x="80" y="348" font-family="'Plus Jakarta Sans', Arial, sans-serif" font-size="22" font-weight="500" fill="#CAD3A5">
    Privacy-first master directory running entirely in client-side WebAssembly &amp; Canvas.
  </text>

  <!-- Category Bento Badges -->
  <g transform="translate(80, 395)">
    <!-- Tag 1 -->
    <rect x="0" y="0" width="180" height="52" rx="14" fill="#1F241D" stroke="#2C342A" stroke-width="1.5" />
    <text x="20" y="33" font-family="'Plus Jakarta Sans', Arial, sans-serif" font-size="16" font-weight="600" fill="#FAF9F5">🎬 Video &amp; Audio</text>

    <!-- Tag 2 -->
    <rect x="195" y="0" width="160" height="52" rx="14" fill="#1F241D" stroke="#2C342A" stroke-width="1.5" />
    <text x="215" y="33" font-family="'Plus Jakarta Sans', Arial, sans-serif" font-size="16" font-weight="600" fill="#FAF9F5">📄 PDF &amp; Docs</text>

    <!-- Tag 3 -->
    <rect x="370" y="0" width="180" height="52" rx="14" fill="#1F241D" stroke="#2C342A" stroke-width="1.5" />
    <text x="390" y="33" font-family="'Plus Jakarta Sans', Arial, sans-serif" font-size="16" font-weight="600" fill="#FAF9F5">🖼️ Image &amp; Design</text>

    <!-- Tag 4 -->
    <rect x="565" y="0" width="220" height="52" rx="14" fill="#1F241D" stroke="#2C342A" stroke-width="1.5" />
    <text x="585" y="33" font-family="'Plus Jakarta Sans', Arial, sans-serif" font-size="16" font-weight="600" fill="#FAF9F5">🚀 Productivity</text>

    <!-- Tag 5 -->
    <rect x="800" y="0" width="190" height="52" rx="14" fill="#1F241D" stroke="#2C342A" stroke-width="1.5" />
    <text x="820" y="33" font-family="'Plus Jakarta Sans', Arial, sans-serif" font-size="16" font-weight="600" fill="#FAF9F5">💻 Dev &amp; Finance</text>
  </g>

  <!-- Bottom Details Bar -->
  <g transform="translate(80, 500)">
    <line x1="0" y1="0" x2="1040" y2="0" stroke="#2C342A" stroke-width="1.5" />
    
    <text x="0" y="42" font-family="'JetBrains Mono', monospace" font-size="16" font-weight="600" fill="#D9D28B">
      https://toolsbay.github.io
    </text>

    <text x="560" y="42" font-family="'Plus Jakarta Sans', Arial, sans-serif" font-size="15" font-weight="600" fill="#8E9162">
      Zero Registration • Zero Telemetry • 100% Free Forever
    </text>
  </g>
</svg>
`;

async function generate() {
  const publicDir = path.resolve('public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  const outputPath = path.join(publicDir, 'og-image.png');
  await sharp(Buffer.from(svg))
    .png({ quality: 95 })
    .toFile(outputPath);

  console.log('og-image.png generated at:', outputPath);
}

generate().catch(console.error);
