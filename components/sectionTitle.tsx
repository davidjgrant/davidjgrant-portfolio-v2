import React from 'react'

const SectionTitle = ({title, children, arrow, color}) => {
  return (
    <div className='flex flex-col justify-center items-center px-4 sm:px-0 my-16 sm:my-32'>
      <h3 className={`font-bold text-lg capitalise text-transparent bg-clip-text ${color}`}>{title}</h3>
      <p className='my-4 font-medium text-2xl'>{children}</p>
      { arrow && <span className='text-4xl font-light'>↓</span> }
    </div>
  )
}

export default SectionTitle