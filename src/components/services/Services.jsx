import './services.css'
import { useState } from 'react';

const Services = () => {

    const [ toggleState, setToggleState] = useState(0);

    const toggleTab = (index) =>{
        setToggleState(index);
    }

  return (
    <section className="services section" id="services">
        <h2 className="section_title">Services</h2>
        <span className="section_subtitle">What I offer</span>

        <div className="services_container container grid">

            {/* <!-------------------- Service 1 ------------------------> */}
            <div className="services_content">
                <div>
                    <i className="uil uil-web-grid services_icon"></i>
                    <h3 className="services_title"> Ui/UX <br/>Designer</h3>
                </div>

                <span 
                    className="button button-flex button-small button-link services_button"
                    onClick={() => toggleTab(1)}
                >
                    View More <i className="uil uil-arrow-right button_icon "></i>
                </span>

                {/* --------------------- 1 modal ------------------------------  */}
                <div className={toggleState === 1 ? 'services_modal active-modal' : 'services_modal'}>
                    <div className="services_modal-content">
                        <i onClick={ () => toggleTab(0) } className="uil uil-times services_modal-close"></i>
                        <h4 className="services_modal-title">Ui/Ux <br/>Designer</h4>
                        <i className="uil uil-times services services_modal-close"></i>

                        <ul className="services_modal-services grid">
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p> I develop the user interface.</p>
                            </li>
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p> Web page development.</p>
                            </li>
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p> I created ux element interactions.</p>
                            </li>
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p> I position your company brand.</p>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>

            {/* <!-------------------- Service 2 ------------------------> */}
            <div className="services_content">
                <div>
                    <i className="uil uil-arrow services_icon"></i>
                    <h3 className="services_title"> Frontend <br/>Developer</h3>
                </div>
                <span className="button button-flex button-small button-link services_button" onClick={()=>toggleTab(2)}>
                    View More
                    <i className="uil uil-arrow-right button_icon "></i>
                </span>

                {/* --------------------- modal ------------------------------  */}
                <div className={toggleState === 2 ? 'services_modal active-modal' : 'services_modal'}>
                    <div className="services_modal-content">
                    <i onClick={ () => toggleTab(0) } className="uil uil-times services_modal-close"></i>
                        <h4 className="services_modal-title">Frontend <br/>Developer</h4>
                        <i className="uil uil-times services services_modal-close"></i>

                        <ul className="services_modal-services grid">
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p> I develop the user interface.</p>
                            </li>
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p> Web page development.</p>
                            </li>
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p> I created ux element interactions.</p>
                            </li>
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p> I position your company brand.</p>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>

            {/* <!-------------------- Service 3 ------------------------> */}
            <div className="services_content">
                <div>
                    <i className="uil uil-pen services_icon"></i>
                    <h3 className="services_title"> Branding <br/>Designer</h3>
                </div>
                <span className="button button-flex button-small button-link services_button" onClick={()=> toggleTab(3)}>
                    View More
                    <i className="uil uil-arrow-right button_icon "></i>
                </span>

                {/* --------------------- modal ------------------------------  */}
                <div className={toggleState === 3 ? 'services_modal active-modal' : 'services_modal'}>
                    <div className="services_modal-content">
                        <i onClick={ () => toggleTab(0) } className="uil uil-times services_modal-close"></i>
                        <h4 className="services_modal-title">Ui/Ux <br/>Designer</h4>
                        <i className="uil uil-times services services_modal-close"></i>

                        <ul className="services_modal-services grid">
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p> I develop the user interface.</p>
                            </li>
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p> Web page development.</p>
                            </li>
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p> I created ux element interactions.</p>
                            </li>
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p> I position your company brand.</p>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>

        </div>
    </section>
  )
}

export default Services