import { motion } from 'framer-motion'

export default function Skills() {
  const skills = {
    languages: [
      { name: 'Java', level: 92 },
      { name: 'JavaScript', level: 90 },
      { name: 'Python', level: 80 },
      { name: 'C', level: 78 },
    ],
    frontend: [
      { name: 'React.js', level: 90 },
      { name: 'HTML/CSS', level: 90 },
      { name: 'Bootstrap', level: 85 },
    ],
    backend: [
      { name: 'Node.js', level: 88 },
      { name: 'Express.js', level: 85 },
    ],
    databases: [
      { name: 'MongoDB', level: 85 },
      { name: 'SQL', level: 80 },
    ],
    tools: ['Git', 'GitHub', 'VS Code', 'IntelliJ IDEA'],
    soft: ['Problem Solving', 'Communication', 'Teamwork'],
  }

  const SkillBar = ({ name, level }) => (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-5"
    >
      <div className="flex justify-between mb-2.5">
        <span className="text-on-surface font-bold group-hover:text-primary transition-colors text-sm">
          {name}
        </span>
        <span className="text-primary text-xs font-bold bg-surface-container px-2.5 py-0.5 rounded">{level}%</span>
      </div>
      <div className="h-4 bg-surface-container-highest rounded-full overflow-hidden border-2 border-primary/30 hover:border-primary/80 transition-all group-hover:shadow-lg group-hover:shadow-primary/25 relative">
        <motion.div
          initial={{ width: '0%' }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1.5, delay: 0.1, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="h-full bg-gradient-to-r from-primary via-primary to-secondary rounded-full shadow-lg"
        ></motion.div>
      </div>
    </motion.div>
  )

  return (
    <section id="skills" className="py-20 px-6 bg-surface relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-secondary/5 blur-3xl rounded-full"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="section-title">Skills & Expertise</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-primary/50"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="group"
          >
            <h3 className="text-xl font-bold text-primary mb-6 uppercase tracking-widest font-headline">
              Programming Languages
            </h3>
            <div className="space-y-5 p-6 bg-surface-container rounded-xl border-2 border-primary/20 hover:border-primary/60 transition-all group-hover:shadow-lg group-hover:shadow-primary-glow/30">
              {skills.languages.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </div>
          </motion.div>

          {/* Frontend */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="group"
          >
            <h3 className="text-xl font-bold text-primary mb-6 uppercase tracking-widest font-headline">
              Frontend Technologies
            </h3>
            <div className="space-y-5 p-6 bg-surface-container rounded-xl border-2 border-primary/20 hover:border-primary/60 transition-all group-hover:shadow-lg group-hover:shadow-primary-glow/30">
              {skills.frontend.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Backend */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="group"
          >
            <h3 className="text-xl font-bold text-primary mb-6 uppercase tracking-widest font-headline">
              Backend Technologies
            </h3>
            <div className="space-y-5 p-6 bg-surface-container rounded-xl border-2 border-primary/20 hover:border-primary/60 transition-all group-hover:shadow-lg group-hover:shadow-primary-glow/30">
              {skills.backend.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </div>
          </motion.div>

          {/* Databases */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="group"
          >
            <h3 className="text-xl font-bold text-primary mb-6 uppercase tracking-widest font-headline">
              Databases
            </h3>
            <div className="space-y-5 p-6 bg-surface-container rounded-xl border-2 border-primary/20 hover:border-primary/60 transition-all group-hover:shadow-lg group-hover:shadow-primary-glow/30">
              {skills.databases.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Tools & Platforms */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-xl font-bold text-primary mb-6 uppercase tracking-widest font-headline">
            Tools & Platforms
          </h3>
          <div className="flex flex-wrap gap-3">
            {skills.tools.map((tool) => (
              <motion.span
                key={tool}
                whileHover={{ scale: 1.08, y: -4 }}
                className="px-4 py-2 bg-primary/20 border border-primary/30 hover:border-primary/80 text-on-surface font-bold text-sm rounded-lg transition-all duration-300 cursor-pointer hover:shadow-md hover:shadow-primary/30"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold text-primary mb-6 uppercase tracking-widest font-headline">
            Soft Skills
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {skills.soft.map((skill, i) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.08, y: -4, boxShadow: '0 12px 32px rgba(121, 227, 255, 0.2)' }}
                className="p-5 bg-surface-container-highest border-2 border-primary/20 hover:border-primary/80 rounded-xl text-center transition-all duration-300 group cursor-pointer hover:shadow-lg hover:shadow-primary-glow/30"
              >
                <p className="text-on-surface font-bold group-hover:text-primary transition-colors">
                  {skill}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
