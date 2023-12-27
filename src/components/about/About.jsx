import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import { FaAward } from "react-icons/fa";
import { TbUsers } from "react-icons/tb";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src= {ME} alt="About Image"/>
          </div>
        </div>
        <div className="about_content">
              <div className="about_cards">
                <article className='about_card'>
                <FaAward className='about_icon'/>
                  <h5>Experience</h5>
                  <small>2+ years working</small>
                </article>
                <article className='about_card'>
                <TbUsers  className='about_icon' />
                  <h5>Clients</h5>
                  <small>20+ </small>
                </article>
                <article className='about_card'>
                <VscFolderLibrary className='about_icon'/>
                  <h5>Proyects</h5>
                  <small>15 proyects</small>
                </article>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos placeat cum atque velit harum est repudiandae vitae itaque adipisci suscipit ipsa voluptas dolores, explicabo quidem illum rem consectetur amet. Dignissimos?

              </p>

              <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>

      </div>
    </section>
  )
}

export default About

