# Avatar Studio

A modern 3D Avatar Studio built with **Nuxt 4**, **TresJS**, **Three.js**, and **Tailwind CSS**. Create, customize, and interact with a fully procedural 3D avatar directly in the browser.

## Features

### 3D Avatar Customization
- **Hair Styles**: Short, medium, long, mohawk, curly, bun, ponytail, pompadour, undercut
- **Hair Colors**: 10 colors including natural and fantasy shades
- **Skin Tones**: 10 skin tones from porcelain to ebony
- **Eye Colors**: Blue, green, brown, hazel, gray, amber, violet
- **Face Shapes**: Round, oval, square, heart, diamond
- **Clothing**: T-shirt, hoodie, jacket, suit, tank top, dress
- **Accessories**: Glasses, sunglasses, necklace, earrings, watch
- **Hats**: Baseball, beanie, top hat, cap
- **Shoes**: Sneakers, boots, sandals, formal

### Character Controls
- Orbit controls for rotate, zoom, and pan
- Rotate left/right buttons
- Reset camera view
- Full-screen mode
- Screenshot capture (PNG download)
- Export/Import avatar as JSON

### Animation System
- Idle (breathing)
- Walk
- Run
- Wave
- Sit
- Dance
- Jump

Speed control from 0.1x to 3x.

### Avatar Data Management
- Save to localStorage
- Load saved avatars
- Export avatar config as JSON
- Import avatar from JSON file
- Gallery page with saved avatars

## Tech Stack

| Technology | Purpose |
|---|---|
| [Nuxt 4](https://nuxt.com/) | Vue framework with file-based routing |
| [Vue 3](https://vuejs.org/) | Composition API with `<script setup>` |
| [TypeScript](https://www.typescriptlang.org/) | Type safety |
| [TresJS](https://tresjs.org/) | Vue components for Three.js |
| [Three.js](https://threejs.org/) | 3D rendering engine |
| [Cientos](https://cientos.tresjs.org/) | OrbitControls and helpers |
| [Pinia](https://pinia.vuejs.org/) | State management |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first styling |
| [Color Mode](https://color-mode.nuxtjs.org/) | Dark/light mode |

## Project Structure

```
AvatarStudio/
├── app/
│   ├── assets/css/          # Global styles
│   ├── components/
│   │   ├── avatar/          # 3D components (viewer, procedural avatar, hair, accessories)
│   │   ├── customization/   # Sidebar panels (hair, face, eyes, clothing, etc.)
│   │   └── ui/              # Reusable UI (toolbar, theme toggle, color swatches, modal)
│   ├── composables/         # Reusable logic (useAvatarAnimation, useAvatarExport, useAvatarPersistence)
│   ├── layouts/             # default.vue and studio.vue layouts
│   ├── pages/               # index.vue (dashboard), studio.vue (editor), gallery.vue
│   ├── plugins/             # Pinia client plugin
│   ├── stores/              # Pinia stores (avatar, ui, animation)
│   ├── types/               # TypeScript interfaces
│   ├── utils/               # Constants and helpers
│   └── app.vue              # Root component
├── server/
│   ├── api/avatar/          # REST API endpoints (save, load, list)
│   └── utils/               # Server utilities
├── public/                  # Static assets (models directory structure)
├── nuxt.config.ts           # Nuxt configuration
├── tailwind.config.ts       # Tailwind configuration
└── package.json
```

## Getting Started

### Prerequisites

- Node.js >= 20.x
- npm >= 9.x

### Installation

```bash
cd AvatarStudio
npm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm run preview
```

## Architecture Notes

### Procedural Avatar
The avatar is built entirely from Three.js primitives (spheres, boxes, cylinders, toruses). No external 3D model files are required. Each body part is reactive to the Pinia store, so changes update in real-time.

### Future Extension Points

The codebase is designed for future features:

- **AI Avatar Generation**: Add `composables/useAvatarAi.ts` that sends config to an API endpoint
- **Voice Chat**: Add `server/ws/voice.ts` for WebSocket audio streaming
- **Lip Sync**: Add `composables/useLipSync.ts` to drive mouth shapes from audio
- **Multiplayer**: Add WebSocket server and sync AvatarConfig between clients
- **VR/AR**: TresJS supports WebXR; add a VR camera setup and XR button
- **NFT Export**: Extend `useAvatarExport.ts` to generate metadata for OpenSea/ERC-1155

### Performance

- TresJS auto-handles `ClientOnly` rendering
- Components use `computed` and `shallowRef` where appropriate
- Animation system uses `useLoop` from TresJS (requestAnimationFrame-based)
- Dark mode uses CSS custom properties (no re-render)

## License

MIT
