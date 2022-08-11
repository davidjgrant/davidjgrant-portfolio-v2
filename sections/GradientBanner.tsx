import React from 'react'

const GradientBanner = ({children}) => {
  return (
    <div className='min-w-screen relative h-[22rem] sm:h-[32rem] p-8 pt-16 text-center bg-gradient-to-tr from-amber-500 to-pink-600 mb-32'>
      { children }
    </div>
  )
}

export default GradientBanner