import React from 'react';
import CourseCard from './Course';
import AnimatedTextWord from './AnimatedTextCharacter';

export default function Courses() {
  const courseNames = [
    { name: 'RF Circuit Design', link: 'http://techtree.iiitd.edu.in/viewDescription/filename?=ECE321' },
    { name: 'Electronic Design and Automation', link: 'http://example.com/course2' },
    { name: 'Advanced Microwave Integrated Circuits', link: 'http://techtree.iiitd.edu.in/viewDescription/filename?=ECE573'},
    { name: 'Antenna Theory and Design', link: 'http://techtree.iiitd.edu.in/viewDescription/filename?=ECE431' },
    { name: 'Radar Trainer Lab ', link: 'http://example.com/course5' },
    { name: 'Robotics', link: 'http://techtree.iiitd.edu.in/viewDescription/filename?=CSE633' },
    { name: 'RF/Microwave Measurement Lab', link: 'http://example.com/course4' },
    { name: 'Radar Systems', link: 'http://techtree.iiitd.edu.in/viewDescription/filename?=ECE432' },
    { name: 'Oscillator Benches', link: 'http://example.com/course6' },
    { name: 'Wave Propogation Trainer', link: 'http://example.com/course6' },
  ];

  return (
    <div className='mx-4 my-12'>
      <div className='text-5xl mx-4 p-1 my-12'>
        <AnimatedTextWord text='Courses' />
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4'>
        {courseNames.map((course) => (
          <CourseCard key={course.name} name={course.name} link={course.link} />
        ))}
      </div>
    </div>
  );
}
