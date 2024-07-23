import './App.css'
import About from './components/about/About'
import Header from './components/header/header'
import Home from './components/home/Home'
import Qualification from './components/qualifications/Qualification'
import Skills from './components/skills/Skills'
import Testimonials from './components/testimonials/Testimonials'

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
      </main>
    </>
  )
}

export default App
