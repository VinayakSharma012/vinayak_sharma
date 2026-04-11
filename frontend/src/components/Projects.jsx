import { motion } from 'framer-motion'

export default function Projects() {
  const projects = [
    { title: 'BiteBridge', desc: 'Food Delivery Platform', image: '🍕', type: 'Full Stack', tech: ['React', 'Node', 'MongoDB'], demo: 'https://bite-bridge.onrender.com', github: 'https://github.com/VinayakSharma012/Bite-Bridge' },
    { title: 'WanderLust', desc: 'Property Listing Platform', image: '🏠', type: 'Full Stack', tech: ['HTML', 'CSS', 'Node', 'MongoDB'], demo: 'https://wanderlust-rxg3.onrender.com', github: 'https://github.com/VinayakSharma012/Wanderlust' },
    { title: 'Smart Parking System', desc: 'Parking Management with Java', image: '🅿️', type: 'System', tech: ['Java', 'Database', 'OOP'], demo: null, github: 'https://github.com/VinayakSharma012/Smart-Parking-Slot-System' },
    { title: 'GenAi Network Generator', desc: 'AI Network Traffic Tool', image: '🌐', type: 'AI/ML', tech: ['JavaScript', 'AI'], demo: 'https://genai-network-traffic-generator.onrender.com', github: 'https://github.com/VinayakSharma012/GenAi-Network-Traffic-Generator' },
    { title: 'Contact Management', desc: 'Java Contact Manager', image: '📇', type: 'Desktop', tech: ['Java', 'OOP'], demo: null, github: 'https://github.com/VinayakSharma012/ContactManagement' },
    { title: 'Manga-Verse', desc: 'Anime Platform', image: '📚', type: 'Web App', tech: ['TypeScript', 'deco.cx'], demo: null, github: 'https://github.com/VinayakSharma012/manga-verse' },
    { title: 'Spotify Clone', desc: 'Music Streaming UI', image: '🎵', type: 'Frontend', tech: ['HTML', 'CSS'], demo: null, github: 'https://github.com/VinayakSharma012/SPOTIFY-CLONE' },
    { title: 'Simon Says Game', desc: 'Memory Game', image: '🎮', type: 'Game', tech: ['JavaScript'], demo: null, github: 'https://github.com/VinayakSharma012/SIMON-SAYS-GAME' },
  ]

  return (
    <section id="projects" className="py-20 px-6 bg-surface relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 blur-3xl rounded-full"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="mb-12">
          <h2 className="section-title">Featured Projects</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-primary/50"></div>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }} viewport={{ once: true }} whileHover={{ y: -10, boxShadow: '0 24px 48px rgba(121, 227, 255, 0.2)' }} className="bg-surface-container group overflow-hidden border-2 border-primary/20 hover:border-primary/60 rounded-xl transition-all duration-300 p-6 flex flex-col hover:shadow-lg hover:shadow-primary-glow">
              <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">{p.image}</div>
              <h3 className="text-xl font-bold text-primary mb-2 font-headline">{p.title}</h3>
              <p className="text-xs text-outline-variant uppercase mb-3 font-bold">{p.type}</p>
              <p className="text-on-surface text-sm mb-6 flex-grow">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {p.tech.map(t => <span key={t} className="px-3 py-1 bg-primary/20 border border-primary/30 text-xs rounded-lg font-bold">{t}</span>)}
              </div>
              <div className="flex flex-col gap-3 pt-4 border-t border-primary/20">
                <motion.button
                  whileHover={p.demo ? { scale: 1.05, boxShadow: '0 8px 20px rgba(121, 227, 255, 0.3)' } : {}}
                  whileTap={p.demo ? { scale: 0.95 } : {}}
                  onClick={() => p.demo && window.open(p.demo, '_blank')}
                  className={`w-full px-4 py-3 font-bold uppercase tracking-wider rounded-lg transition-all duration-300 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed ${
                    p.demo
                      ? 'bg-gradient-to-r from-primary to-primary/80 text-on-primary hover:shadow-primary-glow'
                      : 'bg-surface-container-highest text-on-surface/50 cursor-not-allowed border border-primary/10'
                  }`}
                  disabled={!p.demo}
                >
                  {p.demo ? 'View Project →' : 'View Project (Coming Soon)'}
                </motion.button>
                <div className="flex gap-4 justify-center">
                  <motion.a href={p.github} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-primary hover:text-primary/80 transition-colors" whileHover={{ scale: 1.1 }}>Code →</motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
