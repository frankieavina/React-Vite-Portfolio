import './App.css'
import About from './components/about/About'
import Header from './components/header/header'
import Home from './components/home/Home'
import Qualification from './components/qualifications/Qualification'
import Skills from './components/skills/Skills'

function App() {

  return (
    <>
      <Header/>
      <main className="main">
        <Home/>
        <About/>
        <Skills/>
        <Qualification/>
      </main>
    </>
  )
}

export default App
