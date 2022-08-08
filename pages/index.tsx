import Link from 'next/link'
import Image from 'next/image';
import { getAllProjectsForHome, getHomepage } from './api'
//Components
import JobTitles from '../components/jobTitles';
import imageLoader from '../utils/imageHandler';
// Sections
import Layout from '../sections/Layout'
import GradientBanner from '../sections/GradientBanner';
// Types
import type { GetStaticProps, NextPage } from 'next'
import type { IProjectFields } from '../types'
import IntroSplit from '../sections/IntroSplit';

interface Props {
  projects: IProjectFields[];
  home;
}

const Home: NextPage<Props> = ({ projects, home: { jobTitles, profilePic, introPast, introFuture, portfolioTitle, blogTitle } }) => {
  return (
    <Layout>
      <>
        <GradientBanner>
          <h1 className='text-3xl font-semibold p-3 text-white'>DavidJGrant Portfolio</h1>
          <JobTitles jobTitles={jobTitles} />
          <div className="dark:bg-black bg-gray-50 p-4 rounded-full absolute -bottom-20 left-1/2 transform -translate-x-1/2">
            <Image
              className='rounded-full'
              loader={imageLoader}
              src={profilePic.url}
              alt="Profile Pic"
              width={248}
              height={248}
            />
          </div>
        </GradientBanner>
        <article className='container mx-auto mb-16'>
          <IntroSplit text={{ introPast, introFuture }} />

          <div>{portfolioTitle}</div>
          <ul>
            {projects.map((project) => (
              <li key={project.slug}>
                <Link href={`/portfolio/${project.slug}`}>
                  <a>{project.title}</a>
                </Link>
              </li>
            ))}
          </ul>

          <h3>{ blogTitle }</h3>
        </article>
      </>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const [ home ] = await getHomepage() ?? []
  const projects = await getAllProjectsForHome() ?? []
  console.log('home', home );
  
  return {
    props: { projects, home }
  }
}

export default Home
