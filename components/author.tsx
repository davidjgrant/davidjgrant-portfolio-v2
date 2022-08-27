import React from 'react'
import Image from 'next/image'
import imageLoader from '../utils/imageHandler'
import { fade } from '../styles/Animation'
import { motion } from 'framer-motion'

const Author = ({author, published}) => {

  const date = new Date(published).toDateString()

  return (
    <motion.div variants={fade}
      className='flex gap-4 justify-center items-center mt-4'>
      <Image
        className='rounded-full'
        loader={imageLoader}
        src={author.profile.url}
        alt="Author Pic"
        width={48}
        height={48}
      />
      <h5 className='text-lg font-semibold'>{author.name}</h5>
      <p>{date}</p>
    </motion.div>
  )
}

export default Author