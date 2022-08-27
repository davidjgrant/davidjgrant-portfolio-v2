import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS } from '@contentful/rich-text-types'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'
import { fade, picAnimation, titleAnimation } from '../styles/Animation'
import imageLoader from '../utils/imageHandler'

const renderOptions = (links) => {
  const assetMap = new Map()
  for (const asset of links.assets.block) {
    assetMap.set(asset.sys.id, asset)
  }

  return {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const asset = assetMap.get(node.data.target.sys.id);
        return (
          <motion.div variants={fade} whileInView='show' viewport={{ once: true, amount: 1 }}>
            <Image
              className='object-cover !pb-6'
              loader={imageLoader}
              src={asset.url}
              alt="Author Pic"
              width={900}
              height={500}
            />
          </motion.div>
        );
      },
      [BLOCKS.PARAGRAPH]: (node, children) => <motion.p variants={fade} initial='hidden' whileInView='show' viewport={{ once: true, amount: 1 }}>{children}</motion.p>
    }
  }
}


const ProjectBody = ({children, bodyRichText}) => {

  return (
    <motion.section
      className='project mx-auto container mt-16 sm:mt-24 mb-16'>
      {children}
      <article className='project -mt-2 mx-auto container bg-gray-100 dark:bg-zinc-900'>
        <motion.div
          className='mx-auto max-w-4xl py-16 px-6 lg:px-0'>
          {documentToReactComponents(bodyRichText.json, renderOptions(bodyRichText.links))}
        </motion.div>
      </article>
    </motion.section>
  )
}

export default ProjectBody