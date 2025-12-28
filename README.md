# Karaama Production Frontend

Modern React frontend for the Karaama Production website with animations, count-up effects, and responsive design.

## Features

- ✨ Smooth animations and transitions
- 📊 Count-up animations for statistics
- 📧 Contact form integration
- 🎨 Modern, responsive design with Tailwind CSS
- ⚡ Fast and optimized with Vite
- 🔄 Real-time scroll animations

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Lucide React (Icons)

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173` (or the port shown in terminal)

## Configuration

### API URL

The frontend is configured to connect to the backend API. In development, it uses a proxy. For production, set the environment variable:

```env
VITE_API_URL=http://localhost:5000
```

Or update `src/lib/api.ts` with your production API URL.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript type checking

## Project Structure

```
frontend/
├── src/
│   ├── components/      # React components
│   ├── hooks/          # Custom React hooks
│   ├── lib/           # API client and utilities
│   ├── App.tsx        # Main app component
│   ├── main.tsx       # Entry point
│   └── index.css      # Global styles
├── index.html
├── vite.config.ts
└── package.json
```

## Development

Make sure the backend server is running on port 5000 for the contact form to work properly.

## Production Build

Build the frontend:
```bash
npm run build
```

The built files will be in the `dist` folder, ready to be deployed to any static hosting service.

