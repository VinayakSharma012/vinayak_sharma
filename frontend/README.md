# Frontend - React + Vite + Tailwind

Modern React frontend with Vite build tool and Tailwind CSS styling.

## 📁 Structure

```
src/
├── components/     # Reusable UI components
├── views/         # Page-level components
├── services/      # API communication
├── styles/        # Global CSS
├── utils/         # Helper functions
├── App.jsx        # Main component
└── main.jsx       # Entry point
```

## 🚀 Getting Started

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on **http://localhost:3001**

## 📦 Build

```bash
npm run build
```

Output goes to `dist/` folder.

## 🎨 Styling

- **Tailwind CSS** - Utility-first CSS framework
- **Custom Tokens** - Design system tokens in `tailwind.config.js`
- **Responsive** - Mobile-first responsive design

## 🔗 API Integration

API calls are centralized in `services/api.js`:

```javascript
import { getPortfolio, getProjects } from './services/api.js'

// Use in components
const portfolio = await getPortfolio()
```

## 📝 Components

- **Nav** - Navigation bar
- **Hero** - Landing section
- **About** - About section
- **Education** - Education history
- **Projects** - Featured projects
- **Skills** - Skills listing
- **Certifications** - Certifications
- **Contact** - Contact form
- **Footer** - Footer section
