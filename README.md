# 🚀 Portfolio - Full-Stack MVC Architecture

A professional full-stack portfolio built with **React** (frontend) and **Express.js** (backend) following **MVC architecture** principles.

## 📁 Project Structure

```
portfolio/
├── frontend/                    # React Frontend Application
│   ├── src/
│   │   ├── components/         # Reusable UI components
│   │   ├── views/              # Page-level components
│   │   ├── services/           # API communication layer
│   │   ├── styles/             # Global CSS & Tailwind
│   │   ├── utils/              # Helper functions
│   │   ├── App.jsx             # Main app component
│   │   └── main.jsx            # Vite entry point
│   └── package.json
│
├── backend/                     # Express Backend (MVC)
│   ├── server.js               # Main entry point
│   ├── src/
│   │   ├── routes/             # API routes
│   │   ├── middleware/         # Custom middleware
│   │   ├── data/               # Data files
│   │   └── services/           # Business logic
│   └── package.json
│
└── README.md                   # This file

## ✨ Quick Start

```bash
# Install and run both servers
npm run dev

# Frontend: http://localhost:3001
# Backend: http://localhost:4000
```

## � Design System

**"Neon Archive"** - Premium cyberpunk-inspired design with:
- Deep navy background (#080c25)
- Cyan neon accents (#79e3ff)
- Glassmorphism effects
- Professional typography
- **🎭 Framer Motion** - Smooth animations and transitions
- **🌐 Express.js Backend** - RESTful API for portfolio data
- **📱 Responsive Design** - Mobile-first approach
- **📊 Interactive Skills** - Dynamic skill visualization
- **� Contact Form** - Backend-integrated contact form with validation
- **🔗 Social Links** - GitHub, LinkedIn, LeetCode integration

## 🎯 Quick Start

### Prerequisites
- Node.js >= 14.0.0
- npm or yarn

### Installation & Setup

1. **Clone or extract the project**
```bash
cd Portfolio
```

2. **Run the setup script** (Recommended)
```bash
./setup.sh
```

Or **manual setup:**

```bash
# Install frontend dependencies
npm install

# Install backend dependencies
cd server
npm install
cd ..
```

### Running Locally

**Terminal 1 - Frontend (React + Vite):**
```bash
npm run dev
```
Frontend will be available at: `http://localhost:3001`

**Terminal 2 - Backend (Express):**
```bash
cd server
npm start
```
Backend will be available at: `http://localhost:4000`

## 📦 Project Structure

```
Portfolio/
├── src/
│   ├── components/           # React components
│   │   ├── Hero.jsx         # Landing section
│   │   ├── About.jsx        # About section
│   │   ├── Education.jsx    # Education history
│   │   ├── Projects.jsx     # Featured projects
│   │   ├── Certifications.jsx # Certifications
│   │   ├── Skills.jsx       # Technical skills
│   │   ├── Contact.jsx      # Contact form
│   │   ├── Nav.jsx          # Navigation bar
│   │   └── Footer.jsx       # Footer
│   ├── services/
│   │   └── api.js           # Backend API service
│   ├── App.jsx              # Main app component
│   ├── index.css            # Global styles
│   └── main.jsx             # Entry point
│
├── server/
│   ├── server.js            # Express server
│   ├── .env                 # Environment variables
│   ├── .env.example         # Environment template
│   ├── package.json         # Dependencies
│   └── README.md            # Backend documentation
│
├── public/
│   └── index.html           # HTML template
│
├── package.json             # Frontend dependencies
├── tailwind.config.js       # Tailwind configuration
├── vite.config.ts           # Vite configuration
├── setup.sh                 # Setup script
└── README.md               # This file
```

## 🎨 Design System

### Color Palette (Neon Archive)

**Surfaces:**
- `#080c25` - surface (deep void)
- `#0c112d` - surface-container-low
- `#10153d` - surface-container
- `#1d2347` - surface-container-highest

**Accents:**
- `#79e3ff` - primary (cyan)
- `#c57eff` - secondary (purple)
- `#ffe792` - tertiary (yellow)

### Typography

- **Headlines:** Space Grotesk (bold, aggressive)
- **Body:** Inter (clean, professional)
- **Code:** JetBrains Mono (technical)

### Components

All components feature:
- ✨ Smooth Framer Motion animations
- 🎭 Glassmorphism effects
- 🌟 Hover interactions
- 📱 Responsive layouts
- ⚡ Performance optimized

## 📚 API Endpoints

### Health Check
```
GET /api/health
```

### Portfolio Data
```
GET /api/portfolio       # Portfolio info
GET /api/education      # Education history
GET /api/skills         # Technical skills
GET /api/projects       # Featured projects
GET /api/certifications # Certifications
```

### Contact Form
```
POST /api/contact
Body: {
  "name": "string",
  "email": "string",
  "subject": "string",
  "message": "string"
}
```

📖 **Full API Documentation:** `server/README.md`

## 🛠️ Development Scripts

### Frontend
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

### Backend
```bash
cd server
npm start        # Start production server
npm run dev      # Start with auto-reload
```

## 🚀 Deployment

### Frontend - Vercel (Recommended)

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow prompts
4. Frontend will be deployed

### Frontend - Netlify

1. Connect GitHub repo to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`

### Backend - Vercel Serverless

1. Create API routes in `/api` directory
2. Deploy with `vercel`

### Backend - Heroku

1. Create `Procfile`: `web: node server/server.js`
2. Push to Heroku: `git push heroku main`

### Backend - Railway / Render

1. Connect GitHub repo
2. Set start command: `node server/server.js`
3. Deploy

## 🔧 Configuration

### Environment Variables

**Backend (.env):**
```env
PORT=4000
NODE_ENV=development
CORS_ORIGIN=http://localhost:3001
CONTACT_EMAIL=205125113@nitt.edu
```

**Frontend API URL** - Update in `src/services/api.js`:
```javascript
const API_BASE_URL = 'http://localhost:4000/api';
```

## 📋 Content

### Personal Information
- **Name:** Vinayak Sharma
- **Title:** Web Developer | Computer Science Student
- **Location:** Tiruchirappalli, India
- **Email:** 205125113@nitt.edu

### Education
- **MCA** - NIT Tiruchirappalli (2025-2028) - CGPA: 9.05/10
- **BCA** - CSJMU Kanpur (2022-2025) - CGPA: 8.37/10

### Skills
- **Languages:** Java (92%), JavaScript (90%), Python (80%), C (78%)
- **Frontend:** React (90%), HTML/CSS (90%), Tailwind CSS (88%)
- **Backend:** Node.js (88%), Express.js (85%)
- **Databases:** MongoDB (85%), SQL (80%)
- **Tools:** Git, GitHub, VS Code, IntelliJ IDEA, Postman

### Featured Projects (8)
1. BiteBridge - Food delivery app
2. WanderLust - Travel planning platform
3. Smart Parking - Parking management system
4. GenAi Network - AI social platform
5. Contact Management - CRM system
6. Manga-Verse - Manga platform
7. Spotify Clone - Music streaming
8. Simon Says Game - Memory game

### Certifications (3)
1. Full Stack Web Development - Apna College (Nov 2024)
2. Data Structures with Java - Apna College (May 2024)
3. Core Java Certification - SKDeft (Aug 2023)

## 🔗 Social Links

- **GitHub:** https://github.com/VinayakSharma012
- **LinkedIn:** https://linkedin.com/in/vinayak-sharma012
- **LeetCode:** https://leetcode.com/u/sparkykun/
- **Email:** 205125113@nitt.edu

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## ✅ Testing

### Manual Testing Checklist

- [ ] Frontend loads without errors
- [ ] All navigation links work
- [ ] Contact form submits to backend
- [ ] Backend health check responds
- [ ] All API endpoints return data
- [ ] Responsive design works on mobile
- [ ] Animations are smooth
- [ ] Social links open correctly
- [ ] No console errors

### API Testing with cURL

```bash
# Test backend
curl http://localhost:4000/api/health

# Test contact form
curl -X POST http://localhost:4000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","subject":"Hello","message":"Hi"}'
```

## 🐛 Troubleshooting

### Port Already in Use

```bash
# Find process on port
lsof -i :3001  # Frontend
lsof -i :4000  # Backend

# Kill process
kill -9 <PID>
```

### CORS Issues

Ensure `CORS_ORIGIN` in backend `.env` matches your frontend URL:
```env
CORS_ORIGIN=http://localhost:3001
```

### Dependencies Issues

```bash
# Clear and reinstall
rm -rf node_modules package-lock.json
npm install

# Same for backend
cd server
rm -rf node_modules package-lock.json
npm install
```

## 📚 Additional Resources

- [React Documentation](https://react.dev)
- [Vite Guide](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)
- [Express.js](https://expressjs.com)

## 🤝 Contributing

This is a personal portfolio project. To suggest improvements:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

MIT License - Free to use and modify

## ✉️ Contact

For questions or opportunities:
- **Email:** 205125113@nitt.edu
- **LinkedIn:** linkedin.com/in/vinayak-sharma012
- **GitHub:** github.com/VinayakSharma012

---

**Status:** ✅ Production Ready
**Last Updated:** April 11, 2026
**Version:** 2.0.0 (Full Stack)

Built with ❤️ by Vinayak Sharma

## 🎨 Color System

### Primary Palette
```
Dark Brown:        #1a1410  (Background)
Very Dark Brown:   #2d201a  (Sections)
Primary Brown:     #4B352A  (Cards) ⭐
Medium Brown:      #6B4F3A  (Hover states)
Light Brown:       #8B6F47  (Accents)
```

### Text Colors
```
Cream:             #f5e6d3  (Primary text)
Tan:               #d4a574  (Secondary text)
Copper:            #c68642  (Muted text)
```

### Accent Colors
```
Gold:              #d4af37  (Primary accent) ⭐
Light Gold:        #e8c857  (Hover)
Warm Peach:        #e8a87c  (Secondary accent)
Emerald:           #4a7c6c  (Success)
```

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ and npm/yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📝 Customization

### Update Personal Information

Edit `src/components/Hero.jsx`:
```jsx
<motion.h1>Your Name</motion.h1>
<p>Your title / tagline</p>
```

Edit `src/components/About.jsx`:
```jsx
<p>Your bio and story...</p>
```

### Add/Edit Projects

Update `src/components/Projects.jsx`:
```jsx
const projects = [
  {
    title: 'Your Project',
    desc: 'Project description',
    image: '📱',
    type: 'Personal Project',
    tech: ['React', 'Node.js'],
    link: 'https://your-project.com',
  },
  // More projects...
]
```

### Modify Colors

Edit `tailwind.config.js`:
```js
colors: {
  'gold': '#d4af37',  // Change accent colors
  'cream': '#f5e6d3', // Change text colors
  // ... etc
}
```

## 🎯 Sections Included

### 1. Navigation Bar
- Fixed header with smooth scroll links
- Active state indicators
- Mobile hamburger menu
- Logo/branding

### 2. Hero Section
- Large heading with gradient
- Tagline and description
- CTA buttons (primary & secondary)
- Scroll indicator with animation
- Decorative background elements

### 3. About Section
- Personal story and background
- Quick facts (location, education, etc.)
- Key highlights with icons
- Two-column responsive layout

### 4. Education Section
- Degree information
- CGPA and coursework
- Honors and awards
- Certifications and courses

### 5. Projects Section
- 6 featured projects in grid
- Project type badges
- Technology tags
- Demo and source code links
- Hover animations

### 6. Skills Section
- Technical skills with progress bars
- Frontend, backend, tools organized
- Soft skills display
- Animated skill bars on scroll

### 7. Contact Section
- Contact information
- Social media links
- Contact form
- CTA for opportunities

### 8. Footer
- Quick links
- Social media icons
- Back to top button
- Copyright information

## 🎬 Animations

- **Entrance animations** - Fade in, slide up on page load
- **Scroll animations** - Elements animate as they come into view
- **Hover effects** - Cards lift, buttons glow, text color changes
- **Continuous animations** - Pulsing glows, floating effects
- **Interaction feedback** - Click feedback with scale transitions

## 📱 Responsive Breakpoints

```css
sm: 640px   /* Mobile devices */
md: 768px   /* Tablets */
lg: 1024px  /* Desktops */
```

## ♿ Accessibility

- Semantic HTML structure
- Proper heading hierarchy (h1, h2, h3)
- Color contrast ratios meet WCAG AA standards
- Focus states for keyboard navigation
- Alt text for images
- Form labels and error handling

## 🚀 Deployment

### Deploy to Vercel (Recommended for Students - FREE)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project" and select your repo
4. Vercel auto-detects Vite setup
5. Click "Deploy"

### Deploy to Netlify

1. Build: `npm run build`
2. Go to [netlify.com](https://netlify.com)
3. Drag & drop `dist` folder
4. Or connect GitHub for auto-deploys

### Deploy to GitHub Pages

```bash
npm run build
# Push dist/ to gh-pages branch
```

## 📊 Performance

- **Vite** - Fast HMR and builds
- **Tree-shaking** - Unused code removed
- **Code splitting** - Lazy load components
- **Image optimization** - Use CSS for decorative elements
- **Lighthouse Score** - Target 90+

## 🐛 Troubleshooting

### Port 3000 already in use
```bash
npm run dev -- --port 3001
```

### Dependencies not installing
```bash
rm -rf node_modules package-lock.json
npm install
```

### Styling not applying
- Clear browser cache (Ctrl+Shift+Delete)
- Verify Tailwind classes are being used
- Check `tailwind.config.js` for custom colors

## 📚 Learning Resources

- [React Docs](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [Web Dev Bootcamp](https://www.udemy.com/course/the-complete-javascript-course/)

## 🎓 Student Tips

### Before Deploying

✅ Update all personal information  
✅ Add real project links and GitHub repos  
✅ Write compelling project descriptions  
✅ Use professional headshot for profile  
✅ Proofread all text content  
✅ Test on mobile and desktop  
✅ Check all links work  

### After Deploying

✅ Share link on LinkedIn  
✅ Update GitHub profile bio  
✅ Add to portfolio showcase sites (Dribbble, etc.)  
✅ Get feedback from mentors  
✅ Update portfolio regularly with new projects  
✅ Monitor analytics with Google Analytics  

## 📈 Success Metrics

- 100+ visitors in first month
- 3+ internship inquiries
- 50+ GitHub profile visits from link
- Share on social media (20+ reactions)
- Stand out from peer portfolios

## 💡 Student Portfolio Checklist

- [ ] Customize with your name and info
- [ ] Add 4-6 of your best projects
- [ ] Update skills section with your actual skills
- [ ] Replace social media links
- [ ] Add professional headshot
- [ ] Write compelling project descriptions
- [ ] Test on mobile devices
- [ ] Deploy to Vercel/Netlify
- [ ] Share on LinkedIn and GitHub
- [ ] Get feedback and iterate

## 📞 Support

For questions or issues:
1. Check the Troubleshooting section
2. Review component documentation in comments
3. Check GitHub Issues (if using version control)
4. Refer to Vite, React, and Tailwind documentation

## 📄 License

This project is provided as-is for educational purposes. Feel free to use and modify for your portfolio.

---

**Built with ❤️ for student developers.** 

Start deploying and landing those internships! 🚀
