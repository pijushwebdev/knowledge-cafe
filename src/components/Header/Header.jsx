import React from 'react';
import './Header.css';
import profile from '../../assets/profile.jpg'


const Header = () => {
    return (
        <nav className='flex justify-between container mx-auto py-3 sticky top-0'>
            <div>
                <h1 className='text-4xl font-bold pl-5'>Knowledge Cafe</h1>
            </div>
            <div className='flex items-center mr-5'>
                <img className='w-8 h-8 rounded-full' src={profile} alt="" />
            </div>
        </nav>
    );
};

export default Header;