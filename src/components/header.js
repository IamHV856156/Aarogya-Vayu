import React from 'react';
const Header = ({darkmode, toggledarkmode}) =>{
    return (
        <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-4 shadow-lg rounded-b-lg dark:from-gray-800 dark:to-gray-900 dark:shadow-xl transition-all duration-300">
            <div className="container mx-auto flex items-center justify-between">
                {/* title */}
                <h1 className="text-3xl font-bold font-inter">Aarogya Vayu</h1>
                <nav className="flex item-center space-x-4">
                    <ul className="flex space-x-4">
                        <li><a className="hover:text-blue-200 transition-colors duration-200 dark:hover:text-gray-400" href="#">Home</a></li>
                        <li><a className="hover:text-blue-200 transition-colors duration-200 dark:hover:text-gray-400" href="#">About</a></li>
                        <li><a className="hover:text-blue-200 transition-colors duration-200 dark:hover:text-gray-400" href="#">Contact</a></li>
                        <li><a className="hover:text-blue-200 transition-colors duration-200 dark:hover:text-gray-400" href="#">Follow</a></li>
                    </ul>
                    {/* day/night toggle button */}
                    <button onClick={toggledarkmode} className="px-3 py-1 rounded-full bg-blue-700 hover:bg-blue-900 text-lg transition-colors duration-200 ml-4 flex items-center justify-center dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-200">
                        {darkmode ? '🌙' : '☀️'}
                    </button>
                </nav>
            </div>
        </header>
    );
};
export default Header;