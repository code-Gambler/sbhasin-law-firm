import React from 'react'
import { navigation } from  '../data';
import { Link } from 'react-scroll';

const Nav = () => {
  return (
    <div className='hidden lg:flex'>
      <ul className='lg:flex space-x-6 font-body font-semibold text-sm text-primary'>
        {navigation.map((item, index) => (
          <li key={index}>
            <Link to={item.href} smooth={true} activeClass='active' spy={true} offset={-120} className='hover:text-accent-hover transition-all duration-300 cursor-pointer'>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Nav