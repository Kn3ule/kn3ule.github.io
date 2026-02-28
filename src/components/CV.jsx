import { FiBriefcase, FiBookOpen } from 'react-icons/fi'
import { experience, education } from '../data/portfolio'

function CV() {
  return (
    <section id="cv" className="py-20 px-4 bg-dark-900/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Resume
          </h2>
          <p className="text-dark-400 max-w-2xl mx-auto">
            My professional and academic background.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-primary-600/10 text-primary-400 p-2.5 rounded-lg">
                <FiBriefcase size={22} />
              </div>
              <h3 className="text-xl font-semibold text-white">Experience</h3>
            </div>

            <div className="relative pl-6 border-l-2 border-dark-700 space-y-8">
              {experience.map((job) => (
                <div key={job.company} className="relative">
                  <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-primary-500 border-4 border-dark-950" />
                  <div className="bg-dark-900/50 border border-dark-800/50 rounded-xl p-5 hover:border-primary-500/30 transition-colors">
                    <span className="text-primary-400 text-sm font-medium">
                      {job.period}
                    </span>
                    <h4 className="text-lg font-semibold text-white mt-1">
                      {job.role}
                    </h4>
                    <p className="text-dark-400 text-sm mb-3">{job.company}</p>
                    {job.description && (
                      <ul className="space-y-2">
                        {job.description.map((item, idx) => (
                          <li
                            key={idx}
                            className="text-dark-300 text-sm leading-relaxed flex gap-2"
                          >
                            <span className="text-primary-500 mt-1 shrink-0">&#8226;</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-primary-600/10 text-primary-400 p-2.5 rounded-lg">
                <FiBookOpen size={22} />
              </div>
              <h3 className="text-xl font-semibold text-white">Education</h3>
            </div>

            <div className="relative pl-6 border-l-2 border-dark-700 space-y-8">
              {education.map((edu) => (
                <div key={edu.degree} className="relative">
                  <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-primary-500 border-4 border-dark-950" />
                  <div className="bg-dark-900/50 border border-dark-800/50 rounded-xl p-5 hover:border-primary-500/30 transition-colors">
                    <span className="text-primary-400 text-sm font-medium">
                      {edu.period}
                    </span>
                    <h4 className="text-lg font-semibold text-white mt-1">
                      {edu.degree}
                    </h4>
                    {edu.focus && (
                      <p className="text-primary-300 text-sm">{edu.focus}</p>
                    )}
                    <p className="text-dark-400 text-sm mb-2">
                      {edu.institution}
                    </p>
                    {edu.thesis && (
                      <div className="mt-3 pt-3 border-t border-dark-800/50">
                        {edu.thesisPdf ? (
                          <a
                            href={edu.thesisPdf}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-dark-300 hover:text-primary-400 text-sm italic transition-colors"
                          >
                            &quot;{edu.thesis}&quot;
                          </a>
                        ) : (
                          <p className="text-dark-300 text-sm italic">
                            &quot;{edu.thesis}&quot;
                          </p>
                        )}
                        {edu.thesisPartner && (
                          <p className="text-primary-400 text-xs mt-1">
                            {edu.thesisPartner}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CV
