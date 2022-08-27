import React from 'react'
import { motion } from "framer-motion"
import { fade } from '../styles/Animation'

const GradientBanner = ({children, gradient }) => {

  return (
    <motion.section variants={fade} initial='hidden' whileInView='show' viewport={{ once: true }}
      className={`min-w-screen relative min-h-[22rem] md:h-[32rem] py-16 sm:pt-16 mb-32 text-center ${gradient}`}>
      { children }
    </motion.section>
  )
}

export default GradientBanner