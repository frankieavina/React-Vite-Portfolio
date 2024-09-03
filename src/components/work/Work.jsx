import Works from './Works';
import './work.css';

const Work = () => {
  return (
    <section className="work section" id='portfolio'>
        <h2 className="section_title">Portfolio</h2>
        <span className="section_subtitle">Featured Projects</span>
        
        <Works/>
    </section>
  )
}

export default Work