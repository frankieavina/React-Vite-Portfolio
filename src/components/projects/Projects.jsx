import { useState } from 'react'
import './projects.css'
import ProjectPic1 from '../../assets/projectPic1.png'
import ProjectPic2 from '../../assets/projectPic2.png'
import ProjectPic3 from '../../assets/projectPic3.png'

import VideoModal from './VideoModal'

const Projects = () => {

    const [ toggleState, setToggleState] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentVideo, setCurrentVideo] = useState(null);

    const toggleTab = (index) =>{
        setToggleState(index);
    }

    const openModal = (videoSrc) => {
        setCurrentVideo(videoSrc);
        setIsModalOpen(true);
      };
    
      const closeModal = () => {
        setIsModalOpen(false);
        setCurrentVideo(null);
      };

  return (
    <section className="projects section" id='projects'>
        <h2 className="section_title">Projects</h2>
        <span className="section_subtitle">What I've Built</span>

        <div className="services_container container grid">
            {/* -------------------------- Featured Project 1 ----------------------- */}
            <div className="services_content">
                <div className="project_content_card">
                    <img src={ProjectPic1} alt="" className="project_img" />
                    <i className="uil uil-web-grid service_icon"></i>
                    <h3 className="services_title">Diabuddy</h3>
                </div>

                <span className="services_button" onClick={() => toggleTab(1)}>
                    View More <i className="uil uil-arrow-right service_button-icon"></i>
                </span>

                <div className={toggleState === 1 ? 'services_modal active-modal' : 'services_modal'}>
                    <div className="services_modal-content">
                        <i onClick={ () => toggleTab(0) } className="uil uil-times services_modal-close"></i>
                        <h3 className="services_modal-title">Diabuddy Mobile Application</h3>
                        <p className="services_modal-description">
                            A diabetes management app engineered to facilitate monitoring for patients and doctors, 
                            seamlessly integrating with the Nightspot Web Monitor to provide real-time glucose readings 
                            for enhanced care.                        
                        
                        </p>

                        <div className="button-containers">
                            <a target='_blank' href="https://github.com/frankieavina/diabuddy-frontend.git" className="button button-modal button--flex">
                                Github
                                <i className="uil uil-github-alt"></i>
                            </a>
                            <a onClick={(e)=> { e.preventDefault(); openModal(1); }} href='/' className="button button-modal button--flex">
                                Demo
                                <i className='bx bx-camera-movie'></i>
                            </a>                        
                        </div>

                        <ul className="services_modal-services grid">
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                    React Native, leveraging Expo for streamlined development and deployment. 
                                </p>
                            </li>
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                    App featured state management through Redux.
                                </p>
                            </li>
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                    Nightspot Web Monitor API to get real-time glucose readings.
                                </p>
                            </li>
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                    User Authorization and verification through JWT. 
                                </p>
                            </li>
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                    Sequelize as an ORM to manage client information within a MySQL database.   
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* -------------------------- Featured Project 2 ----------------------- */}
            <div className="services_content">
                <div className="project_content_card">
                    <img src={ProjectPic3} alt="" className="project_img" />
                    <i className="uil uil-arrow service_icon"></i>
                    <h3 className="services_title">BVT Discord Bot</h3>
                </div>

                <span onClick={() => toggleTab(2)} className="services_button">
                    View More <i className="uil uil-arrow-right service_button-icon"></i>
                </span>

                <div className={toggleState === 2 ? 'services_modal active-modal' : 'services_modal'}>
                    <div className="services_modal-content">
                        <i onClick={ () => toggleTab(0) } className="uil uil-times services_modal-close"></i>
                        <h3 className="services_modal-title">Bay Valey Tech Academy Discord Bot</h3>
                        <p className="services_modal-description">
                            Built a Discord bot and implement some functionalities that would later be incorporated 
                            into future classes to facilitate taking role as well moderating the channel. 
                        </p>

                        <div className="button-containers">
                            <a target='_blank' href="https://github.com/frankieavina/BVT_Discord_Bot_V1.0.git" className="button button-modal button--flex">
                                Github
                                <i className="uil uil-github-alt"></i>
                            </a>                       
                        </div>

                        <ul className="services_modal-services grid">
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                    Enhanced user experience by automating repetitive tasks. 
                                </p>
                            </li>
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                    Designing scalable and maintainable bot functionalities that could be easily extended.
                                </p>
                            </li>
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                    Implemented real-time attendance tracking
                                </p>
                            </li>
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                    Used discord.js to moderate channel.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* -------------------------- Featured Project 3 ----------------------- */}
            <div className="services_content">
                <div className="project_content_card">
                    <img src={ProjectPic2} alt="" className="project_img" />
                    <i className="uil uil-edit service_icon"></i>
                    <h3 className="services_title">WarCraft 3 Community App</h3>
                </div>

                <span onClick={() => toggleTab(3)} className="services_button">
                    View More <i className="uil uil-arrow-right service_button-icon"></i>
                </span>

                <div className={toggleState === 3 ? 'services_modal active-modal' : 'services_modal'}>
                    <div className="services_modal-content">
                        <i onClick={ () => toggleTab(0) } className="uil uil-times services_modal-close"></i>
                        <h3 className="services_modal-title">WarCraft 3 Community Review Web Application</h3>
                        <p className="services_modal-description">
                            Created a place where content creators for WorldCarft 3 can share there 
                            creativity and keep the Community alive.
                        </p>

                        <div className="button-containers">
                            <a target='_blank' href="https://github.com/bertman12/Warcraft-Legends.git" className="button button-modal button--flex">
                                Github
                                <i className="uil uil-github-alt"></i>
                            </a>
                            <a onClick={(e)=> { e.preventDefault(); openModal(3); }} href='/' className="button button-modal button--flex">
                                Demo
                                <i className='bx bx-camera-movie'></i>
                            </a>                        
                        </div>

                        <ul className="services_modal-services grid">
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                    Used Angular 12, Angular Material, Angular Services, and Bootstrap 5.
                                </p>
                            </li>
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                    Angualar In Memory Web API used as a mockup database.
                                </p>
                            </li>
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                    Authorization and verification through JWT.
                                </p>
                            </li>
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                    Developed a RESTful API using Node.js and Express. 
                                </p>
                            </li>
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                    Middleware was used for tasks such as logging, request validation, and error handling, 
                                    ensuring security.  
                                </p>
                            </li>
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                    Planned and designed data models for a MySQL database 
                                </p>
                            </li>                            
                        </ul>
                    </div>
                </div>
            </div> 
        </div>

        <VideoModal videoSrc={currentVideo} isOpen={isModalOpen} onClose={closeModal} />

    </section>
  )
}

export default Projects