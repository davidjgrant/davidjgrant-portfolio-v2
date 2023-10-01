import React from 'react';
import { GetStaticProps } from 'next';
import { getAllProjectsForHome } from '../api';
import { IProjectFields } from '../../types';
import Layout from '../layout';
import { motion } from 'framer-motion';
import { titleAnimation } from '../../styles/Animation';
import GradientBanner from '../../sections/GradientBanner';
import PortfolioGrid from '../../sections/PortfolioGrid';

interface Props {
  projects: IProjectFields[];
}

const Portfolio = ({ projects }) => {
  return (
    <Layout>
      <GradientBanner gradient={'amber-pink-gradient'}>
        <motion.h1
          variants={titleAnimation}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.8 }}
          className="text-2xl sm:text-3xl font-semibold tracking-wide capitalize p-3 text-white"
        >
          Portfolio
        </motion.h1>
      </GradientBanner>
      <PortfolioGrid projects={projects} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const projects = (await getAllProjectsForHome()) ?? [];

  return {
    props: { projects },
  };
};

export default Portfolio;
