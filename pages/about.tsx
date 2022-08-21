import React from 'react'
import Image from 'next/image'
import imageLoader from '../utils/imageHandler'
// Sections
import GradientBanner from '../sections/GradientBanner'
import Layout from '../sections/Layout'
// Components

// Types
import type { GetStaticProps, NextPage } from 'next'
import { getAboutPage } from './api'
import SkillsList from '../sections/SkillsList'
import AboutContent from '../sections/AboutContent'
import HireMe from '../components/hireMe'

interface Props {
  aboutPage;
}

const about: NextPage<Props> = ({ aboutPage: { title, headerDescription, headerPicture, skillsList, aboutSection }}) => {
  return (
    <Layout>
      <GradientBanner gradient={'green-blue-gradient'}>
        <div className='flex flex-col md:flex-row md:items-center md:justify-around mx-auto container text-white px-6'>
          <div className='text-left container max-w-3xl my-16 md:my-0'>
            <h1 className='mb-4 font-bold text-lg'>About Me</h1>
            <h2 className='mb-14 text-2xl'>{ title }</h2>
            <p className='mb-6'>{ headerDescription }</p>
          </div>
          <div className='dark:bg-black bg-gray-50 p-4 h-fit relative'>
            <Image
              className='absolute right-0'
              loader={imageLoader}
              src={headerPicture.url}
              alt="Profile Pic"
              width={375}
              height={500}
            />
          </div>
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