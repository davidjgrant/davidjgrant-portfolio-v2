import React from 'react'
import Link from 'next/link';

const Nav = () => {
  return (
    <ul className="nav-links gap-8 hidden sm:flex">
      <li className="link">
        <Link href="/about">
          <a>About</a>
        </Link>
      </li>
      <li className="link">
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </li>
    </ul>
  )
}

export default Nav