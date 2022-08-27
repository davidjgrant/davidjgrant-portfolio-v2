import React from 'react'
import Link from 'next/link'
import Button from '../components/button';

const FeaturedTextBanner = ({title, text}) => {
  return (
    <section className='p-5 bg-gray-200 dark:bg-zinc-900 text-white mx-auto max-w-md'>
      <div className='mx-auto p-6 green-blue-gradient'>
        <h5 className='mb-4 font-bold text-xl'>{title}</h5>
        <p className='mb-6 text-center'>{text}</p>
        <Button type={'tertiary'} >
          <Link href={'/'}>
            <a className='px-8 py-3'>Read more</a>
          </Link>
        </Button>
      </div>
    </section>
  )
}

export default FeaturedTextBanner