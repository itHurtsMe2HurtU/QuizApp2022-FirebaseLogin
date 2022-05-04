import React from 'react';
import { NavLink } from 'react-router-dom';
import ProfileImage from '../assets/profile_image_default.webp';
import '../styles/Header.css';
// import LogoAK from '../assets/logoAK-01.jpg';
// import LogoAK1 from '../assets/logoAK-02.png';



const Header = () => {
    return (
        <nav className='w-full h-8 flex flex-row font-heading text-white text-xs items-center justify-evenly'
            style={{ background: 'linear-gradient(to right, #140e38, #194089)' }}
        >
            <div className=''>
                <NavLink to='/' className='font-black'
                    style={{ fontFamily: 'Water Brush, cursive' }}
                >
                    Quiz App
                    {/* <img className='block object-cover rounded-full h-7 w-7' src={LogoAK1} /> */}
                </NavLink>
            </div>

            <div className=''>
                <NavLink to='/'>
                    <h3 className='half-border-bottom'>Welcome [User]!</h3>
                </NavLink>
            </div>


            <div className='p-2 flex flex-row items-center space-x-2'>

                <NavLink to='/'>
                    <img className='block rounded-full h-4 w-4' src={ProfileImage} />
                </NavLink>

                <NavLink to='/'>
                    <button type='button' className='rounded-full half-border-bottom'>
                        Log In
                    </button>
                </NavLink>
            </div>
        </nav>
    )
}

export default Header;