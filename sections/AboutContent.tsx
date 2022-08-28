import React from 'react'
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
// Sections
import ImageWithText from './ImageWithText'
import { motion } from 'framer-motion';
import { fade, titleAnimation } from '../styles/Animation';

const AboutContent = ({ content, featuredBanner }) => {

  const options = {
    renderMark: {
      [MARKS.CODE]: () => <ImageWithText featuredBanner={ featuredBanner } />,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <motion.p variants={fade} initial='hidden' whileInView='show' viewport={{ once: true, amount: 1 }}>{children}</motion.p>,
    }
  };


  return (
    <motion.article variants={titleAnimation}
      className='my-16 md:my-32 px-6 md:px-0 container max-w-4xl mx-auto text-center about-content'>
      {documentToReactComponents(content.json, options)}
    </motion.article>
  )
}

export default AboutContent