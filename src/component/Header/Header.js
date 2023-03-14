import React from 'react';
import Link from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <nav className='bg-red-400 p-6 text-white font-bold flex justify-center'>
            <Link className='mr-6 hover:text-black' to='/home'>HOME</Link>
            <Link className='mr-6 hover:text-black' to='/review'>REVIEWS</Link>
            <Link className='mr-6 hover:text-black' to='/dashboard'>DASHBOARD</Link>
            <Link className='mr-6 hover:text-black' to='/blog'>BLOGS</Link>
            <Link className='mr-4 hover:text-black' to='/about'>ABOUT</Link>
        </nav>
    );
};

export default Header;