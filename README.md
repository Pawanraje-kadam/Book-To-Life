# 📚 Book to Life

> Don't just read. **Evolve.**

Book to Life is an AI-powered web app that predicts how your life will realistically change if you apply the principles of any book — based on your age, current role, goals, and available time.

---

## ✨ Features

- 🤖 **AI Life Projections** — Powered by Groq (LLaMA 3 70B)
- 📅 **Trajectory Timeline** — 30 days, 6 months, 1 year, 5 years
- 🎯 **Reality Score** — Honest probability of achieving your goal
- ⚠️ **Risk & Tradeoff Analysis** — No motivational fluff
- 🗺️ **Personalized Roadmap** — Tailored to your available hours
- 🌙 **Dark Mode** — System, light, and dark theme support

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18 + TypeScript + Vite |
| Styling | Tailwind CSS + shadcn/ui |
| Animations | Framer Motion |
| Forms | React Hook Form + Zod |
| Backend | Netlify Functions |
| AI | Groq API (LLaMA 3 70B) |
| Testing | Vitest + Testing Library |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 20+
- A free [Groq API key](https://console.groq.com)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/yourusername/book-to-life.git
cd book-to-life

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env
# Add your real GROQ_API_KEY to .env

# 4. Start the development server
npm run dev
```

App runs at `http://localhost:3000`

---

## 🔑 Environment Variables

| Variable | Description |
|----------|-------------|
| `VITE_APP_URL` | App base URL (e.g. `http://localhost:3000`) |
| `GROQ_API_KEY` | Your Groq API key — server-side only, never exposed to browser |

> ⚠️ Never commit your `.env` file. Only `.env.example` is safe to push.

---

## 📁 Project Structure

```
book-to-life/
├── netlify/
│   └── functions/
│       └── generate-report.ts   # Groq API call (server-side)
└── src/
    ├── components/
    │   ├── features/             # PredictionForm, ReportView
    │   ├── home/                 # Hero, Features
    │   ├── layout/               # Navbar, Footer
    │   └── ui/                   # Reusable UI components
    ├── lib/
    │   ├── api.ts                # Frontend → Netlify function call
    │   └── utils.ts              # cn() utility
    ├── pages/                    # Home, Create
    └── schemas/
        └── prediction.ts         # Zod validation schema
```

---

## 🧪 Running Tests

```bash
npm run test
```

---

## 🌐 Deployment (Netlify)

1. Push code to GitHub
2. Connect repo on [Netlify](https://netlify.com)
3. Add environment variable `GROQ_API_KEY` in **Site Settings → Environment Variables**
4. Deploy — Netlify handles the build automatically

---

## 📄 License

MIT © 2024 Book to Life
