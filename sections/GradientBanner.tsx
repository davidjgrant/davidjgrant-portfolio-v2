import React from 'react'
import { motion } from "framer-motion"
import { fade } from '../styles/Animation'

const GradientBanner = ({children}) => {

  return (
    <motion.div variants={fade} initial='hidden' whileInView='show' viewport={{ once: true }}
      className='min-w-screen relative h-[22rem] sm:h-[32rem] p-8 pt-16 text-center bg-gradient-to-tr from-amber-500 to-pink-600 mb-32'>
      { children }
    </motion.div>
  )
}

export default GradientBanner