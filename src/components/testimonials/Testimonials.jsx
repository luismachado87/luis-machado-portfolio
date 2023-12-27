import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR1,
    name: 'Tina Snow',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui obcaecati voluptatem rem perspiciatis, dolor est labore iste, corrupti, quas soluta quod blanditiis asperiores?'
  },
  {
    avatar: AVTR2,
    name: 'shatta male',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui obcaecati voluptatem rem perspiciatis, dolor est labore iste, corrupti, quas soluta quod blanditiis asperiores?'
  },
  {
    avatar: AVTR3,
    name: 'kwane despite',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui obcaecati voluptatem rem perspiciatis, dolor est labore iste, corrupti, quas soluta quod blanditiis asperiores?'
  },
  {
    avatar: AVTR4,
    name: 'Tina turner',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui obcaecati voluptatem rem perspiciatis, dolor est labore iste, corrupti, quas soluta quod blanditiis asperiores?'
  },
]
const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from client</h5>
      <h2>Testimonials</h2>
      
      <Swiper className="container testimonials_container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
      {
        data.map (({avatar, name , review}, index) => {
          return (
            <SwiperSlide key={index} className='testimonial'>
            <div className="client_avatar">
              <img src={avatar}/>
              </div>
              <h5 className='client_name'>{name}</h5>
              <small className='client_review'>{review}</small>
          </SwiperSlide>
          )
        })
       }
        
      </Swiper>
      </section>
  )
}

export default Testimonials
