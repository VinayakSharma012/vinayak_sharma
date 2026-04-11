import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-surface relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-3xl rounded-full"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="section-title">About Me</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-primary/30 mt-4"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-on-surface leading-relaxed">
              I'm a first-year MCA student at National Institute of Technology (NIT) Tiruchirappalli, passionate about building web applications and exploring modern development practices. I love the process of turning ideas into working products—from concept to deployment.
            </p>
            <p className="text-lg text-on-surface/80 leading-relaxed">
              When I'm not coding, you'll find me at hackathons, contributing to open source projects, or diving into new technologies. Currently exploring TypeScript, React, and Node.js while actively seeking internship opportunities to apply my skills in real-world projects.
            </p>

            <div className="bg-surface-container-highest border-l-4 border-primary p-4 rounded-lg">
              <p className="text-sm text-outline-variant uppercase tracking-widest font-bold mb-2">Career Objective</p>
              <p className="text-on-surface leading-relaxed">
                Aspiring Software Developer with strong foundations in Data Structures, Web Development, and Problem Solving, seeking to contribute to impactful software solutions in a collaborative environment.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                { label: 'Location', value: 'Tiruchirappalli, TN' },
                { label: 'Education', value: 'MCA (First Year)' },
                { label: 'Institute', value: 'NIT Trichy' },
                { label: 'Focus', value: 'Web Development' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 8, y: -4, boxShadow: '0 12px 32px rgba(121, 227, 255, 0.2)' }}
                  className="bg-surface-container border-2 border-primary/20 hover:border-primary/60 rounded-xl p-5 transition-all duration-300 group hover:shadow-lg hover:shadow-primary-glow"
                >
                  <p className="text-xs uppercase tracking-widest text-outline-variant font-bold mb-3">
                    {item.label}
                  </p>
                  <p className="text-on-surface font-headline font-bold text-xl group-hover:text-primary transition-colors duration-300">
                    {item.value}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-primary mb-6 font-headline">Key Highlights</h3>
            <div className="space-y-4">
              {[
                { icon: '🎓', label: 'MCA First Year', desc: 'NIT Tiruchirappalli' },
                { icon: '💻', label: 'Tech Stack', desc: 'React, Node.js, MongoDB, TypeScript' },
                { icon: '🚀', label: 'Projects', desc: 'Building full-stack web applications' },
                { icon: '⚡', label: 'Interests', desc: 'Web Dev, AI/ML, Blockchain' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03, y: -6, boxShadow: '0 16px 40px rgba(121, 227, 255, 0.25)' }}
                  className="bg-surface-container-highest p-5 rounded-xl border-2 border-primary/20 hover:border-primary/80 transition-all duration-300 cursor-pointer group hover:shadow-lg hover:shadow-primary-glow/30"
                >
                  <p className="text-3xl mb-2 group-hover:scale-125 transition-transform duration-300 inline-block">
                    {item.icon}
                  </p>
                  <p className="text-on-surface font-bold group-hover:text-primary transition-colors duration-300">
                    {item.label}
                  </p>
                  <p className="text-sm text-on-surface/70 group-hover:text-on-surface transition-colors duration-300">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
