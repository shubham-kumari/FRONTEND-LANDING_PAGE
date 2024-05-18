import React, { useState } from 'react';
import img from "../../assets/logo.png"
import { GiHamburgerMenu } from "react-icons/gi";


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="fixed bg-black w-full z-20 top-0 start-0 font-Montserrat">
            <div className="max-w-screen-2xl flex flex-wrap items-center justify-between p-6">
                <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={img} className="h-6 sm:h-8" alt="chaching Logo" />
                </a>
                <div className="flex lg:order-2">
                    <button type="button" className="text-emerald-600 border border-emerald-600 hover:border-emerald-600 font-medium rounded-full text-sm sm:text-xl px-4 py-2 sm:px-10 sm:py-5 text-center">Try it Now</button>
                    <button onClick={toggleNavbar} type="button" className="inline-flex items-center p-2  justify-center text-2xl sm:text-4xl text-gray-500 rounded-lg lg:hidden dark:text-gray-400" > {/*aria-controls="navbar-sticky" aria-expanded={isOpen} */}
                    <GiHamburgerMenu />
                    </button>
                </div>
                
                <div className={`w-full  ${isOpen ? 'block' : 'hidden'} lg:block py-5 px-8 items-center justify-between border-2 border-gray-700 rounded-full lg:w-auto lg:order-1`} id="navbar-sticky">
                    <ul className="flex flex-col justify-center p-1  font-medium rounded-full   lg:flex-row  ">
                        <li>
                            <a href="#" className="text-white py-2 px-6 hover:border hover:border-emerald-600 rounded-full" aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="#" className="text-white py-2 px-6 hover:border hover:border-emerald-600 rounded-full">Overview</a>
                        </li>
                        <li>
                            <a href="#" className="text-white py-2 px-6 hover:border hover:border-emerald-600 rounded-full">Downloads</a>
                        </li>
                        <li>
                            <a href="#" className="text-white py-2 px-6 hover:border hover:border-emerald-600 rounded-full">FAQ</a>
                        </li>
                        <li>
                            <a href="#" className="text-white py-2 px-6 hover:border hover:border-emerald-600 rounded-full">About Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
