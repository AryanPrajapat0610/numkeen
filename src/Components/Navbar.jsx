import React, { useState } from 'react';
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Navbar = () => {
  // State to toggle the mobile menu
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);  // Toggle mobile menu
  };

  return (
    <div className='mt-1'>
      <nav className='p-2 pr-7 flex flex-row justify-between h-[60px] items-center max-w-[1126px] mx-auto'>
        
        {/* Logo */}
        <div className='flex items-center gap-4 font-semibold'>
          <img src='https://image1.jdomni.in/storeLogo/12052022/5F/E7/54/8662A4EEB7A5806015F6715A68_1652354952903.png?output-format=webp'
            className='w-[160px] h-[50px]' alt='logo' />
        </div>

        {/* Routes - Hidden on small screens, visible on larger screens */}
        <div className='hidden md:flex'>
          <ul className='flex flex-row items-center justify-center gap-4 text-[14px]'>
            <Link to='/' ><li className='hover:text-yellow-500'>HOME</li></Link>
            <Link to='/namkeen' ><li className='hover:text-yellow-500'>NAMKEEN</li></Link>
            <Link to='/product' ><li className='hover:text-yellow-500'>PRODUCTS</li></Link>
            <Link to='/about' ><li className='hover:text-yellow-500'>ABOUT US</li></Link>
            <Link to='/contact' ><li className='hover:text-yellow-500'>CONTACT US</li></Link>
          </ul>
        </div>

        {/* Hamburger Menu - Visible on small screens */}
        <div className='md:hidden '>
          <button onClick={toggleMenu} className='focus:outline-none'>
            <div className='w-6 h-1 bg-gray-600 mb-1'></div>
            <div className='w-6 h-1 bg-gray-600 mb-1'></div>
            <div className='w-6 h-1 bg-gray-600'></div>
          </button>
        </div>

        {/* Mobile Menu - Slide out when clicked */}
        <div className={`fixed top-0 left-0 w-[200px] h-[500px] bg-white border-r z-10 transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out md:hidden`}>
          <ul className='flex flex-col items-center mt-10 space-y-6'>
            <Link to='/' onClick={toggleMenu}><li className='hover:text-yellow-500'>HOME</li></Link>
            <Link to='/namkeen' onClick={toggleMenu}><li className='hover:text-yellow-500'>NAMKEEN</li></Link>
            <Link to='/product' onClick={toggleMenu}><li className='hover:text-yellow-500'>PRODUCTS</li></Link>
            <Link to='/about' onClick={toggleMenu}><li className='hover:text-yellow-500'>ABOUT US</li></Link>
            <Link to='/contact' onClick={toggleMenu}><li className='hover:text-yellow-500'>CONTACT US</li></Link>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
