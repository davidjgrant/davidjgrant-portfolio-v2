import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { fade, picAnimation } from '../styles/Animation'
import imageLoader from '../utils/imageHandler'
import Button from '../components/button'

const ProjectFooter = ({moreProjects}) => {
  return (
    <motion.section variants={fade} initial='hidden' whileInView='show' viewport={{ once: true, amount: 0.6 }}
      className='mb-32'>
        <ul className='container flex flex-col md:flex-row mx-auto justify-center gap-x-1 px-1 sm:px-0'>
          {moreProjects.map(({ slug, title, shortDescription, featureImage }) => (
            <motion.li key={slug} variants={fade} className='w-full md:w-1/2 mb-1 md:mb-0 transition-opacity ease-in-out hover:opacity-80'>
              <Link href={`/portfolio/${slug}`}>
                <a className='flex'>
                  <Image
                    className='max-w-[350px] w-auto max-h-80 object-cover'
                    loader={imageLoader}
                    src={featureImage.url}
                    quality={100}
                    alt="image"
                    width={500}
                    height={320}
                    />
                  <div className='w-2/3 flex flex-col justify-start bg-white dark:bg-zinc-800 p-6'>
                    <h4 className='mb-4 text-xl font-medium'>{title}</h4>
                    <p className='mb-4'>{shortDescription}</p>
                    <Button type={'tertiary'}>
                      <a className='px-8 py-3'>Read more</a>
                    </Button>
                  </div>
                </a>
              </Link>
            </motion.li>
          ))}
        </ul>
    </motion.section>
  )
}

export default ProjectFooter