  import { motion } from 'framer-motion'

export default function Education() {
  return (
    <section id="education" className="py-20 px-6 bg-surface relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 blur-3xl rounded-full"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="section-title">Education & Achievements</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-primary/50"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* MCA Education Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, boxShadow: '0 24px 48px rgba(121, 227, 255, 0.2)' }}
            className="bg-surface-container border-2 border-primary/20 hover:border-primary/60 rounded-xl p-6 transition-all duration-300 group hover:shadow-lg hover:shadow-primary-glow"
          >
            <h3 className="text-2xl font-bold text-primary mb-2 font-headline group-hover:text-primary/80 transition-colors duration-300">Master of Computer Applications</h3>
            <p className="text-on-surface text-lg font-semibold mb-4 group-hover:text-on-surface transition-colors duration-300">National Institute of Technology Tiruchirappalli</p>
            <p className="text-on-surface/80 mb-6 text-sm">NIT Trichy • 2025 — 2028</p>
            <div className="pb-6 border-b border-primary/20">
              <p className="text-primary font-headline font-bold text-xl mb-3 group-hover:text-primary/80 transition-colors duration-300">CGPA: 9.05/10.0</p>
              <p className="text-xs text-outline-variant uppercase tracking-widest font-bold mb-3">Relevant Coursework:</p>
              <div className="flex flex-wrap gap-2">
                {['Object-Oriented Programming', 'Data Structures & Algorithms', 'Database Management Systems', 'Operating Systems', 'Computer Networks'].map((course) => (
                  <motion.span
                    key={course}
                    whileHover={{ scale: 1.08, y: -2 }}
                    className="px-3 py-1.5 bg-primary/20 border border-primary/30 hover:border-primary/80 text-on-surface text-xs rounded-lg font-bold tracking-wide transition-all duration-300 cursor-pointer hover:shadow-md hover:shadow-primary/30"
                  >
                    {course}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* BCA Education Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, boxShadow: '0 24px 48px rgba(121, 227, 255, 0.2)' }}
            className="bg-surface-container border-2 border-primary/20 hover:border-primary/60 rounded-xl p-6 transition-all duration-300 group hover:shadow-lg hover:shadow-primary-glow"
          >
            <h3 className="text-2xl font-bold text-primary mb-2 font-headline group-hover:text-primary/80 transition-colors duration-300">Bachelor of Computer Applications</h3>
            <p className="text-on-surface text-lg font-semibold mb-4 group-hover:text-on-surface transition-colors duration-300">Chhatrapati Shahu Ji Maharaj University, Kanpur</p>
            <p className="text-on-surface/80 mb-6 text-sm">CSJMU Kanpur • 2022 — 2025</p>
            <div className="pb-6 border-b border-primary/20">
              <p className="text-primary font-headline font-bold text-xl mb-3 group-hover:text-primary/80 transition-colors duration-300">CGPA: 8.37/10.0</p>
              <p className="text-xs text-outline-variant uppercase tracking-widest font-bold mb-3">Relevant Coursework:</p>
              <div className="flex flex-wrap gap-2">
                {['Object-Oriented Programming', 'Data Structures & Algorithms', 'Database Management Systems', 'Operating Systems', 'Computer Networks'].map((course) => (
                  <motion.span
                    key={course}
                    whileHover={{ scale: 1.08, y: -2 }}
                    className="px-3 py-1.5 bg-primary/20 border border-primary/30 hover:border-primary/80 text-on-surface text-xs rounded-lg font-bold tracking-wide transition-all duration-300 cursor-pointer hover:shadow-md hover:shadow-primary/30"
                  >
                    {course}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Honors & Awards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold text-primary mb-6 font-headline">Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { icon: '�', title: 'AIR 50 in NIMCET 2025', desc: 'Conducted by NIT Trichy' },
              { icon: '📊', title: 'AIR 230 in CUET PG 2025', desc: 'National Post-Graduate Exam' },
              { icon: '⭐', title: '9.27 SGPA in 3rd Semester', desc: 'Excellent Academic Performance' },
              { icon: '⚽', title: 'MCA Football Team', desc: 'Represented at Sportsfete NIT Trichy 2025' },
              { icon: '🎤', title: 'Social Media Competition', desc: 'Runner-up in Presentation Competition' },
              { icon: '💻', title: 'Deco.cx 5th Hackathon', desc: 'Built Bookstore Frontend Project' },
            ].map((award, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -6, boxShadow: '0 16px 40px rgba(121, 227, 255, 0.25)' }}
                className="bg-surface-container-highest p-5 rounded-xl border-2 border-primary/20 hover:border-primary/80 transition-all duration-300 group cursor-pointer hover:shadow-lg hover:shadow-primary-glow/30"
              >
                <p className="text-3xl mb-2 group-hover:scale-125 transition-transform duration-300 inline-block">
                  {award.icon}
                </p>
                <p className="text-on-surface font-bold group-hover:text-primary transition-colors duration-300">
                  {award.title}
                </p>
                <p className="text-sm text-on-surface/70 group-hover:text-on-surface transition-colors duration-300">
                  {award.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
