import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer_container container">
            {/* <h1 className="footer_title">Frankie Avina</h1> */}

            <ul className="footer_list">
                <li>
                    <a href="#about" className="footer_link">About</a>
                </li>
                <li>
                    <a href="#projects" className="footer_link">Projects</a>
                </li>
                <li>
                    <a href="#testimonials" className="footer_link">Testimonials</a>
                </li>
            </ul>

            <div className="footer_social">

                <a href="https://www.linkedin.com/in/frankieavina/" className="footer_social-link" target='_blank'>
                    <i className='bx bxl-linkedin-square' ></i>
                </a>

                <a href="https://github.com/frankieavina" className="footer_social-link" target='_blank'>
                    <i className='bx bxl-github' ></i>
                </a>

                <a href="https://www.instagram.com/frankie_ac/" className="footer_social-link" target='_blank'>
                    <i className='bx bxl-instagram' ></i>
                </a>
            </div>

            <span className="footer_copy">Copyright &#169; 2024 <br/>Frankie Avina. All rights reserved</span>
        </div>
    </footer>
  )
}

export default Footer