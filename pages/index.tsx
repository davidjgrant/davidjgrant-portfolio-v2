import { MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Image from 'next/image'
import Link from 'next/link'
import { getAllProjectsForHome, getHomepage } from '../lib/api'
import Layout from '../sections/Layout'

// Types
import type { GetStaticProps, NextPage } from 'next'
import type { IProjectFields } from '../types'

interface Props {
  projects: IProjectFields[];
  home;
}

const myLoader = ({ src, width, quality }) => {
  return `${ src }?w=${ width }&q=${ quality || 75 }`
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
      <main>
        <h1 className='text-3xl'>
          DavidJGrant Portfolio
        </h1>
        <div>
          { jobTitles && jobTitles.map((title) => {
            return (
              <h2 key={title}>{title}</h2>
            )
          })}
        </div>
        <Image
          loader={myLoader}
          src={profilePic.url}
          alt="Profile Pic"
          width={500}
          height={500}
        />

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
      </main>

      <footer>
        { location }
      </footer>
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
