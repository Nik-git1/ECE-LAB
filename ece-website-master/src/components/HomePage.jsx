import React from 'react'
import Slider from './Slider'
import EceDesc from "./EceDesc";
import Equipments from "./Equipments";
import Projects from "./Projects";
import Facilities from "./Facilities";
import FeedbackForm from "./FeedbackForm";
import Courses from "./Courses";

export default function HomePage() {
  return (
    <>
    <div style={{height:'95vh'}}>
        <Slider/>
    </div>
    <EceDesc/>
    <Courses/>
    <section id="equipments">
        <Equipments />
    </section>
    <section id='facilities'>
        <Facilities/>
    </section>
   
    <Projects/>
    </>
  )
}
