import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaLock, FaUser, FaArrowRight } from 'react-icons/fa'
import Nav from './Nav'

export default function AdminLogin({ onLogin }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  // Admin credentials from environment variables
  const ADMIN_USERNAME = import.meta.env.VITE_ADMIN_USERNAME || 'admin'
  const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD || 'password'

  const handleLogin = (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    // Simulate API call
    setTimeout(() => {
      if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
        // Store auth token in localStorage
        localStorage.setItem('adminToken', 'authenticated_' + Date.now())
        localStorage.setItem('adminUsername', username)
        // Call onLogin callback
        onLogin()
        // Redirect to admin
        window.location.hash = '#/admin'
      } else {
        setError('❌ Invalid credentials. Please try again.')
        setPassword('')
      }
      setLoading(false)
    }, 500)
  }

  return (
    <div className="min-h-screen bg-surface text-on-surface">
      <Nav />
      <div className="min-h-screen bg-gradient-to-br from-surface via-surface-dark to-surface flex items-center justify-center px-6 py-20 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md"
        >
          {/* Header */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center"
            >
              <FaLock size={32} className="text-on-surface" />
            </motion.div>
            <h1 className="text-4xl font-bold font-headline mb-2">
              <span className="text-primary">Admin</span> Login
            </h1>
            <p className="text-on-surface/70 text-sm">
              Access your portfolio messages and analytics
            </p>
          </div>

        {/* Login Form */}
        <motion.form
          onSubmit={handleLogin}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-surface-container border-2 border-primary/30 rounded-xl p-8 space-y-6"
        >
          {/* Username Field */}
          <div>
            <label className="block text-xs uppercase tracking-widest text-outline-variant font-bold mb-3">
              Username
            </label>
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="relative"
            >
              <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/60" />
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username"
                className="w-full pl-12 pr-4 py-3 bg-surface-container-highest border-2 border-primary/20 focus:border-primary rounded-lg text-on-surface placeholder-on-surface/40 focus:outline-none transition-all duration-300 font-medium"
                disabled={loading}
              />
            </motion.div>
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-xs uppercase tracking-widest text-outline-variant font-bold mb-3">
              Password
            </label>
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="relative"
            >
              <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/60" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full pl-12 pr-4 py-3 bg-surface-container-highest border-2 border-primary/20 focus:border-primary rounded-lg text-on-surface placeholder-on-surface/40 focus:outline-none transition-all duration-300 font-medium"
                disabled={loading}
              />
            </motion.div>
          </div>

          {/* Error Message */}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 bg-red-500/20 border-2 border-red-500/50 text-red-200 rounded-lg text-sm"
            >
              {error}
            </motion.div>
          )}

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.02, boxShadow: '0 12px 32px rgba(121, 227, 255, 0.3)' }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={loading || !username || !password}
            className="w-full px-6 py-3 bg-gradient-to-r from-primary to-primary/80 text-on-surface font-bold uppercase tracking-wider rounded-lg hover:shadow-lg hover:shadow-primary-glow transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <span className="animate-spin">⚙️</span>
                Logging in...
              </>
            ) : (
              <>
                Enter Admin Panel
                <FaArrowRight size={16} />
              </>
            )}
          </motion.button>
        </motion.form>

        {/* Credentials hidden - only shown locally during development */}
        {/* Info Box removed for security */}

        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-center mt-8"
        >
          <button
            onClick={() => window.location.hash = '#/'}
            className="text-primary hover:text-primary/80 transition-colors text-sm font-semibold"
          >
            ← Back to Portfolio
          </button>
        </motion.div>
      </motion.div>
      </div>
    </div>
  )
}
