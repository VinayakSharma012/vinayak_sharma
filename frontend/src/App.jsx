import { useState, useEffect } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Admin from './components/Admin'
import AdminLogin from './components/AdminLogin'
import './styles/index.css'

export default function App() {
  const [isAdmin, setIsAdmin] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  // Check for admin mode and login status
  useEffect(() => {
    const handleHashChange = () => {
      const isAdminPath = window.location.hash === '#/admin' || window.location.hash === '#/admin-login'
      setIsAdmin(isAdminPath)
    }
    
    // Check localStorage for login token
    const token = localStorage.getItem('adminToken')
    if (token) {
      setIsLoggedIn(true)
    }
    
    window.addEventListener('hashchange', handleHashChange)
    handleHashChange()
    
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  // If on admin page
  if (isAdmin) {
    // If not logged in, show login page
    if (!isLoggedIn) {
      return <AdminLogin onLogin={() => setIsLoggedIn(true)} />
    }
    // If logged in, show admin panel
    return <Admin onLogout={() => {
      setIsLoggedIn(false)
      localStorage.removeItem('adminToken')
      window.location.hash = '#/'
    }} />
  }

  return (
    <div className="bg-surface text-on-surface min-h-screen">
      <Nav />
      <Hero />
      <About />
      <Education />
      <Projects />
      <Certifications />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}
