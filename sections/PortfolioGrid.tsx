import { motion } from 'framer-motion';
import React, { useState } from 'react'
import ProjectCard from '../components/projectCard'
import { fade, picAnimation } from '../styles/Animation';

export interface IPortfolioGrid {
  onMouseEvent;
}

const PortfolioGrid = ({projects}) => {

  const [gradient, setGradient ] = useState('purple-purple-gradient')

  return (
    <motion.section
      variants={fade}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.6 }}
      className="relative flex justify-center items-end h-[140rem] sm:h-[40rem] mb-48"
    >
      <motion.ul
        variants={picAnimation}
        className="absolute sm:container sm:max-w-[1280px] grid grid-cols-1 sm:grid-cols-2 gap-8 mx-4 content-center sm:mx-auto z-10 perspective-card sm:px-4"
      >
        {projects.map(({ slug, title, shortDescription, image }) => (
          <ProjectCard
            key={slug}
            title={title}
            description={shortDescription}
            image={image.url}
            slug={slug}
          />
        ))}
      </motion.ul>
      <div
        className={`absolute -bottom-24 h-[84rem] sm:h-[40rem] w-full z-0 ${gradient}`}
      ></div>
    </motion.section>
  );
}

export default PortfolioGrid