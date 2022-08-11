import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import imageLoader from '../utils/imageHandler'

export interface IProjectCard {
  title: string
  description: string
  image: string
  slug: string
}

const ProjectCard = ({ title, description, image, slug }) => {
  
  return (
    <li className='max-w-[640px]'>
      <Link href={`/portfolio/${slug}`}>
        <a className='flex shadow-sm shadow-zinc-900'>
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
    </li>
  )
}

export default ProjectCard