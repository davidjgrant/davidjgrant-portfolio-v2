import Image from 'next/image';
import { getAllProjectsForHome, getHomepage } from './api'
import { motion } from 'framer-motion'
import { fade, titleAnimation } from '../styles/Animation'
//Components
import JobTitles from '../components/jobTitles';
import imageLoader from '../utils/imageHandler';
import SectionTitle from '../components/sectionTitle';
// Sections
import Layout from './layout'
import GradientBanner from '../sections/GradientBanner';
import IntroSplit from '../sections/IntroSplit';
import PortfolioGrid from '../sections/PortfolioGrid';
// Types
import type { GetStaticProps, NextPage } from 'next'
import type { IProjectFields } from '../types'


interface Props {
  projects: IProjectFields[];
  home;
}

const Home: NextPage<Props> = ({ projects, home: { jobTitles, profilePic, introPast, introFuture, portfolioTitle, blogTitle, cv } }) => {
  return (
    <Layout>
        <GradientBanner gradient={'amber-pink-gradient'}>
          <motion.h1 variants={titleAnimation} initial='hidden' whileInView='show' viewport={{ once: true, amount: 0.8 }}
            className='my-4 text-3xl sm:text-5xl font-bold capitalize p-3 text-white'>DavidJGrant Portfolio</motion.h1>
          <JobTitles jobTitles={jobTitles} />
          <motion.div variants={fade}
            className="dark:bg-black bg-gray-50 p-4 rounded-full absolute -bottom-20 left-1/2 transform -translate-x-1/2 max-w-[200px] md:max-w-none">
            <Image
              className='rounded-full'
              loader={imageLoader}
              src={profilePic.url}
              alt="Profile Pic"
              width={248}
              height={248}
            />
          </motion.div>
        </GradientBanner>
        <article className='container mx-auto'>
          <IntroSplit text={{ introPast, introFuture, cv }} />
          <SectionTitle title={'View Portfolio'} arrow={true} color={'amber-pink-gradient'}>
            { portfolioTitle }
          </SectionTitle>
        </article>
        <PortfolioGrid projects={projects} />
        { blogTitle ?
          <article className='container mx-auto mb-16'>
            <SectionTitle title={'Recent Insights'} arrow={false} color={'green-blue-gradient'}>
              { blogTitle }
            </SectionTitle>
          </article>
        : ''}
    </Layout>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const [ home ] = await getHomepage() ?? []
  const projects = await getAllProjectsForHome() ?? []
  
  return {
    props: { projects, home }
  }
}

export default Home
