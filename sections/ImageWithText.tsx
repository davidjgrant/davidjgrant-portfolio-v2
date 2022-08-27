import Image from 'next/image'
import React from 'react'
import imageLoader from '../utils/imageHandler'
import logo from '../assets/logo-gradient-empty-small.png'
import { motion } from 'framer-motion'
import { fade } from '../styles/Animation'

const ImageWithText = ({ featuredBanner: { featuredTitle, featuredDescription }}) => {
  return (
    <motion.div variants={fade} initial='hidden' whileInView='show' viewport={{ once: true }}
      className='min-w-full bg-gray-100 dark:bg-zinc-900 h-fit lg:-mx-[20vw] my-16 md:my-32'>
      <div className='container flex flex-col md:flex-row items-center justify-between ml-auto'>
        <div className='text-left max-w-3xl p-8 mr-auto'>
          <h3 className={`font-bold text-lg capitalise text-transparent bg-clip-text purple-purple-gradient`}>{ featuredTitle }</h3>
          <p className='my-4 font-medium'>{ featuredDescription }</p>
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
    </motion.div>
  )
}

export default ImageWithText