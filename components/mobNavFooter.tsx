import Link from 'next/link'
import React from 'react'
import Button from './button'

const MobNavFooter = () => {
  return (
    <footer className='text-center mx-auto w-full self-end mb-4'>
      <h4 className='text-xl font-semibold text-transparent bg-clip-text amber-pink-gradient mb-4'>Get down to business</h4>
      <p className='text-zinc-900 dark:text-gray-100'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, omnis?</p>
      <div className='flex justify-center gap-4 mt-6'>
        <Button type={'secondary'} >
          <Link href={'mailto:hello@davidjgrant.com'}>
            <a className='px-8 py-3'>Email</a>
          </Link>
        </Button>
        <Button type={'primary'}>
          <Link href={''}>
            <a className='px-8 py-3'>CV</a>
          </Link>
        </Button>
      </div>
    </footer>
  )
}

export default MobNavFooter