import Link from 'next/link'
import React from 'react'

const HireMe = ({jobHunting}) => {
  return (
    <section className='mx-auto text-center my-32 text-4xl font-bold tracking-wider text-gray-300 dark:text-zinc-900'>
      <Link href={'/contact'}>
        <a>
        <h6 className='relative quotes flex flex-row justify-center max-w-fit mx-auto'>
          { jobHunting ? 'Hire Me!' : 'Working Hard!' }
        </h6>
        </a>
      </Link>
    </section>
  )
}

export default HireMe