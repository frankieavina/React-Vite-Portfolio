import './qualification.css';
import { useState } from 'react';

function Qualification() {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    

  return (
    <section className="qualification section" id='qualifications'>
        <h2 className="section_title">Qualification</h2>
        <span className="section_subtitle">My Personal Journey</span>

        <div className="qualification_container container">
            <div className="qualification_tabs">
                <div 
                    className={toggleState === 1 ? "qualification_button qualification_active button-flex": "qualification_button button--flex" }
                    onClick={() => toggleTab(1)}
                >
                    <i className="uil uil-graduation-cap qualification_icon"></i>Education
                </div>

                <div 
                    className={toggleState === 2 ? "qualification_button qualification_active button-flex": "qualification_button button--flex"}
                    onClick={() => toggleTab(2)}
                >
                    <i className="uil uil-briefcase-alt qualification_icon"></i>Experience
                </div>
            </div>

            <div className="qualification_sections">
                <div className={toggleState === 1 ? "qualification_content qualification_content-active": "qualification_content"}>
{/* // --------------------------------------------------------------------------------------------// */}
                    <div className="qualification_data">
                        <div>
                            <h3 className="qualification_title">Computer Engineering</h3>
                            <span className="qualification_subtitle">Fresno - CSUF</span>
                            <div className="qualification_calender">
                                <i className="uil uil-calendar-alt"></i>2011 - 2016
                            </div>
                        </div>

                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>
                    </div>
{/* //---------------------------------------------------------------------------------------------// */}
                    <div className="qualification_data">
                        <div>
                            <h3 className="qualification_title">Web Development</h3>
                            <span className="qualification_subtitle">Modesto - BVT Academy</span>
                            <div className="qualification_calender">
                                <i className="uil uil-calendar-alt"></i>2019 - 2020
                            </div>
                        </div>

                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>
                    </div>

                    <div className="qualification_data">
                        <div></div>
                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>
                        <div>
                            <h3 className="qualification_title">Web Developer Intern</h3>
                            <span className="qualification_subtitle">Modesto - BVT</span>
                            <div className="qualification_calender">
                                <i className="uil uil-calendar-alt"></i>2020 - 2020
                            </div>
                        </div>
                    </div>

                    <div className="qualification_data">
                        <div></div>
                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>
                        <div>
                            <h3 className="qualification_title">Junior MES Engineer</h3>
                            <span className="qualification_subtitle">Modesto - Gallo Wineries</span>
                            <div className="qualification_calender">
                                <i className="uil uil-calendar-alt"></i>2021 - 2021
                            </div>
                        </div>
                    </div>

                    <div className="qualification_data">
                        <div>
                            <h3 className="qualification_title">React Development</h3>
                            <span className="qualification_subtitle">Fresno - Bitwise</span>
                            <div className="qualification_calender">
                                <i className="uil uil-calendar-alt"></i>2021 - 2021
                            </div>
                        </div>

                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>
                    </div>

                    <div className="qualification_data">
                        <div></div>
                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>
                        <div>
                            <h3 className="qualification_title">Software Engineer</h3>
                            <span className="qualification_subtitle">Fresno - Bitwise Industries</span>
                            <div className="qualification_calender">
                                <i className="uil uil-calendar-alt"></i>2022 - 2023
                            </div>
                        </div>
                    </div>
 {/* //------------------------------------------------------------------------------------------//                    */}
                </div>

                <div className={toggleState === 2 ? "qualification_content qualification_content-active": "qualification_content"}>
{/* // --------------------------------------------------------------------------------------------// */}
                    <div className="qualification_data">
                        <div>
                            <h3 className="qualification_title">Product Designer</h3>
                            <span className="qualification_subtitle">Microsoft - Spain</span>
                            <div className="qualification_calender">
                                <i className="uil uil-calendar-alt"></i>2021 - Present
                            </div>
                        </div>

                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>
                    </div>

                    <div className="qualification_data">
                        <div></div>
                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>
                        <div>
                            <h3 className="qualification_title">UX Designer</h3>
                            <span className="qualification_subtitle">Apple Inc - Spain</span>
                            <div className="qualification_calender">
                                <i className="uil uil-calendar-alt"></i>2020 - 2021
                            </div>
                        </div>
                    </div>
{/* //---------------------------------------------------------------------------------------------// */}
                    <div className="qualification_data">
                        <div>
                            <h3 className="qualification_title">Web Designer</h3>
                            <span className="qualification_subtitle">Figma - Spain</span>
                            <div className="qualification_calender">
                                <i className="uil uil-calendar-alt"></i>2018 - 2020
                            </div>
                        </div>

                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>
                    </div>
 {/* //------------------------------------------------------------------------------------------//                    */}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification