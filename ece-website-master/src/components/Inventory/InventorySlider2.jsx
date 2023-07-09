import React from "react";
import InventoryCard from "./InventoryCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import inventory1 from '../assests/InventoryImages/inventory11.jpg'
import inventory2 from '../assests/InventoryImages/inventory21.jpg'
import inventory3 from '../assests/InventoryImages/inventory31.png'
import inventory4 from '../assests/InventoryImages/inventory41.jpg'
import inventory5 from '../assests/InventoryImages/inventory51.jpg'
import inventory6 from '../assests/InventoryImages/inventory61.jpg'
import inventory7 from '../assests/InventoryImages/inventory71.jpg'
import inventory8 from '../assests/InventoryImages/inventory81.jpg'



export default function CardSlider() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 2440 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 2440, min: 1560 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1560, min: 768 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
    },
  };

  const inventoryCards = [
    {
      img:inventory1,
      name:"DC PowerSupply (PWS4305)",
      desc:"Description of Item 1",
      link: 'https://docs.google.com/spreadsheets/d/15JaLIOIYLn9N1pqxUJTrTny76hmW0xbQibu7pyKHFzU/edit#gid=0'
    },
    {
      img:inventory2,
      name:"Fabrication Machine (Protomat E33)",
      desc:"Description of Item 1",
      link: 'https://docs.google.com/spreadsheets/d/15JaLIOIYLn9N1pqxUJTrTny76hmW0xbQibu7pyKHFzU/edit#gid=0'
    },
    {
      img:inventory3,
      name:"Network Analyzer (N9926A)",
      desc:"Description of Item 1",
      link: 'https://docs.google.com/spreadsheets/d/15JaLIOIYLn9N1pqxUJTrTny76hmW0xbQibu7pyKHFzU/edit#gid=0'
    },
    {
      img:inventory4,
      name:"Oscilloscope (MDO4104-6)",
      desc:"Description of Item 1",
      link: 'https://docs.google.com/spreadsheets/d/15JaLIOIYLn9N1pqxUJTrTny76hmW0xbQibu7pyKHFzU/edit#gid=0'
    },
    {
      img:inventory5,
      name:"Spectrum Analyzer (MS2720T)",
      desc:"Description of Item 1",
      link: 'https://docs.google.com/spreadsheets/d/15JaLIOIYLn9N1pqxUJTrTny76hmW0xbQibu7pyKHFzU/edit#gid=0'
    },
    {
      img:inventory6,
      name:"Oscilloscope (DPO 2002B)",
      desc:"Description of Item 1",
      link: 'https://docs.google.com/spreadsheets/d/15JaLIOIYLn9N1pqxUJTrTny76hmW0xbQibu7pyKHFzU/edit#gid=0'
    },
    {
      img:inventory7,
      name:" Functional Generator (AFG2021)",
      desc:"Description of Item 1",
      link: 'https://docs.google.com/spreadsheets/d/15JaLIOIYLn9N1pqxUJTrTny76hmW0xbQibu7pyKHFzU/edit#gid=0'
    },
    {
      img:inventory8,
      name:"Soldering Station (3000M)",
      desc:"Description of Item 1",
      link: 'https://docs.google.com/spreadsheets/d/15JaLIOIYLn9N1pqxUJTrTny76hmW0xbQibu7pyKHFzU/edit#gid=0'
    },
  ];

  return (
    <div>
      <Carousel
        responsive={responsive}
        infinite={true}
        showDots={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        transitionDuration={1000}
        rtl={true}
      >
        {inventoryCards.map((card) => (
          <InventoryCard key={card.name} name={card.name} link={card.link} desc={card.desc} img={card.img}/>
        ))}
      </Carousel>
    </div>
  );
}
