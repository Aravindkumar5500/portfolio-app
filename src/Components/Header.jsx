import { Bars3Icon } from '@heroicons/react/24/solid';
import { useState } from 'react';

export default function Header() {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <header className="
            flex justify-between items-center px-5 py-3 
            bg-transparent 
            md:bg-white/5 md:backdrop-blur-sm md:shadow-md md:border-b md:border-white/10
            fixed top-0 left-0 w-full z-50
        ">
            {/* Brand / Logo */}
            <a
                className="font-bold px-2 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-500 bg-clip-text text-transparent text-xl"
                href="/"
            >
                Welcome
            </a>

            {/* Desktop Menu */}
            <nav className="hidden md:block">
                <ul className="flex space-x-6 font-semibold text-white">
                    <li><a href="/" className="hover:text-rose-400">Home</a></li>
                    <li><a href="#about" className="hover:text-rose-400">About</a></li>
                    <li><a href="#project" className="hover:text-rose-400">Project</a></li>
                    <li><a href="#resume" className="hover:text-rose-400">Resume</a></li>
                    <li><a href="#contact" className="hover:text-rose-400">Contact</a></li>
                </ul>
            </nav>

            {/* Hamburger Button */}
            <button
                onClick={() => setToggleMenu(!toggleMenu)}
                className="block md:hidden"
                aria-expanded={toggleMenu}
                aria-controls="mobile-menu"
            >
                <Bars3Icon className="text-white h-7 w-7" />
            </button>

            {/* Mobile Menu */}
            <div
                id="mobile-menu"
                className={`absolute top-full left-0 w-full bg-black/80 text-white md:hidden transition-all duration-500 ease-in-out overflow-hidden ${
                    toggleMenu ? 'max-h-96 py-4' : 'max-h-0 py-0'
                }`}
            >
                <ul className="flex flex-col items-center space-y-4 font-medium">
                    {['Home', 'About', 'Project', 'Resume', 'Contact'].map((item) => (
                        <li key={item}>
                            <a
                                href={item === 'Home' ? '/' : `#${item.toLowerCase()}`}
                                onClick={() => setToggleMenu(false)}
                                className="bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 bg-clip-text text-transparent text-lg"
                            >
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
}
