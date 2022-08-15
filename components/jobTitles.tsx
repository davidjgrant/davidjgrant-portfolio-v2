import React from 'react'
import { motion } from 'framer-motion'
import { fade, titleAnimation } from '../styles/Animation'

const JobTitles = ({jobTitles}) => {
  return (
    <motion.ul variants={titleAnimation}>
      { jobTitles?.map((title) => {
        return (
          <motion.li
            variants={fade}
            className='text-white'
            key={title}
          >{title}</motion.li>
        )
      })}
    </motion.ul>
  )
}

export default JobTitles