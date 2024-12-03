import React from "react";
import '../css/skills.css'
import springImage  from  '../assets/spring.png';
import {Link} from "react-scroll";
function Skills() {
    return(
        <section id="skills">

            <div className="what-i-do">
                What I Do
            </div>
            <div className="skills-intro">
                I can work with multiple technologies Worked with spring and spring boot to build robust backendsWorked with  robust backendsWorked with  spring and spring boot to build robust backendsWorked with spring and spring boot to build robust backendsWorked with spring and spring boot to build robust backendsWorked with spring and spring boot to build robust backendsWorked with spring and spring boot to build robust backendsWorked with spring and spring boot to build robust backendsWorked with spring and spring boot to build robust backendsWorked with spring and spring boot to build robust backends
            </div>

            <div className="technologies">

                <div className="tech">
                    <div className="tech-image">
                        <img src={springImage} alt="Java Spring"/>
                    </div>
                    <div className="tech-details">
                        <div className="heading">
                            <h2>Spring/Spring Boot</h2>
                        </div>
                        <div className="description">
                            <p> Worked with spring and spring boot to build robust backends</p>
                        </div>
                    </div>
                </div>
                <div className="tech">
                    <div className="tech-image">
                        <img src={springImage} alt="Java Spring"/>
                    </div>
                    <div className="tech-details">
                        <div className="heading">
                            <h2>Spring/Spring Boot</h2>
                        </div>
                        <div className="description">
                            <p> Worked with spring and spring boot to build robust backends</p>
                        </div>
                    </div>
                </div>
                <div className="tech">
                    <div className="tech-image">
                        <img src={springImage} alt="Java Spring"/>
                    </div>
                    <div className="tech-details">
                        <div className="heading">
                            <h2>Spring/Spring Boot</h2>
                        </div>
                        <div className="description">
                            <p> Worked with spring and spring boot to build robust backends</p>
                        </div>
                    </div>
                </div>
                <div className="tech">
                    <div className="tech-image">
                        <img src={springImage} alt="Java Spring"/>
                    </div>
                    <div className="tech-details">
                        <div className="heading">
                            <h2>Spring/Spring Boot</h2>
                        </div>
                        <div className="description">
                            <p> Worked with spring and spring boot to build robust backends</p>
                        </div>
                    </div>
                </div>

            </div>


        </section>
    )
}

export default Skills