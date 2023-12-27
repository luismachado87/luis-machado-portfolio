import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa6";
const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/luis-leonardo-machado-3b8400265/"  target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/luismachado87" target="_blank"><FaGithub /></a>
      
    </div>
  )
}

export default HeaderSocials
