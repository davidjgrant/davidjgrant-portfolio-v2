import { motion } from 'framer-motion'
import React from 'react'
import { fade, titleAnimation } from '../styles/Animation'

const ProjectHead = ({children}) => {
  return (
    <motion.header variants={titleAnimation} initial='hidden' whileInView='show' viewport={{ once: true, amount: 0.5 }}
      className='mx-auto container text-center mt-24 sm:mt-32'>
      {children}
    </motion.header>
  )
}

export default ProjectHead