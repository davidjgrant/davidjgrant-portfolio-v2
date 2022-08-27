import React from 'react'
import Image from 'next/image'
import imageLoader from '../utils/imageHandler'
import { picAnimation } from '../styles/Animation'
import { motion } from 'framer-motion'

const HeroBanner = ({image}) => {
  return (
    <motion.div variants={picAnimation}>
      <Image
        className='object-cover'
        loader={imageLoader}
        src={image.url}
        alt="featured Image"
        width={1680}
        height={500}
      />
    </motion.div>

  )
}

export default HeroBanner