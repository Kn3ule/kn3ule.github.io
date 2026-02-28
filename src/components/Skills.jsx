import { FiCpu, FiServer, FiCloud, FiCode, FiDatabase, FiActivity } from 'react-icons/fi'
import { skillCategories } from '../data/portfolio'

const categoryIcons = {
  'AI / Machine Learning': FiCpu,
  'Programming Languages': FiCode,
  'Backend & APIs': FiServer,
  'Cloud & DevOps': FiCloud,
  'Databases': FiDatabase,
  'Football & Coaching': FiActivity,
}

function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-dark-900/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-dark-400 max-w-2xl mx-auto">
            Technologies and tools I work with.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => {
            const Icon = categoryIcons[category.title] || FiTool
            return (
              <div
                key={category.title}
                className="bg-dark-900/50 border border-dark-800/50 rounded-xl p-6 hover:border-primary-500/30 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-primary-600/10 text-primary-400 p-2.5 rounded-lg">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-dark-800 text-dark-200 text-sm px-3 py-1.5 rounded-lg border border-dark-700/50 hover:border-primary-500/40 hover:text-primary-300 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills
