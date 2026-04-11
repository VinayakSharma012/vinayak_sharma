import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="bg-surface-container border-t-2 border-primary/30 py-12 px-6 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-secondary/5 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Branding */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-primary text-lg font-bold mb-2 font-headline">VINAYAK SHARMA</p>
            <p className="text-on-surface/80 text-sm leading-relaxed">
              © 2026 Vinayak Sharma. Crafted with <span className="text-secondary">❤️</span> and precision.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex justify-center gap-6 flex-wrap"
          >
            {[
              { label: 'Home', href: '#home' },
              { label: 'About', href: '#about' },
              { label: 'Projects', href: '#projects' },
              { label: 'Contact', href: '#contact' },
            ].map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                whileHover={{ color: '#79e3ff', y: -3 }}
                className="text-on-surface/80 hover:text-primary transition-all duration-300 text-sm font-semibold uppercase tracking-wide"
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>

          {/* Placeholder for grid alignment */}
          <div></div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-primary/20 pt-8 text-center"
        >
          <p className="text-outline-variant text-xs uppercase tracking-widest font-semibold">
            Built with React + Tailwind + Framer Motion
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
