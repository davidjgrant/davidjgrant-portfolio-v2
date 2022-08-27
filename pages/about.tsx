import React from 'react'
import Image from 'next/image'
import imageLoader from '../utils/imageHandler'
import { motion } from 'framer-motion'
// Sections
import GradientBanner from '../sections/GradientBanner'
import Layout from '../sections/Layout'
import SkillsList from '../sections/SkillsList'
import AboutContent from '../sections/AboutContent'
// Components
import HireMe from '../components/hireMe'

// Styles
import { fade, titleAnimation, picAnimation } from '../styles/Animation'

// Types
import type { GetStaticProps, NextPage } from 'next'
import { getAboutPage } from './api'

interface Props {
  aboutPage;
}

const about: NextPage<Props> = ({ aboutPage: { title, headerDescription, headerPicture, skillsList, aboutSection }}) => {
  return (
    <Layout>
      <GradientBanner gradient={'green-blue-gradient'}>
        <div className='flex flex-col md:flex-row md:items-center md:justify-around mx-auto container text-white px-6'>
          <motion.div variants={titleAnimation} className='text-left container max-w-3xl my-16 md:my-0'>
            <motion.h1 variants={fade} className='mb-4 font-bold text-lg'>About Me</motion.h1>
            <motion.h2 variants={fade} className='mb-14 text-2xl'>{ title }</motion.h2>
            <motion.p variants={fade} className='mb-6'>{ headerDescription }</motion.p>
          </motion.div>
          <motion.div variants={picAnimation} className='dark:bg-black bg-gray-50 p-4 h-fit relative'>
            <Image
              className='absolute right-0'
              loader={imageLoader}
              src={headerPicture.url}
              alt="Profile Pic"
              width={375}
              height={500}
            />
          </motion.div>
        </div>
      </GradientBanner>
      <SkillsList skillsList={skillsList} />
      <AboutContent content={aboutSection} />
      <HireMe jobHunting={true} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const [ aboutPage ] = await getAboutPage() ?? []
  
  return {
    props: { aboutPage }
  }
}

export default about