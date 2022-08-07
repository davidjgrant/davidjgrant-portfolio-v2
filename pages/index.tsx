import type { GetStaticProps, NextPage } from 'next'
import Link from 'next/link'
import { getAllProjectsForHome } from '../lib/api'
import Layout from '../sections/Layout'
import { IProjectFields } from '../types'

interface Props {
  projects: IProjectFields[];
}

const Home: NextPage<Props> = ({ projects }) => {
  return (
    <Layout>
      <main>
        <h1>
          Project
        </h1>
        <ul>
          {projects.map((project) => (
            <li key={project.slug}>
              <Link href={`/portfolio/${project.slug}`}>
                <a>{project.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const projects = await getAllProjectsForHome() ?? []
  
  return {
    props: { projects }
  }
}

export default Home
