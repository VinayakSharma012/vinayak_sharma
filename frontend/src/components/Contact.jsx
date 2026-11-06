import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import { useState } from 'react'
import { portfolioAPI } from '../services/api'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')

    try {
      console.log('📤 Sending contact form:', formData)
      const response = await portfolioAPI.submitContact(formData)
      console.log('✅ Response received:', response)
      
      if (response.success) {
        setMessage({ type: 'success', text: '✅ Thank you! Your message has been received. I will get back to you soon.' })
        setFormData({ name: '', email: '', subject: '', message: '' })
        // Auto-clear success message after 5 seconds
        setTimeout(() => setMessage(''), 5000)
      } else {
        setMessage({ type: 'error', text: response.message || 'Failed to send message. Please try again.' })
      }
    } catch (error) {
      console.error('❌ Contact form error:', error)
      setMessage({ type: 'error', text: error.message || 'Failed to send message. Please try again.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20 px-6 bg-surface relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 blur-3xl rounded-full"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="section-title">Let's Connect</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-primary/50"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-on-surface mb-6 font-headline">
              Let's <span className="text-primary">Connect</span>
            </h3>
            <p className="text-on-surface/80 mb-12 text-lg leading-relaxed">
              I'm actively seeking summer internships and exciting opportunities. Let's build something amazing together!
            </p>

            <div className="space-y-5 mb-12">
              {[
                { icon: <FaEnvelope size={20} />, label: 'Email', value: '205125113@nitt.edu', href: 'mailto:205125113@nitt.edu' },
                { icon: <FaLinkedin size={20} />, label: 'LinkedIn', value: 'linkedin.com/in/vinayak-sharma012', href: 'https://www.linkedin.com/in/vinayak-sharma012/' },
                { icon: <FaGithub size={20} />, label: 'GitHub', value: 'github.com/VinayakSharma012', href: 'https://github.com/VinayakSharma012/' },
                { icon: <SiLeetcode size={20} />, label: 'LeetCode', value: 'leetcode.com/sparkykun', href: 'https://leetcode.com/u/sparkykun/' },
              ].map((contact, i) => (
                <motion.a
                  key={i}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 12, y: -4, boxShadow: '0 16px 40px rgba(121, 227, 255, 0.2)' }}
                  className="flex items-center gap-4 p-5 rounded-xl border-2 border-primary/20 hover:border-primary/60 bg-surface-container hover:from-surface-container/90 hover:to-surface-container-highest/90 transition-all duration-300 group hover:shadow-lg hover:shadow-primary-glow/30"
                >
                  <div className="w-12 h-12 rounded-lg border-2 border-primary/30 group-hover:border-primary flex items-center justify-center text-on-surface group-hover:text-primary group-hover:bg-primary/10 group-hover:scale-110 transition-all duration-300 flex-shrink-0">
                    {contact.icon}
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-outline-variant font-bold">
                      {contact.label}
                    </p>
                    <p className="text-on-surface font-bold group-hover:text-primary transition-colors">
                      {contact.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>


          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="bg-surface-container p-8 rounded-xl border-2 border-primary/20 hover:border-primary/60 transition-all duration-300 backdrop-blur-sm group hover:shadow-lg hover:shadow-primary-glow/30"
          >
            <div className="mb-6">
              <label className="text-xs uppercase tracking-widest text-outline-variant font-bold mb-3 block">
                Your Name
              </label>
              <motion.input
                whileFocus={{ borderColor: '#79e3ff', boxShadow: '0 0 24px rgba(121, 227, 255, 0.3)' }}
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full bg-surface-container-highest border-2 border-primary/20 focus:border-primary rounded-lg px-4 py-3 text-on-surface placeholder-outline-variant/60 focus:outline-none transition-all duration-300 font-medium hover:border-primary/40"
                required
              />
            </div>

            <div className="mb-6">
              <label className="text-xs uppercase tracking-widest text-outline-variant font-bold mb-3 block">
                Email Address
              </label>
              <motion.input
                whileFocus={{ borderColor: '#79e3ff', boxShadow: '0 0 24px rgba(121, 227, 255, 0.3)' }}
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="w-full bg-surface-container-highest border-2 border-primary/20 focus:border-primary rounded-lg px-4 py-3 text-on-surface placeholder-outline-variant/60 focus:outline-none transition-all duration-300 font-medium hover:border-primary/40"
                required
              />
            </div>

            <div className="mb-6">
              <label className="text-xs uppercase tracking-widest text-outline-variant font-bold mb-3 block">
                Subject
              </label>
              <motion.input
                whileFocus={{ borderColor: '#79e3ff', boxShadow: '0 0 24px rgba(121, 227, 255, 0.3)' }}
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Let's work together"
                required
                className="w-full bg-surface-container-highest border-2 border-primary/20 focus:border-primary rounded-lg px-4 py-3 text-on-surface placeholder-outline-variant/60 focus:outline-none transition-all duration-300 font-medium hover:border-primary/40"
              />
            </div>

            <div className="mb-8">
              <label className="text-xs uppercase tracking-widest text-outline-variant font-bold mb-3 block">
                Message
              </label>
              <motion.textarea
                whileFocus={{ borderColor: '#79e3ff', boxShadow: '0 0 24px rgba(121, 227, 255, 0.3)' }}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message here..."
                rows="5"
                minLength={10}
                maxLength={5000}
                required
                className="w-full bg-surface-container-highest border-2 border-primary/20 focus:border-primary rounded-lg px-4 py-3 text-on-surface placeholder-outline-variant/60 focus:outline-none resize-none transition-all duration-300 font-medium hover:border-primary/40"
              ></motion.textarea>
            </div>

            {message && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mb-6 p-4 rounded-lg ${
                  message.type === 'success'
                    ? 'bg-green-500/20 border border-green-500/50 text-green-200'
                    : 'bg-red-500/20 border border-red-500/50 text-red-200'
                }`}
              >
                {message.text}
              </motion.div>
            )}

            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 12px 32px rgba(121, 227, 255, 0.2)' }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={loading}
              className="w-full px-6 py-3 bg-primary text-on-surface font-bold uppercase tracking-wider rounded-lg hover:bg-primary/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </motion.button>
          </motion.form>
        </div>

        {/* Social Icons Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 pt-16 border-t border-primary/20 text-center"
        >
          <h3 className="text-2xl font-bold text-on-surface mb-8 font-headline">
            Connect on <span className="text-primary">Social</span>
          </h3>
          <div className="flex justify-center gap-8 flex-wrap">
            {[
              { icon: <FaGithub size={32} />, label: 'GitHub', href: 'https://github.com/VinayakSharma012/', color: 'hover:text-primary' },
              { icon: <FaLinkedin size={32} />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/vinayak-sharma012/', color: 'hover:text-primary' },
              { icon: <FaEnvelope size={32} />, label: 'Email', href: 'mailto:205125113@nitt.edu', color: 'hover:text-primary' },
              { icon: <SiLeetcode size={32} />, label: 'LeetCode', href: 'https://leetcode.com/u/sparkykun/', color: 'hover:text-primary' },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className={`p-5 rounded-full border-2 border-primary/30 bg-surface-container/50 text-on-surface transition-all duration-300 hover:border-primary hover:bg-primary/10 ${social.color}`}
                title={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
          <p className="text-on-surface/60 text-sm mt-8">
            © 2026 Vinayak Sharma | Built with React & Tailwind CSS
          </p>
        </motion.div>
      </div>
    </section>
  )
}
