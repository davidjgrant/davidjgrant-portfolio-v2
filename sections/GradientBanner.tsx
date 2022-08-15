import React from 'react'
import { motion } from "framer-motion"
import { fade } from '../styles/Animation'

const GradientBanner = ({children, gradient }) => {

  return (
    <motion.div variants={fade} initial='hidden' whileInView='show' viewport={{ once: true }}
      className={`min-w-screen relative h-fit sm:h-[32rem] p-8 pt-16 mb-32 text-center ${gradient}`}>
      { children }
    </motion.div>
  )
}

export default GradientBanner