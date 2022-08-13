import React from 'react'
import Link from 'next/link';

const Nav = ({isFooter}) => {
  return (
    <ul className={`nav-links gap-8 ${ !isFooter ? 'hidden' : 'flex gap-4  order-3 sm:order-1'} sm:flex`}>
      <li className="link">
        <Link scroll={false} href="/about">
          <a>About</a>
        </Link>
      </li>
      <li className="link">
        <Link scroll={false} href="/contact">
          <a>Contact</a>
        </Link>
      </li>
      {isFooter && 
        <li className="link">
        <Link scroll={false} href="/portfolio">
          <a>Portfolio</a>
        </Link>
      </li>
      }
    </ul>
  )
}

export default Nav