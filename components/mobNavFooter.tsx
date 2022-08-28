import Link from 'next/link'
import React from 'react'
import Button from './button'

const MobNavFooter = () => {
  return (
    <footer className='text-center mx-auto w-full self-end mb-6'>
      <h4 className='text-xl font-semibold text-transparent bg-clip-text amber-pink-gradient mb-4'>Get down to business</h4>
      <p className='text-zinc-900 dark:text-gray-100'>Want a new professional website for your brand? Contact me and lets work together!</p>
      <div className='flex justify-center gap-4 mt-4'>
        <Button type={'secondary'} >
          <Link href={'mailto:hello@davidjgrant.com'}>
            <a className='px-8 py-3'>Email</a>
          </Link>
        </Button>
        <Button type={'primary'}>
          <Link href={'https://assets.ctfassets.net/h50elbgx77ux/1ge9w4HqcgAn8HOkcJ8FvO/3e847e02c5e90213c573ab01fcbb569e/CV_Bristol_2022.pdf'}>
            <a className='px-8 py-3'>CV</a>
          </Link>
        </Button>
      </div>
    </footer>
  )
}

export default MobNavFooter