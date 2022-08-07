import { GetStaticProps, GetStaticPaths, NextPage } from "next"
import { getAllProjectsWithSlug, getProjectAndMore } from "../api"
import { IProjectFields } from "../../types";

interface Props {
  project: IProjectFields;
  moreProjects: IProjectFields;
}

export const ProjectPage: NextPage<Props> = ({ project, moreProjects }) => {
  return (
    <pre>{JSON.stringify(project, null, 2)}
    {JSON.stringify(moreProjects, null, 2)}</pre>
  )
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const data = await getProjectAndMore(params.project)
  console.log('projectData', { data });
  return {
    props: {
      project: data.project,
      moreProjects: data.moreProjects
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await getAllProjectsWithSlug()
  // const paths = data.map(({slug}) => {
  //   return {
  //     params: { project: slug }
  //   }
  // })

  return {
    paths: data?.map(({slug}) => ({params: { project: slug }})),
    fallback: false,
  }
}

export default ProjectPage