import React from 'react'
import './contact.css'
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_boecu7p', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      e.target.reset ()

      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className='contact_option'>
          <MdOutlineEmail className='contact_option-icon'/>
          <h4>Email</h4>
          <h5>lmachado8787@gmail.com</h5>
          <a href="mailto:lmachado8787@gmail.com" target='a_blank'>Send a message</a>
          
          </article>
          <article className='contact_option'>
          <FaFacebookMessenger className='contact_option-icon'/>
          <h4>Messenger</h4>
          <h5>luis machado</h5>
          <a href="https://www.linkedin.com/in/luis-leonardo-machado-3b8400265/" target='a_blank'>Send a message</a>
          </article>
          <article className='contact_option'>
          <FaWhatsapp className='contact_option-icon' />
          <h4>Whatsapp</h4>
          <h5>1164819942</h5>
          <a href="https://api.whatsapp.com/send?phone=1164819942"  target='a_blank'>Send a message</a>
          </article>
        </div>
        {/*end of contact options*/}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
