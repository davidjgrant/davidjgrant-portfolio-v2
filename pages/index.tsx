import { MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Link from 'next/link'
import { getAllProjectsForHome, getHomepage } from './api'
// Sections
import Layout from '../sections/Layout'
import GradientBanner from '../sections/GradientBanner';
// Types
import type { GetStaticProps, NextPage } from 'next'
import type { IProjectFields } from '../types'

interface Props {
  projects: IProjectFields[];
  home;
}

const Bold = ({ children }) => <span className="font-bold text-orange-500">{ children }</span>;

const options = {
  renderMark: {
    [MARKS.BOLD]: text => <Bold>{ text }</Bold>,
  },
  renderText: text => text.replace('!', '?')
};

const Home: NextPage<Props> = ({ projects, home: { jobTitles, profilePic, introPast, introFuture, portfolioTitle, blogTitle, location } }) => {
  return (
    <Layout>
      <>
        <GradientBanner info={{jobTitles, profilePic}} />
        <article className='container mx-auto mb-16'>
          <div>
            <div>{documentToReactComponents(introPast.json, options)}</div>
            <div>{documentToReactComponents(introFuture.json)}</div>
          </div>

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
