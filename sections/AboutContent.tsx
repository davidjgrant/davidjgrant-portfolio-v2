import React from 'react'
import { MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
// Sections
import ImageWithText from './ImageWithText'


const options = {
  renderMark: {
    [MARKS.CODE]: () => <ImageWithText />,
  }
};

const AboutContent = ({content}) => {


  return (
    <article className='my-24 md:my-32 container max-w-4xl mx-auto text-center about-content'>
      {documentToReactComponents(content.json, options)}
    </article>
  )
}

export default AboutContent