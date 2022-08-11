import React, { useState } from 'react'
import ProjectCard from '../components/projectCard'

export interface IPortfolioGrid {
  onMouseEvent;
}

const PortfolioGrid = ({projects}) => {

  const [gradient, setGradient ] = useState('purple-purple-gradient')

  return (
    <div className='relative flex justify-center items-end h-[54rem] sm:h-[42rem] mb-48'>
      <ul className='absolute grid grid-cols-1 sm:grid-cols-2 gap-8 mx-4 sm:mx-auto z-10'>
        {projects.map((project) => (
          <ProjectCard key={project.slug} title={project.title} description={project.shortDescription} image={project.image.url} slug={project.slug} />
        ))}
      </ul>
      <div className={`absolute -bottom-16 h-[40rem] w-full z-0 ${gradient}`}></div>
    </div>

  )
}

export default PortfolioGrid