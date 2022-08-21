import React from 'react'

const ProjectHead = ({children}) => {
  return (
    <header className='mx-auto container text-center mt-24 sm:mt-32'>
      {children}
    </header>
  )
}

export default ProjectHead