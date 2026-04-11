import { motion } from 'framer-motion'

export default function Hero() {
  // Scroll to sections
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects')
    projectsSection?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToConnect = () => {
    const contactSection = document.getElementById('contact')
    contactSection?.scrollIntoView({ behavior: 'smooth' })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section
      id="home"
      className="relative min-h-screen bg-surface flex items-center justify-center overflow-hidden pt-32"
    >
      {/* Animated background glow elements */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-primary/8 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-secondary/8 blur-3xl rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-tertiary/5 blur-3xl rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto px-6 text-center z-10"
      >
        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-headline text-on-surface tracking-tighter mb-6 leading-tight"
        >
          Vinayak Sharma
        </motion.h1>

        {/* Primary accent line animation */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent max-w-xl mx-auto mb-8 shadow-primary-glow"
        ></motion.div>

        {/* Title */}
        <motion.p
          variants={itemVariants}
          className="text-xl sm:text-2xl md:text-3xl text-primary font-headline mb-6 tracking-wide font-bold"
        >
          Web Developer • Computer Science Student
        </motion.p>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg md:text-xl text-on-surface/80 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Passionate about building innovative web applications. Currently exploring React, Node.js, and modern development practices. Open to internship opportunities.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <motion.button
            onClick={scrollToProjects}
            whileHover={{ scale: 1.08, boxShadow: '0 0 32px rgba(121, 227, 255, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary"
          >
            View Projects
          </motion.button>
          <motion.button
            onClick={scrollToConnect}
            whileHover={{ scale: 1.08, boxShadow: '0 0 24px rgba(121, 227, 255, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            className="btn-secondary"
          >
            Let's Connect
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center gap-3 mt-16"
        >
          <p className="label-sm text-outline-variant">Scroll to explore</p>
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="text-primary text-3xl"
          >
            ↓
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
