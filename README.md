# ABYLUX — React (Vite)

## Run locally
```bash
npm install
npm run dev        # http://localhost:5173
```

## Build for production
```bash
npm run build      # outputs to /dist
npm run preview
```

## Images
Copy your image files into `public/assets/` (see the README.txt there for the list of names).

## Structure
- `src/components/` — one component per section (Header, Hero, Services, About, Projects, Pricing, FAQ, Contact, Footer, WhatsAppButton)
- `src/styles.css` — all styles (light page, dark header)
- Edit plan prices/features in `Pricing.jsx`, FAQ text in `FAQ.jsx`, WhatsApp number in `WhatsAppButton.jsx`.
