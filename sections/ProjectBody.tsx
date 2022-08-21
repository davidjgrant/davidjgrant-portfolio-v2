import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS } from '@contentful/rich-text-types'
import Image from 'next/image'
import React from 'react'
import author from '../components/author'
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
          <Image
            className='object-cover !pb-6'
            loader={imageLoader}
            src={asset.url}
            alt="Author Pic"
            width={900}
            height={500}
          />
        );
      }
    }
  }
}


const ProjectBody = ({children, bodyRichText}) => {

  return (
    <article className='project mx-auto container mt-16 sm:mt-24 mb-16 bg-gray-100 dark:bg-zinc-900'>
      {children}
      <div className='mx-auto max-w-4xl py-16 px-6 lg:px-0'>
        {documentToReactComponents(bodyRichText.json, renderOptions(bodyRichText.links))}
      </div>
    </article>
  )
}

export default ProjectBody