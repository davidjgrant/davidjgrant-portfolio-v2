import React from 'react'
import { MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Link from 'next/link';
import Button from '../components/button';
import { motion } from 'framer-motion';
import { fade } from '../styles/Animation';

const Bold = ({ children }) => <span className="font-bold text-orange-500">{ children }</span>;

const options = {
  renderMark: {
    [MARKS.BOLD]: text => <Bold>{ text }</Bold>,
  },
  renderText: text => text.replace('!', '?')
};

const IntroSplit = ({ text: { introPast, introFuture } }) => {
  return (
    <motion.div variants={fade} initial='hidden' whileInView='show' viewport={{ once: true, amount: 0.5 }}
      className='relative h-[360px] flex justify-center items-center'>
      <div className='flex flex-col sm:flex-row px-4 sm:px-16 sm:justify-between gap-8 sm:gap-32 absolute z-10'>
        <div>
          <h4 className='font-bold text-lg mb-4'>How I got here</h4>
          {documentToReactComponents(introPast.json, options)}
        </div>
        <div>
          <h4 className='font-bold text-lg mb-4'>Where i'm going next</h4>
          {documentToReactComponents(introFuture.json)}
          <div className='flex gap-4 my-6'>
            <Button style={'secondary'} >
              <Link href={'mailto:hello@davidjgrant.com'}>
                <a className='px-8 py-3'>Email</a>
              </Link>
            </Button>
            <Button style={'primary'}>
              <Link href={''}>
                <a className='px-8 py-3'>CV</a>
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <div className='absolute select-none z-0 flex text-center justify-center items-center w-full blur-sm opacity-25 font-bold text-gray-300 dark:text-neutral-900 text-9xl mb-32 sm:text-[18rem]'>3+ years</div>
    </motion.div>
  )
}

export default IntroSplit