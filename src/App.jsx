import Header from './components/Header'
import Hero from './components/Hero'
import CV from './components/CV'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-dark-950">
      <Header />
      <main>
        <Hero />
        <CV />
        <Projects />
        <Skills />
      </main>
      <Footer />
    </div>
  )
}

export default App
