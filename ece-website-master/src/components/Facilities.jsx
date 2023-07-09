import React from 'react';
import Card from './FacilitiesCard';
import AnimatedTextWord from './AnimatedTextCharacter'
import { MdHardware } from 'react-icons/md';
import { FaCalculator, FaReact } from "react-icons/fa";
import {SiJirasoftware } from 'react-icons/si'
import {IoDocumentSharp } from 'react-icons/io5'
import CardSlider from './Inventory/InventorySlider1';

function Page6() {
  const facility = [
    {
      icon: MdHardware,
      name:"Hardware Facilities",
      link: 'http://example.com/course6'
    },
    {
      icon:  SiJirasoftware,
      name:"Software Facilities",
      link: 'http://example.com/course6'
    },
    {
      icon: FaCalculator,
      name:"Test Bench Setup",
      link: 'http://example.com/course6'
    },{
      icon: IoDocumentSharp,
      name:"Documents",
      link: 'http://example.com/course6'
    },
   ];

  return (
    <>
    <div className='text-5xl mx-20 p-1 my-12 underline'>
      <AnimatedTextWord text="Facilities"/>
    </div>
    <div className='flex justify-center'> 
      <div className='grid grid-cols-2 md:grid-cols-4 gap-12 justify-center'>
        {facility.map((card)=>(
          <Card key={card.name} name={card.name} link={card.link} icon={card.icon} />
        ))}
      </div>
    </div>
    </>
  );
}

export default Page6;
