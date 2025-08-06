import React, { useState } from 'react';
import { CiCloud } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { FiSun } from "react-icons/fi";
import { FiMoon } from "react-icons/fi";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const { isDarkMode, toggleTheme } = useTheme();

    const headerClasses = `shadow-md sticky top-0 z-50 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
        }`;

    const navLinkClasses = `${isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-[#0EA5E9] hover:text-blue-600'
        } transition duration-300 hover:underline hover:scale-105`;

    return (
        <header className={headerClasses}>
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center space-x-3">
                    <CiCloud className={`text-3xl ${isDarkMode ? 'text-blue-400' : 'text-[#0EA5E9]'}`} />
                    <h1 className={`text-2xl font-semibold ${isDarkMode ? 'text-blue-400' : 'text-[#0EA5E9]'}`}>
                        Weather App
                    </h1>
                </div>

                <ul className="hidden md:flex space-x-6 items-center">
                    <li>
                        <Link to="/" className={navLinkClasses}>Home</Link>
                    </li>
                    <li>
                        <Link to="/forecast" className={navLinkClasses}>Forecast</Link>
                    </li>
                    <li>
                        <Link to="/settings" className={navLinkClasses}>Settings</Link>
                    </li>
                </ul>

                <div className="flex items-center">
                    <button
                        onClick={toggleTheme}
                        className={`ml-4 p-2 rounded-md border transition duration-300 
        ${isDarkMode
                                ? 'border-blue-500 text-blue-400 hover:bg-blue-600/10'
                                : 'border-[#0EA5E9] text-[#0EA5E9] hover:bg-blue-100'
                            }`}
                        title="Toggle theme"
                    >
                        {isDarkMode ? <FiSun /> : <FiMoon />
                        }
                    </button>


                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden ml-4 text-2xl transition duration-300 hover:scale-110"
                    >
                        {menuOpen ? (
                            <HiX className={isDarkMode ? 'text-blue-400' : 'text-[#0EA5E9]'} />
                        ) : (
                            <HiMenu className={isDarkMode ? 'text-blue-400' : 'text-[#0EA5E9]'} />
                        )}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {menuOpen && (
                    <motion.ul
                        key="mobile-nav"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className={`md:hidden px-4 pb-4 space-y-2 ${isDarkMode ? 'bg-gray-800' : 'bg-white'
                            }`}
                    >
                        <li>
                            <Link to="/" className={navLinkClasses} onClick={() => setMenuOpen(false)}>Home</Link>
                        </li>
                        <li>
                            <Link to="/forecast" className={navLinkClasses} onClick={() => setMenuOpen(false)}>Forecast</Link>
                        </li>
                        <li>
                            <Link to="/settings" className={navLinkClasses} onClick={() => setMenuOpen(false)}>Settings</Link>
                        </li>
                    </motion.ul>
                )}
            </AnimatePresence>
        </header>
    );
}

export default Header;