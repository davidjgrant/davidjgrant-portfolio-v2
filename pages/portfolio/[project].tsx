import { GetStaticProps, GetStaticPaths, NextPage } from "next"
import { getAllProjectsWithSlug, getProjectAndMore } from "../api"
import { IProjectFields } from "../../types";
import Layout from "../../sections/Layout";
import ProjectHead from "../../sections/ProjectHead";
import Author from "../../components/author";
import Roles from "../../components/roles";
import ProjectBody from "../../sections/ProjectBody";
import HeroBanner from "../../components/heroBanner";
import { motion } from "framer-motion";
import { fade } from "../../styles/Animation";

interface Props {
  project: IProjectFields;
  moreProjects: IProjectFields;
}

export const ProjectPage: NextPage<Props> = ({ project: {title, author, published, tags, featureImage, bodyRichText}, moreProjects }) => {
  return (
    <Layout>
      <ProjectHead>
        <motion.h1 variants={fade} className="text-3xl font-bold">{title}</motion.h1>
        <Author author={author} published={published} />
        <Roles roles={tags} />
      </ProjectHead>
      <ProjectBody bodyRichText={bodyRichText}>
        <HeroBanner image={featureImage} />

      </ProjectBody>
    </Layout>
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
  return {
    paths: data?.map(({slug}) => ({params: { project: slug }})),
    fallback: false,
  }
}

export default ProjectPage