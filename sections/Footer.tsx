import Link from 'next/link'
import React from 'react'
import Clock from '../components/clock'
import Nav from '../components/nav'

const Footer = () => {
  return (
    <>
      <div className='bg-gradient-to-r from-amber-500 to-pink-600 h-4'></div>
      <footer className='bg-gray-200 text-zinc-900 dark:bg-black dark:text-gray-100'>
        <div className="container flex flex-col h-64 justify-center items-center mx-auto relative overflow-hidden">
          <div className='flex justify-around w-full items-center mb-10 font-medium'>
            <Nav isFooter={true} />
            <div className='flex flex-col justify-center items-center'>
              <Clock />
              <p>Bristol, UK</p>
            </div>
            <div className="flex flex-col justify-center items-start">
              <h5 className='mb-4'>Follow me on social media</h5>
              <ul className='flex gap-4'>
                <li><Link href="https://www.linkedin.com/in/davidjohngrant/">LinkedIn</Link></li>
                <li><Link href="https://github.com/davidjohngrant/">Github</Link></li>
                <li><Link href="https://open.spotify.com/user/djgrant_/">Spotify</Link></li>
                <li><Link href="https://dribbble.com/davidjohngrant/">Dribble</Link></li>
                <li><Link href="https://medium.com/@DavidJohnGrant">Medium</Link></li>
              </ul>
            </div>
          </div>
          <span className='absolute -bottom-2 font-bold text-gray-300 dark:text-zinc-800 text-8xl tracking-wider'>©2022 DAVIDJGRANT</span>
        </div>
      </footer>
    </>
  )
}

export default Footer