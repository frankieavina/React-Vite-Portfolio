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

function App() {

  return (
    <>
      <Header/>
      <main className="main">
        <Home/>
        <About/>
        <Skills/>
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
