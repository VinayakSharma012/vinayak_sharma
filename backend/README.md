# Backend - Express.js API Server# Portfolio Backend - Express.js Server



Express.js backend API server following MVC architecture patterns.A Node.js Express backend server that powers the Vinayak Sharma portfolio frontend. This server provides API endpoints for portfolio data, contact form handling, and more.



## 📁 Structure (MVC)## 🚀 Quick Start



```### Prerequisites

backend/- Node.js >= 14.0.0

├── server.js              # Main entry point- npm or yarn

├── src/

│   ├── routes/           # API routes (Controllers/Views)### Installation

│   │   ├── health.js

│   │   ├── portfolio.js1. Install dependencies:

│   │   ├── education.js```bash

│   │   ├── skills.jsnpm install

│   │   ├── projects.js```

│   │   ├── certifications.js

│   │   └── contact.js2. Configure environment variables (copy from `.env.example`):

│   ├── middleware/       # Custom middleware```bash

│   │   ├── errorHandler.jscp .env.example .env

│   │   └── validation.js```

│   ├── data/            # Data models (Models)

│   │   ├── portfolio.js3. Update `.env` with your configuration:

│   │   ├── education.js```env

│   │   ├── skills.jsPORT=4000

│   │   ├── projects.jsNODE_ENV=development

│   │   └── certifications.jsCORS_ORIGIN=http://localhost:3001

│   └── services/        # Business logic servicesCONTACT_EMAIL=205125113@nitt.edu

├── .env                 # Environment variables```

└── package.json

```### Running the Server



## 🚀 Getting Started**Development Mode (with auto-reload):**

```bash

```bashnpm run dev

cd backend```

npm install

npm run dev**Production Mode:**

``````bash

npm start

Backend runs on **http://localhost:4000**```



## 🔧 Environment VariablesThe server will start on `http://localhost:4000` (or your configured PORT).



Create `.env` file:## 📚 Available Endpoints



```### Health Check

PORT=4000```

NODE_ENV=developmentGET /api/health

CORS_ORIGIN=http://localhost:3001```

```Returns server status and uptime information.



## 📚 API Endpoints**Response:**

```json

### Health{

- `GET /api/health` - Server status  "status": "Server is running",

  "environment": "development",

### Portfolio  "timestamp": "2026-04-11T16:48:59.527Z",

- `GET /api/portfolio` - Owner info  "uptime": 8.93

- `GET /api/education` - All education}

- `GET /api/education/:id` - Specific education```

- `GET /api/skills` - All skills

- `GET /api/skills/:category` - Skills by category### Portfolio Information

- `GET /api/projects` - All projects```

- `GET /api/certifications` - All certificationsGET /api/portfolio

```

### FormsReturns portfolio owner's basic information.

- `POST /api/contact` - Submit contact form

**Response:**

## 🧪 Testing```json

{

```bash  "name": "Vinayak Sharma",

# Test backend  "title": "Web Developer | Computer Science Student",

curl http://localhost:4000/api/health  "email": "205125113@nitt.edu",

  "location": "Tiruchirappalli, India",

# Get portfolio  "bio": "First-year MCA student...",

curl http://localhost:4000/api/portfolio | jq .  "social": {

    "github": "https://github.com/VinayakSharma012",

# Submit contact    "linkedin": "https://linkedin.com/in/vinayak-sharma012",

curl -X POST http://localhost:4000/api/contact \    "leetcode": "https://leetcode.com/u/sparkykun/",

  -H "Content-Type: application/json" \    "email": "205125113@nitt.edu"

  -d '{"name":"John","email":"john@example.com","subject":"Hi","message":"Hello"}'  }

```}

```

## 📦 Dependencies

### Education

- **express** - Web framework```

- **cors** - Cross-origin resource sharingGET /api/education

- **dotenv** - Environment variables```

- **nodemailer** - Email sending (optional)Returns education history and details.



## 🔍 Architecture Pattern (MVC)**Response:**

```json

**Model (Data):** Files in `src/data/` define data structures  [

**View/Controller (Routes):** Files in `src/routes/` handle requests    {

**Middleware:** Cross-cutting concerns like error handling, validation      "id": 1,

    "degree": "Master of Computer Applications (MCA)",

This pattern makes code:    "institution": "NIT Tiruchirappalli",

- ✅ Easy to test    "duration": "2025 - 2028",

- ✅ Well-organized    "cgpa": "9.05/10",

- ✅ Maintainable    "status": "Pursuing",

- ✅ Scalable    "coursework": ["OOPS", "Data Structures", "DBMS", "Operating Systems", "Computer Networks"]

  },
  ...
]
```

### Skills
```
GET /api/skills
```
Returns comprehensive skill breakdown by category.

**Response:**
```json
{
  "languages": [
    { "name": "Java", "proficiency": 92 },
    { "name": "JavaScript", "proficiency": 90 },
    ...
  ],
  "frontend": [...],
  "backend": [...],
  "databases": [...],
  "tools": [...],
  "softSkills": [...]
}
```

### Projects
```
GET /api/projects
```
Returns all featured projects.

**Response:**
```json
[
  {
    "id": 1,
    "title": "BiteBridge",
    "description": "Food delivery application with real-time order tracking",
    "emoji": "🍕",
    "type": "Full Stack",
    "technologies": ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    "demoLink": "https://bitebridge-demo.vercel.app",
    "githubLink": "https://github.com/VinayakSharma012/BiteBridge"
  },
  ...
]
```

### Certifications
```
GET /api/certifications
```
Returns all certifications and professional credentials.

**Response:**
```json
[
  {
    "id": 1,
    "title": "Full Stack Web Development",
    "issuer": "Apna College",
    "date": "November 2024",
    "icon": "🌐",
    "credentialUrl": "#"
  },
  ...
]
```

### Contact Form
```
POST /api/contact
```
Submits a contact form message.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Collaboration Opportunity",
  "message": "I'd like to work with you on a project..."
}
```

**Success Response (200):**
```json
{
  "success": true,
  "message": "Thank you for your message! I will get back to you soon.",
  "data": {
    "name": "John Doe",
    "email": "john@example.com",
    "subject": "Collaboration Opportunity",
    "receivedAt": "2026-04-11T16:48:59.527Z"
  }
}
```

**Error Response (400):**
```json
{
  "success": false,
  "message": "All fields are required"
}
```

## 🔧 Project Structure

```
server/
├── server.js           # Main server file with all endpoints
├── package.json        # Dependencies and scripts
├── .env                # Environment variables (local)
├── .env.example        # Environment variables template
└── .gitignore          # Git ignore rules
```

## 📋 Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Server port | 4000 |
| `NODE_ENV` | Environment mode | development |
| `CORS_ORIGIN` | Allowed frontend origin | http://localhost:3001 |
| `GMAIL_USER` | Gmail address (optional) | - |
| `GMAIL_PASSWORD` | Gmail app password (optional) | - |
| `CONTACT_EMAIL` | Recipient email address | 205125113@nitt.edu |

## 🔐 CORS Configuration

The server is configured to accept requests from `http://localhost:3001` by default. To change this:

1. Update the `CORS_ORIGIN` in `.env`
2. Restart the server

## 📦 Dependencies

- **express** (4.18.2): Web framework
- **cors** (2.8.5): Cross-Origin Resource Sharing middleware
- **dotenv** (16.3.1): Environment variable management
- **nodemailer** (6.9.7): Email sending (for future implementation)

## 🧪 Testing Endpoints

### Using cURL

```bash
# Test health endpoint
curl http://localhost:4000/api/health

# Get portfolio info
curl http://localhost:4000/api/portfolio

# Get skills
curl http://localhost:4000/api/skills

# Get projects
curl http://localhost:4000/api/projects

# Submit contact form
curl -X POST http://localhost:4000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "subject": "Test",
    "message": "Test message"
  }'
```

### Using Postman

1. Import the endpoints listed above
2. Set base URL to `http://localhost:4000`
3. Test each endpoint

## 🚀 Frontend Integration

The frontend uses the API service in `/src/services/api.js`:

```javascript
import { portfolioAPI } from '../services/api'

// Get portfolio data
const data = await portfolioAPI.getPortfolio()

// Submit contact form
await portfolioAPI.submitContact({
  name: 'John',
  email: 'john@example.com',
  subject: 'Hello',
  message: 'Hello!'
})
```

## 🔐 Security Notes

- CORS is configured to accept requests only from the frontend URL
- Environment variables are used to store sensitive data
- `.env` file is included in `.gitignore` for production secrets
- Contact form includes email validation

## 🚀 Deployment

### To Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the server directory
3. Follow the prompts

### To Heroku

1. Create `Procfile` in server directory: `web: node server.js`
2. Run `heroku create`
3. Run `git push heroku main`

### To Other Platforms

- Ensure Node.js >= 14 is supported
- Set environment variables in platform dashboard
- Point requests to your server URL

## 📝 Future Enhancements

- [ ] Email sending via Nodemailer (Gmail/SMTP)
- [ ] Database integration (MongoDB/PostgreSQL)
- [ ] Authentication system
- [ ] File upload handling
- [ ] Rate limiting
- [ ] Logging system
- [ ] Blog/Articles API
- [ ] Dynamic portfolio updates

## 🤝 Contributing

To contribute or make changes:

1. Update the endpoints in `server.js`
2. Update `.env.example` if new variables are needed
3. Test all endpoints
4. Update this README

## 📄 License

MIT License - Feel free to use this code for your portfolio

## ✉️ Support

For issues or questions, contact: 205125113@nitt.edu

---

**Server Status:** Running on `http://localhost:4000` ✅
