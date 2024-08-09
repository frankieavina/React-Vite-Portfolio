import { useState } from 'react'
import './projects.css'
const Projects = () => {

    const [ toggleState, setToggleState] = useState(0);

    const toggleTab = (index) =>{
        setToggleState(index);
    }
  return (
    <section className="projects section" id='projects'>
        <h2 className="section_title">Projects</h2>
        <span className="section_subtitle">What I've Built</span>

        <div className="services_container container grid">
            {/* -------------------------- Featured Project 1 ----------------------- */}
            <div className="services_content">
                <div className="">
                    <i className="uil uil-web-grid service_icon"></i>
                    <h3 className="services_title">Product <br /> Designer</h3>
                </div>

                <span className="services_button" onClick={() => toggleTab(1)}>
                    View More <i className="uil uil-arrow-right service_button-icon"></i>
                </span>

                <div className={toggleState === 1 ? 'services_modal active-modal' : 'services_modal'}>
                    <div className="services_modal-content">
                        <i onClick={ () => toggleTab(0) } className="uil uil-times services_modal-close"></i>
                        <h3 className="services_modal-title">Product Designer</h3>
                        <p className="services_modal-description">
                            Service with more than 3 years of experience.Providing quality work
                            to clients and companies.
                        </p>
                        <ul className="services_modal-services grid">
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                    I develop the user interface. 
                                </p>
                            </li>
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                    Web page development. 
                                </p>
                            </li>
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                    I create ux element interactions. 
                                </p>
                            </li>
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                    I position your company brand.
                                </p>
                            </li>
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                    Design and mockups of products for companies.  
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* -------------------------- Featured Project 2 ----------------------- */}
            <div className="services_content">
                <div className="">
                    <i className="uil uil-arrow service_icon"></i>
                    <h3 className="services_title">Ui/Ux <br /> Designer</h3>
                </div>

                <span onClick={() => toggleTab(2)} className="services_button">
                    View More <i className="uil uil-arrow-right service_button-icon"></i>
                </span>

                <div className={toggleState === 2 ? 'services_modal active-modal' : 'services_modal'}>
                    <div className="services_modal-content">
                        <i onClick={ () => toggleTab(0) } className="uil uil-times services_modal-close"></i>
                        <h3 className="services_modal-title">Ui/Ux Designer</h3>
                        <p className="services_modal-description">
                            Service with more than 3 years of experience.Providing quality work
                            to clients and companies.
                        </p>
                        <ul className="services_modal-services grid">
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                    I develop the user interface. 
                                </p>
                            </li>
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                    Web page development. 
                                </p>
                            </li>
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                    I create ux element interactions. 
                                </p>
                            </li>
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                    I position your company brand.
                                </p>
                            </li>
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                    Design and mockups of products for companies.  
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* -------------------------- Featured Project 3 ----------------------- */}
            <div className="services_content">
                <div className="">
                    <i className="uil uil-edit service_icon"></i>
                    <h3 className="services_title">Visual <br /> Designer</h3>
                </div>

                <span onClick={() => toggleTab(3)} className="services_button">
                    View More <i className="uil uil-arrow-right service_button-icon"></i>
                </span>

                <div className={toggleState === 3 ? 'services_modal active-modal' : 'services_modal'}>
                    <div className="services_modal-content">
                        <i onClick={ () => toggleTab(0) } className="uil uil-times services_modal-close"></i>
                        <h3 className="services_modal-title">Visual Designer</h3>
                        <p className="services_modal-description">
                            Service with more than 3 years of experience.Providing quality work
                            to clients and companies.
                        </p>
                        <ul className="services_modal-services grid">
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                    I develop the user interface. 
                                </p>
                            </li>
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                    Web page development. 
                                </p>
                            </li>
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                    I create ux element interactions. 
                                </p>
                            </li>
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                    I position your company brand.
                                </p>
                            </li>
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                    Design and mockups of products for companies.  
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div> 
        </div>
    </section>
  )
}

export default Projects