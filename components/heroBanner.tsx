import React from 'react'
import Image from 'next/image'
import imageLoader from '../utils/imageHandler'

const HeroBanner = ({image}) => {
  return (
    <Image
      className='object-cover'
      loader={imageLoader}
      src={image.url}
      alt="featured Image"
      width={1680}
      height={500}
    />
  )
}

export default HeroBanner