import React from 'react';
import { FaShoppingCart } from 'react-icons/fa'
const Navbar = () => {

    const menuItems =
        <>
            <li> <a>Home</a></li>
            <li> <a>Blog</a></li>
            <li> <a>About us</a></li>
            <select className=' bg-base-200 border-none w-16 ml-5 md:ml-0 ' name="" id="">
                <option value="">EN</option>
                <option value="">BN</option>
            </select>

        </>

    return (
        <div className='md:px-10 bg-base-200 border-b-2'>
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <a className="text-lime-600 normal-case text-2xl font-bold" ><span style={{ fontFamily: 'merienda' }}>Food</span>Time</a>
                </div>
                <div className="navbar-center font-medium  hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {menuItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className=" btn bg-lime-600 border-none btn-sm h-10  rounded-3xl w-24 text-white">Login</a>
                    <div className=' relative'>
                        <FaShoppingCart className='bg-lime-600  text-white text-xl p-1 h-10 w-10 ml-3 rounded-full '></FaShoppingCart>
                        <p className=' absolute w-4 -top-3 p-1 text-sm right-0 bg-orange-600 text-white rounded-full '>2</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;