import React from 'react'
import { MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Link from 'next/link';
import Button from '../components/button';

const Bold = ({ children }) => <span className="font-bold text-orange-500">{ children }</span>;

const options = {
  renderMark: {
    [MARKS.BOLD]: text => <Bold>{ text }</Bold>,
  },
  renderText: text => text.replace('!', '?')
};

const IntroSplit = ({ text: { introPast, introFuture } }) => {
  return (
    <div className='flex flex-col sm:flex-row px-6 sm:px-0 sm:justify-between gap-8 sm:gap-32 sm:mb-32'>
      <div>
        <h4 className='font-medium mb-4'>How I got here</h4>
        {documentToReactComponents(introPast.json, options)}
      </div>
      <div>
        <h4 className='font-medium mb-4'>How I got here</h4>
        {documentToReactComponents(introFuture.json)}
        <div className='flex gap-4 my-6'>
          <Button style={'secondary'} >
            <Link href={'mailto:hello@davidjgrant.com'}>
              <a>Email</a>
            </Link>
          </Button>
          <Button style={'primary'}>
            <Link href={''}>
              <a>CV</a>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default IntroSplit