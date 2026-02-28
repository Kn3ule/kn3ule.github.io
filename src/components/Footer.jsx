import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { personalInfo } from '../data/portfolio'

function Footer() {
  return (
    <footer id="contact" className="border-t border-dark-800/50 bg-dark-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Contact</h2>
          <p className="text-dark-400 mb-8 max-w-md mx-auto">
            Interested in working together? Feel free to reach out or connect with me.
          </p>

          <div className="flex justify-center gap-6 mb-8">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark-400 hover:text-primary-400 transition-colors"
              aria-label="GitHub"
            >
              <FiGithub size={24} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark-400 hover:text-primary-400 transition-colors"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={24} />
            </a>
          </div>
        </div>

        <div className="border-t border-dark-800/50 pt-8 text-center text-dark-500 text-sm">
          <p>&copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
