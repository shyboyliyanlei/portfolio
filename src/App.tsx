import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Header />
      <Hero />
      <Projects />
      <About />
      <Contact />
    </div>
  )
}

export default App
