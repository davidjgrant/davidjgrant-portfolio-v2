import { motion } from 'framer-motion'
import React from 'react'
import { fade } from '../styles/Animation'

const Roles = ({roles}) => {
  return (
    <motion.div variants={fade} className='mt-4'>
      <ul className='flex items-center justify-center gap-x-4 flex-wrap'>
        <span className='text-lg font-semibold'>Roles: </span>
        {roles.map(role => {return <li key={role}>{role}</li>})}
      </ul>
    </motion.div>
  )
}

export default Roles