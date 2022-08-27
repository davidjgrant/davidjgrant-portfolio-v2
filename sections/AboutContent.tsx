import React from 'react'
import { MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
// Sections
import ImageWithText from './ImageWithText'
import { motion } from 'framer-motion';
import { titleAnimation } from '../styles/Animation';

const AboutContent = ({ content, featuredBanner }) => {

  const options = {
    renderMark: {
      [MARKS.CODE]: () => <ImageWithText featuredBanner={ featuredBanner } />,
    }
  };


  return (
    <motion.article variants={titleAnimation} initial='hidden' whileInView='show' viewport={{ once: true, amount: 0.7 }}
      className='my-16 md:my-32 px-6 md:px-0 container max-w-4xl mx-auto text-center about-content'>
      {documentToReactComponents(content.json, options)}
    </motion.article>
  )
}

export default AboutContent