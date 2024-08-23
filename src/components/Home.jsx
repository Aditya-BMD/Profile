import React from "react";
import '../css/home.css'
import {Link} from "react-scroll";
import profile from '../assets/profile.png'
function Home() {
  return(
      <section id="home">
          <div className="intro">
              <span className="hello">Hello,</span>

              <span className="intro-text">I'm <span className="intro-name">Aditya</span>
              <br/>
              Associate Software Engineer</span>
              <p className="intro-para">
                  I am skilled developer having proficiency in developing full stack website in <br/>multiple technologies.
              </p>
              <Link><button className="Hire-me"><i className="bi bi-laptop-fill"> Hire ME!!</i></button></Link>
          </div>
          <div className="profile-image">
              <img src={profile} alt="Aditya"/>
          </div>


      </section>
  )
}
export default Home