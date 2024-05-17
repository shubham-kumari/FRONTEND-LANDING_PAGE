import React, { useState } from 'react';
import img from "../../assets/logo.png"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="fixed bg-black w-full z-20 top-0 start-0  font-Montserrat ">
            <div className="max-w-screen-2xl flex flex-wrap items-center justify-between p-6">
                <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={img} className="h-6 sm:h-8" alt="chaching Logo" />
                </a>
                <div className="flex md:order-2  md:space-x-0 rtl:space-x-reverse">
                    <button type="button" className="text-emerald-600  border border-emerald-600  hover:border-emerald-600 font-medium rounded-full text-sm px-4 py-2 sm:px-10 sm:py-5 text-center ">Try it Now</button>
                    <button onClick={toggleNavbar} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden   dark:text-gray-400 " aria-controls="navbar-sticky" aria-expanded={isOpen}>
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
                
                <div className={`w-full lg:flex md:hidden ${isOpen ? 'block' : 'hidden'} sm:block py-5 px-8 items-center justify-between border-2 border-gray-700 rounded-full md:w-auto md:order-1`} id="navbar-sticky">
                    <ul className="flex flex-col p-4 md:p-0 mt-4  font-medium rounded-full  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
                        <li>
                            <a href="#" className="sticky text-white py-2 px-6 hover:border hover:border-emerald-600 rounded-full" aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="#" className="sticky text-white py-2 px-6 hover:border hover:border-emerald-600 rounded-full">Overview</a>
                        </li>
                        <li>
                            <a href="#" className="sticky text-white py-2 px-6 hover:border hover:border-emerald-600 rounded-full">Downloads</a>
                        </li>
                        <li>
                            <a href="#" className="sticky text-white py-2 px-6 hover:border hover:border-emerald-600 rounded-full">FAQ</a>
                        </li>
                        <li>
                            <a href="#" className="sticky text-white py-2 px-6 hover:border hover:border-emerald-600 rounded-full">About Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;