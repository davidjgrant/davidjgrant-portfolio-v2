import React from 'react'
import Link from 'next/link'
import Button from '../components/button';

const FeaturedTextBanner = () => {
  return (
    <div className='p-5 bg-gray-200 dark:bg-zinc-900 text-white mx-auto max-w-md'>
      <div className='mx-auto p-6 green-blue-gradient'>
        <h5 className='mb-4 font-bold text-xl'>Recent Insights</h5>
        <p className='mb-6 text-center'>Ultrices in iaculis nunc sed augue lacus viverra vitae congue. Vel orci porta non pulvinar neque laoreet.</p>
        <Button type={'tertiary'} >
          <Link href={'/'}>
            <a className='px-8 py-3'>Read more</a>
          </Link>
        </Button>
      </div>
    </div>
  )
}

export default FeaturedTextBanner