import { useState } from 'react'
import { FiGithub, FiExternalLink, FiFileText, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { projects } from '../data/portfolio'

function ProjectCard({ project }) {
  const [currentImage, setCurrentImage] = useState(0)

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % project.images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + project.images.length) % project.images.length)
  }

  return (
    <div className="bg-dark-900/50 border border-dark-800/50 rounded-xl overflow-hidden hover:border-primary-500/30 transition-all duration-300 group">
      {/* Image Carousel or Placeholder */}
      {project.images.length > 0 ? (
        <div className="relative aspect-video bg-dark-800 overflow-hidden">
          <img
            src={project.images[currentImage]}
            alt={`${project.title} Screenshot ${currentImage + 1}`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />

          {project.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-dark-950/70 hover:bg-dark-950/90 text-white p-1.5 rounded-full transition-colors"
                aria-label="Previous image"
              >
                <FiChevronLeft size={18} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-dark-950/70 hover:bg-dark-950/90 text-white p-1.5 rounded-full transition-colors"
                aria-label="Next image"
              >
                <FiChevronRight size={18} />
              </button>

              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                {project.images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImage(idx)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      idx === currentImage ? 'bg-primary-400' : 'bg-dark-500'
                    }`}
                    aria-label={`Image ${idx + 1}`}
                  />
                ))}
              </div>
            </>
          )}

          <span className="absolute top-3 right-3 bg-primary-600/90 text-white text-xs px-3 py-1 rounded-full font-medium">
            {project.category}
          </span>
        </div>
      ) : (
        <div className="relative aspect-video bg-gradient-to-br from-dark-800 to-dark-900 flex items-center justify-center">
          <FiGithub size={48} className="text-dark-600" />
          <span className="absolute top-3 right-3 bg-primary-600/90 text-white text-xs px-3 py-1 rounded-full font-medium">
            {project.category}
          </span>
        </div>
      )}

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
        <p className="text-dark-300 text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="bg-dark-800 text-primary-300 text-xs px-3 py-1 rounded-full border border-dark-700"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-dark-300 hover:text-primary-400 text-sm font-medium transition-colors"
            >
              <FiGithub size={16} />
              Code
            </a>
          )}
          {project.pdf && (
            <a
              href={project.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-dark-300 hover:text-primary-400 text-sm font-medium transition-colors"
            >
              <FiFileText size={16} />
              Thesis
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-dark-300 hover:text-primary-400 text-sm font-medium transition-colors"
            >
              <FiExternalLink size={16} />
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

function Projects() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Projects
          </h2>
          <p className="text-dark-400 max-w-2xl mx-auto">
            A selection of my projects from university and work.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
