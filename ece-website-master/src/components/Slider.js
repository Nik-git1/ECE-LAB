import React, { useState,useEffect,useRef } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import pro1 from './assests/ProjectImages/pro1.jpg'
import pro2 from './assests/ProjectImages/pro2.jpg'
import pro3 from './assests/ProjectImages/pro3.jpg'
import pro4 from './assests/ProjectImages/pro4.jpg'
import inrto from './EceIntro'



export default function Slider() {
    const slides = [
        {
          url:pro4,
        },
        {
          url: pro2,
        },
        {
          url: pro3, 
        },
        {
          url: pro1,
        }
      ];

      const [currentIndex, setCurrentIndex] = useState(0);
      const [autoplay, setAutoplay] = useState(true);
      const timeoutRef = useRef(null);

      const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
      };
      const delay = 2500;
    
      const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
      };
    
      const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
      };

      useEffect(() => {
        if (autoplay) {
          timeoutRef.current = setTimeout(() => {
            nextSlide();
          }, delay);
        }
      
        return () => {
          if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
          }
        };
      },);


  return (
    <>
  
    <div className='w-auto h-full px-2 py-4 relative group' onMouseEnter={() => {setAutoplay(false);}}   onMouseLeave={() => {setAutoplay(true);}} >
    <div
      style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
      className='w-full h-full bg-center bg-cover duration-500'
    ></div>
    {/* Left Arrow */}
    <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl p-2 bg-black/20 text-white cursor-pointer'>
      <BsChevronCompactLeft onClick={prevSlide} size={30} />
    </div>
    {/* Right Arrow */}
    <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl p-2 bg-black/20 text-white cursor-pointer'>
      <BsChevronCompactRight onClick={nextSlide} size={30} />
    </div>
    <div className='flex top-4 justify-center py-2'>
      {slides.map((slide, slideIndex) => (
        <div
          key={slideIndex}
          onClick={() => goToSlide(slideIndex)}
          className='text-2xl cursor-pointer'
        >
            <div><RxDotFilled /></div>
          
        </div>
      ))}
    </div>
  </div>
  </>
  )
}
