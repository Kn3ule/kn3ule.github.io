import { FiGithub, FiLinkedin, FiArrowDown } from 'react-icons/fi'
import { personalInfo } from '../data/portfolio'

function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-16 px-4"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-primary-400 font-medium mb-2">Hey, ich bin</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              Tim
            </h1>
            <h2 className="text-2xl sm:text-3xl text-primary-400 font-semibold mb-6">
              {personalInfo.title}
            </h2>
            <p className="text-dark-300 text-lg max-w-xl mb-8 leading-relaxed">
              {personalInfo.description}
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                <FiGithub size={20} />
                GitHub
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-dark-600 hover:border-primary-500 text-dark-200 hover:text-primary-400 px-6 py-3 rounded-lg font-medium transition-colors"
              >
                <FiLinkedin size={20} />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden ring-4 ring-primary-500/30 ring-offset-4 ring-offset-dark-950">
                <img
                  src={personalInfo.image}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -inset-4 rounded-full bg-primary-500/10 blur-2xl -z-10" />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-16">
          <a
            href="#projects"
            className="text-dark-500 hover:text-primary-400 transition-colors animate-bounce"
            aria-label="Scroll to projects"
          >
            <FiArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
