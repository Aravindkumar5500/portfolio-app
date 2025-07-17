// eslint-disable jsx-a11y/anchor-is-valid 
import { Bars3Icon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import './Header.css'; // Assuming you have a CSS file for styles

export default function Header() {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <>
            <header className="head flex justify-between px-5 py-2">
                <a className="welcome font-bold px-2 text-rose-300" href="/">Welcome</a>
                <nav className="hidden md:block">
                    <ul className=" flex text-white">
                        <li><a href="/">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#project">Project</a></li>
                        <li><a href="#resume">Resume</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
                  {/* Mobile Menu Toggle   */}
             <div className="MenuToggle">
                {toggleMenu && (
                    <nav id="mobile-menu" className="mobile block md:hidden">
                        <ul className="mobile  flex flex-col text-white mobile-nav">
                            <li><a href="/">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#project">Project</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </nav>
                    
                )}
                </div>
                <button
                    onClick={() => setToggleMenu(!toggleMenu)}
                    className="block md:hidden"
                    aria-expanded={toggleMenu}
                    aria-controls="mobile-menu"
                >
                    <Bars3Icon className="text-white h-5" />
                </button>
            </header>
        </>
    );
}