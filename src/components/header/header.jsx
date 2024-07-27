import './header.css';
import { useState } from 'react';

const Header = () => {
    // change background header
    window.addEventListener('scroll',function(){
        const header = document.querySelector('.header');
        if(this.scrollY >= 80) header.classList.add('show-header');
        else header.classList.remove('show-header');
    });

    const[Toggle, showMenu] = useState(false);
    const[activeNav, setActiveNav] = useState('#home');

  return (
    <header className='header'>
        <nav className='nav container'>
            <a href='index.html' className='nav_logo'>Smith</a>

            <div className={Toggle ?"nav_menu show-menu": "nav_menu"}>
                <ul className="nav_list grid">
                    <li className="nav_item">
                        <a 
                            href="#home" 
                            className={activeNav === "#home" ? "nav_link active-link" : "nav_link "} 
                            onClick={() => setActiveNav('#home')}
                        >
                            <i className="uil uil-estate nav_icon"></i> Home
                        </a>
                    </li>

                    <li className="nav_item">
                        <a 
                            href="#about"
                            className={activeNav === "#about" ? "nav_link active-link" : "nav_link "} 
                            onClick={() => setActiveNav('#about')}
                        >
                            <i className="uil uil-user nav_icon"></i> About
                        </a>
                    </li>

                    <li className="nav_item">
                        <a 
                            href="#skills" 
                            className={activeNav === "#skills" ? "nav_link active-link" : "nav_link "} 
                            onClick={() => setActiveNav('#skills')}
                        >
                            <i className="uil uil-file-alt nav_icon"></i> Skills
                        </a>
                    </li>
                    <li className="nav_item">
                        <a 
                            href="#portfolio" 
                            className={activeNav === "#portfolio" ? "nav_link active-link" : "nav_link "} 
                            onClick={() => setActiveNav('#portfolio')}
                        >
                            <i className="uil uil-scenery nav_icon"></i> Portfolio
                        </a>
                    </li>
                    <li className="nav_item">
                        <a 
                            href="#contact"  
                            className={activeNav === "#contact" ? "nav_link active-link" : "nav_link "} 
                            onClick={() => setActiveNav('#contact')}
                        >
                            <i className="uil uil-message nav_icon"></i> Contact
                        </a>
                    </li>
                </ul>

                <i className='uil uil-times nav_close' onClick={()=> showMenu(!Toggle)}></i>
            </div>

            <div className="nav_toggle" onClick={()=> showMenu(!Toggle)}>
                <i className='uil uil-apps'></i>
            </div>
        </nav>
    </header>
  )
}

export default Header