import React from 'react'
import { navigation } from '../data';
import { Link } from 'react-scroll';

const Nav = () => {
  return (
    <ul className='hidden lg:flex space-x-12 font-body font-bold text-xl tracking-wide text-primary'>
      {navigation.map((item, index) => (
        <li key={index}>
          <Link
            to={item.href}
            smooth={true}
            spy={true}
            className='px-3 py-2 hover:text-accent-hover transition-all duration-300 cursor-pointer'
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  )
}


export default Nav