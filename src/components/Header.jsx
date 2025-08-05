import React from 'react';
import { CiCloud } from "react-icons/ci";
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                <div className="flex items-center space-x-3">
                    <CiCloud className="text-3xl text-[#0EA5E9]" />
                    <h1 className="text-2xl font-semibold text-[#0EA5E9]">Weather App</h1>
                </div>
                <ul className="flex space-x-6">
                    <li>
                        <Link to="/" className="text-[#0EA5E9] hover:text-blue-600">Home</Link>
                    </li>
                    <li>
                        <Link to="/forecast" className="text-[#0EA5E9] hover:text-blue-600">Forecast</Link>
                    </li>
                    <li>
                        <Link to="/settings" className="text-[#0EA5E9] hover:text-blue-600">Settings</Link>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;
