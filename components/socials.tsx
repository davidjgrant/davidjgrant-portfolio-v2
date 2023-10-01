import Link from 'next/link'
import React from 'react'
import { FaGithub, FaDribbble, FaSpotify, FaLinkedinIn } from 'react-icons/fa'
import { SiMedium } from 'react-icons/si'

const Socials = () => {
  return (
    <ul className='flex gap-4 my-4'>
      <li className='cursor-pointer'><Link href="https://www.linkedin.com/in/davidjohngrant/"><FaLinkedinIn size='1.5rem' /></Link></li>
      <li className='cursor-pointer'><Link href="https://github.com/davidjgrant/"><FaGithub size='1.5rem' /></Link></li>
      <li className='cursor-pointer'><Link href="https://open.spotify.com/user/djgrant_/"><FaSpotify size='1.5rem' /></Link></li>
      <li className='cursor-pointer'><Link href="https://dribbble.com/davidjohngrant/"><FaDribbble size='1.5rem' /></Link></li>
      <li className='cursor-pointer'><Link href="https://medium.com/@DavidJohnGrant"><SiMedium size='1.5rem' /></Link></li>
    </ul>
  )
}

export default Socials