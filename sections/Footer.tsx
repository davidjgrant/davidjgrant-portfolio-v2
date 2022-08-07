import React from 'react'
import Nav from '../components/nav'

const Footer = () => {
  return (
    <>
      <div className='bg-gradient-to-r from-amber-500 to-pink-600 h-4'></div>
      <footer className='bg-gray-200 text-gray-900 dark:bg-zinc-900 dark:text-gray-100'>
        <div className="container flex flex-col h-64 items-center mx-auto relative overflow-hidden">
          <div className='flex justify-between items-center mb-10'>
            <Nav />
            <div className='flex flex-col justify-center items-center'>
              <div className=""></div>
              <p>Bristol, UK</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h5>Follow me on social media</h5>
              <ul className='flex gap-4'>
                <li>LinkedIn</li>
                <li>Github</li>
                <li>Spotify</li>
                <li>Dribble</li>
                <li>Medium</li>
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