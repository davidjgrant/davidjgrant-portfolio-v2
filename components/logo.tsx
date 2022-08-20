import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <div className='col-start-2 justify-self-center md:justify-self-start md:col-start-1 md:col-span-2 self-center'>
      <Link href='/'>
        <a>Logo</a>
      </Link>
    </div>
  )
}

export default Logo