import Link from 'next/link'
import React from 'react'

const Socials = () => {
  return (
    <ul className='flex gap-4 my-4'>
      <li><Link href="https://www.linkedin.com/in/davidjohngrant/">LinkedIn</Link></li>
      <li><Link href="https://github.com/davidjohngrant/">Github</Link></li>
      <li><Link href="https://open.spotify.com/user/djgrant_/">Spotify</Link></li>
      <li><Link href="https://dribbble.com/davidjohngrant/">Dribble</Link></li>
      <li><Link href="https://medium.com/@DavidJohnGrant">Medium</Link></li>
    </ul>
  )
}

export default Socials