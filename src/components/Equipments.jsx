
import React from 'react'
import InventorySlider1 from './Inventory/InventorySlider1'
import InventorySlider2 from './Inventory/InventorySlider2'
import AnimatedTextWord from './AnimatedTextCharacter'


export default function Page3() {
  return (
    <div>
      
       <div className='text-5xl mx-20 p-1 my-12 underline' > 
       <AnimatedTextWord text="Equipements"/>
        </div>
        <InventorySlider1/>
        <div className='h-10'></div>
        <InventorySlider2/>
    </div>
  )
}
