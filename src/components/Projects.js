import React, { useEffect } from 'react'
import { ProjectIntro } from '../data'
import { FiChevronRight } from "react-icons/fi";



const Projects = () => {
  
  return (
    <section>
      <h2 className='mt-4 text-center font-bold text-2xl'>Selected Projects</h2>
      <div className='grid md:grid-cols-2'>
 {ProjectIntro.map(intro=>{
        const {id, name, category, img:{image}, color} = intro;
        console.log(color);
        return (
          <section key={id}>
            <div className={`bg-[${color}] m-5 flex`}>
              <div className='flex flex-col justify-between'>
              <div>
             <h3>{name}</h3>
            <p className='w-[100%]'>{category}</p>
              </div>
        <p className='flex flex-row items-center'>
          See work<FiChevronRight/></p>
            </div>
            <img className='ml-10' src={image} alt={name} />
            </div>
            
          </section>
        )
          })}
      </div>
     
    
    </section>
  )
}

export default Projects