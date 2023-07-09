import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import TestimonialCard from './TestimonialCard';
import SwiperCore, { Autoplay } from 'swiper';
import female from './assests/Testimonial/dummy-female.png'
import male from './assests/Testimonial/dummy-user.png'


// import TestimonialCard and other necessary modules

SwiperCore.use([Autoplay]);

const TestimonialSlider = () => {
    
const testimonials = [
    {
      image: male,
      name: 'John Doe',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      image: female,
      name: 'Jane Doe',
      text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      image: male,
      name: 'Mark Smith',
      text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    },
    {
      image: female,
      name: 'Sara Johnson',
      text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.',
    },
  ];
  return (
    <Swiper
      spaceBetween={36}
      slidesPerView={3}
      loop={true}
      autoplay={{
        delay: 4500,
        disableOnInteraction: false,
      }}
      className="px-5"
    >
      {testimonials.map((testimonial, index) => (
        <SwiperSlide key={index}>
          <TestimonialCard {...testimonial} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSlider;