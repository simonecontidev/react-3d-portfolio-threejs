# 🌌 3D Portfolio — React + Three.js + Vite

[![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react)](https://react.dev/)
[![Three.js](https://img.shields.io/badge/Three.js-3D-black?logo=three.js)](https://threejs.org/)
[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?logo=vite)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-11.0-EF007B?logo=framer)](https://www.framer.com/motion/)
[![Live Demo](https://img.shields.io/badge/Live%20Demo-Vercel-black?logo=vercel)](https://threejs-portfolio.vercel.app)

---

## 🌐 Live Demo & Preview

🎯 **Live:** [Live Demo](https://planet.simoneconti.work/)  

---

## ✨ Overview

A **3D interactive portfolio** built with **React + Three.js + Vite**, showcasing creative coding and real-time WebGL rendering.  
It’s designed as a visually immersive experience that blends **motion, depth, and storytelling** — ideal for portfolio showcases, agencies, or creative developers.

> 🧑‍💻 Built by [Simone Conti](https://simoneconti.work) — Front-End Developer & Visual Artist exploring motion, interaction, and 3D environments.

---

## 🧩 Features

- 🧭 **Three.js Integration** — custom shaders, lighting, and smooth camera motion  
- 💫 **React Three Fiber** — declarative 3D scenes inside React components  
- 🎞️ **Framer Motion** — layered animations and page transitions  
- 🪄 **GSAP** — scroll-triggered 3D animations and timeline sequences  
- 🌗 **Dark / Light Mode** — adaptive ambient color tone  
- ⚡ **Vite** — ultra-fast HMR for smooth 3D development  
- 🎨 **Custom Materials** — environment maps, bloom effects, and dynamic lighting  
- 🧠 **Optimized Rendering** — reduced draw calls and responsive canvas resizing  

---

## 🛠️ Tech Stack

| Layer | Tools |
|-------|-------|
| **Framework** | [React 18 + Vite](https://vitejs.dev/) |
| **3D Engine** | [Three.js](https://threejs.org/) |
| **Renderer** | [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction) |
| **Animations** | [Framer Motion](https://www.framer.com/motion/), [GSAP](https://greensock.com/gsap/) |
| **Post-Processing** | [Drei + PostProcessing](https://github.com/pmndrs/drei) |
| **Language** | TypeScript |
| **Deployment** | [Vercel](https://vercel.com) |

---

## 🧠 Architecture

```bash
src/
├─ components/
│  ├─ Scene.tsx              # Main 3D scene setup
│  ├─ CanvasWrapper.tsx      # R3F <Canvas> with controls & resizing
│  ├─ HeroSection.tsx        # 3D intro area with text & lighting
│  ├─ Model.tsx              # GLTF model loader
│  ├─ Lighting.tsx           # Scene lights setup
│  ├─ OrbitControls.tsx      # Camera interaction
│  └─ UIOverlay.tsx          # Front layer with title & nav
│
├─ hooks/
│  ├─ useMouseParallax.ts    # Mouse-based camera offset
│  ├─ useThemeSwitch.ts      # Sync scene lighting with theme
│
├─ assets/
│  ├─ models/                # 3D models (.gltf / .glb)
│  └─ textures/              # HDRI, normal maps, environment textures
│
├─ styles/
│  └─ globals.css

```
---

## Getting Started
# 1. Clone the repo
git clone https://github.com/simonecontidev/threejs-portfolio.git
cd threejs-portfolio

# 2. Install dependencies
npm install
# or
pnpm install

# 3. Run development server
npm run dev

# 4. Open in browser
http://localhost:5173

---

## Design Philosophy

“A portfolio should feel alive — not just be seen, but experienced.”

	•	Focus: storytelling through 3D space
	•	Aesthetic: dark elegance with light-driven depth
	•	Goal: blend motion, design, and interactivity
	•	Tone: immersive, cinematic, minimal
	•	Influence: Bruno Simon, Obys, Awwwards 3D experiences

---

## License

MIT License — free to use, fork, and adapt for educational or portfolio purposes.

⸻

“Code meets canvas — explore, move, and feel.” 🌌
│
├─ App.tsx
└─ main.tsx
