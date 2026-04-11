import React from 'react'
import { motion } from 'framer-motion'

export default function Nav() {
  const [active, setActive] = React.useState('home')
  const [isOpen, setIsOpen] = React.useState(false)

  const links = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Education', id: 'education' },
    { label: 'Projects', id: 'projects' },
    { label: 'Certifications', id: 'certifications' },
    { label: 'Skills', id: 'skills' },
    { label: 'Contact', id: 'contact' },
  ]

  const handleNavClick = (id) => {
    setActive(id)
    setIsOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full z-50 glass-panel border-b border-primary/10 backdrop-blur-glass"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.08, textShadow: '0 0 20px rgba(121, 227, 255, 0.8)' }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleNavClick('home')}
          className="text-2xl font-bold text-primary font-headline tracking-widest cursor-pointer"
        >
          VINAYAK
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-1 items-center">
          {links.map((link) => (
            <motion.button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-sm font-headline text-sm tracking-widest transition-all duration-300 ${
                active === link.id
                  ? 'bg-primary text-on-primary font-bold shadow-primary-glow'
                  : 'text-on-surface/70 hover:text-primary hover:bg-primary/10'
              }`}
            >
              {link.label}
            </motion.button>
          ))}
          {/* Admin Button */}
          <motion.button
            onClick={() => window.location.hash = '#/admin-login'}
            whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(121, 227, 255, 0.2)' }}
            whileTap={{ scale: 0.95 }}
            className="ml-3 px-4 py-2 rounded-sm border-2 border-primary/50 text-primary hover:bg-primary/10 font-headline text-sm tracking-widest transition-all duration-300"
          >
            Admin
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-primary text-3xl font-bold"
        >
          {isOpen ? '✕' : '☰'}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden bg-surface-container-highest/95 border-t border-primary/10 overflow-hidden"
      >
        <div className="px-6 py-4 space-y-2">
          {links.map((link) => (
            <motion.button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              whileHover={{ x: 10 }}
              className={`w-full text-left px-4 py-3 rounded-sm font-headline text-sm tracking-widest transition-all duration-300 ${
                active === link.id
                  ? 'bg-primary text-on-primary font-bold shadow-primary-glow'
                  : 'text-on-surface/70 hover:text-primary hover:bg-primary/10'
              }`}
            >
              {link.label}
            </motion.button>
          ))}
          {/* Admin Button Mobile */}
          <motion.button
            onClick={() => {
              window.location.hash = '#/admin-login'
              setIsOpen(false)
            }}
            whileHover={{ x: 10 }}
            className="w-full text-left px-4 py-3 rounded-sm border-2 border-primary/50 text-primary hover:bg-primary/10 font-headline text-sm tracking-widest transition-all duration-300"
          >
            Admin
          </motion.button>
        </div>
      </motion.div>
    </motion.nav>
  )
}
