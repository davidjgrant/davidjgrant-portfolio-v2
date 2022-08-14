import React, { useState } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { fade } from '../styles/Animation'
import imageLoader from '../utils/imageHandler'

export interface IProjectCard {
  project;
  title: string
  description: string
  image: string
  slug: string
}

const ProjectCard = ({ title, description, image, slug }) => {

  const y = useMotionValue(0.5)
  const x = useMotionValue(0.5)

  const rotateY = useTransform(x, [0, 1], [8, -8])
  const rotateX = useTransform(y, [0, 1], [-8, 8])

  const onMove = e => {
    // get position information for the card
    const bounds = e.currentTarget.getBoundingClientRect()
    
    // set x,y local coordinates
    const xValue = (e.clientX - bounds.x) / e.currentTarget.clientWidth
    const yValue = (e.clientY - bounds.y) / e.currentTarget.clientHeight
    
    // update MotionValues
    x.set(xValue, true)
    y.set(yValue, true)
  }

  const onLeave = e => {
    const bounds = e.currentTarget.getBoundingClientRect()

    // set x,y local coordinates
    const xValue = (e.clientX - bounds.x) / e.currentTarget.clientWidth
    const yValue = (e.clientY - bounds.y) / e.currentTarget.clientHeight

    x.set(0.5)
    y.set(0.5)
  }
  
  return (
    <motion.li variants={fade}
      onPointerMove={onMove}
      onMouseLeave={onLeave}
      style={{
        rotateY,
        rotateX,
      }}
      className='max-w-[640px]'>
        <Link href={`/portfolio/${slug}`}>
          <a className='flex shadow-md shadow-zinc-900'>
            <Image
                className='max-h-80 w-80 object-cover'
                loader={imageLoader}
                src={image}
                quality={100}
                alt="image"
                width={320}
                height={320}
              />
            <div className='w-80 flex flex-col justify-start bg-slate-100 dark:bg-zinc-900 p-6'>
              <h4 className='mb-4 text-xl font-medium'>{title}</h4>
              <p>{description}</p>
            </div>
          </a>
        </Link>
    </motion.li>
  )
}

export default ProjectCard