import { motion } from 'framer-motion'

export default function Certifications() {
  const certifications = [
    {
      title: 'Full Stack Web Development',
      issuer: 'Apna College',
      date: 'November 2024',
      icon: '🌐',
    },
    {
      title: 'Data Structures with Java',
      issuer: 'Apna College',
      date: 'May 2024',
      icon: '📊',
    },
    {
      title: 'Core Java Certification',
      issuer: 'SKDeft',
      date: 'August 2023',
      icon: '☕',
    },
  ]

  return (
    <section id="certifications" className="py-20 px-6 bg-surface-container-low relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 blur-3xl rounded-full"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="section-title">Certifications & Courses</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-secondary to-secondary/50"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, boxShadow: '0 24px 48px rgba(197, 126, 255, 0.2)' }}
              className="bg-surface-container border-2 border-secondary/20 hover:border-secondary/60 rounded-xl p-6 transition-all duration-300 group hover:shadow-lg hover:shadow-secondary/30"
            >
              <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {cert.icon}
              </div>
              <h3 className="text-lg font-bold text-secondary mb-2 group-hover:text-secondary/80 transition-colors duration-300 font-headline">
                {cert.title}
              </h3>
              <p className="text-on-surface font-semibold mb-2">
                {cert.issuer}
              </p>
              <p className="text-on-surface/70 text-sm">
                {cert.date}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
