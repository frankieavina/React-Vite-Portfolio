import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer_container container">
            <h1 className="footer_title">Frankie</h1>

            <ul className="footer_list">
                <li>
                    <a href="#about" className="footer_link">About</a>
                </li>
                <li>
                    <a href="#portfolio" className="footer_link">Projects</a>
                </li>
                <li>
                    <a href="testimonials" className="footer_link">Testimonials</a>
                </li>
            </ul>

            <div className="footer_social">
                <a href="https://www.instagram.com" className="footer_social-link" target='_blank'>
                    <i className="bx bxl-instagram"></i>
                </a>

                <a href="https://www.dribble.com" className="footer_social-link" target='_blank'>
                    <i className="bx bxl-dribbble"></i>
                </a>

                <a href="https://wwww.github.com" className="footer_social-link" target='_blank'>
                    <i className="bx bxl-github-alt"></i>
                </a>
            </div>

            <span className="footer_copy">&#169; Frankie Avina. All rights reserved</span>
        </div>
    </footer>
  )
}

export default Footer