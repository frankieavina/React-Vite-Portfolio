import './App.css'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Header from './components/header/header'
import Home from './components/home/Home'
import Qualification from './components/qualifications/Qualification'
import Skills from './components/skills/Skills'
import Testimonials from './components/testimonials/Testimonials'
import Footer from './components/footer/Footer'
import Scrollup from './components/scrollup/Scrollup'
import Projects from './components/projects/Projects'
import Work from './components/work/Work'

function App() {

  return (
    <>
      <Header/>
      <main className="main">
        <Home/>
        <About/>
        <Skills/>
        <Projects/>
        <Work/>
        <Qualification/>
        <Testimonials/>
        <Contact/>
      </main>
      <Footer/>
      <Scrollup/>
    </>
  )
}

export default App
