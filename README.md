# MediSearch Onboarding

React PWA take-home: a 4-step mobile onboarding flow for MediSearch.

## Screens

1. **Welcome** — logo, short intro, Continue
2. **Topics** — Personal Health / Research / Other
3. **Subtopics** — selectable bubbles + custom “Anything else?” / Add (skipped when Other is selected)
4. **Final** — blank screen with “MediSearch”

## Develop

```bash
npm install
npm run dev
```

Open at a phone width (≈375–430px) or use Chrome DevTools device mode.

## Build / preview

```bash
npm run build
npm run preview
```

## Test as a home screen shortcut (PWA)

1. Run `npm run preview` (or host `dist/`) and open the URL on your phone.
2. **iOS Safari:** Share → Add to Home Screen.
3. **Android Chrome:** Menu → Install app / Add to Home screen.
4. Open the icon — it should launch in standalone mode (no browser chrome).

## Stack

Vite + React + TypeScript, plain CSS, Web App Manifest + service worker.
