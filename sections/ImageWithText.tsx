import Image from 'next/image'
import React from 'react'
import imageLoader from '../utils/imageHandler'
import logo from '../assets/logo-gradient-empty-small.png'

const ImageWithText = () => {
  return (
    <div className='min-w-full bg-gray-100 dark:bg-zinc-900 h-fit -mx-[20vw] my-32'>
      <div className='container ml-auto flex items-center justify-between'>
        <div className='text-left max-w-3xl px-4 py-8'>
          <h3 className={`font-bold text-lg capitalise text-transparent bg-clip-text purple-purple-gradient`}>Recent Insights</h3>
          <p className='my-4 font-medium'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus ut, quae odit quas exercitationem quis harum! Dolorum dicta natus reiciendis.</p>
        </div>
        <Image
          className='object-cover'
          loader={imageLoader}
          src={logo}
          alt="Banner"
          width={500}
          height={300}
        />
      </div>
    </div>
  )
}

export default ImageWithText