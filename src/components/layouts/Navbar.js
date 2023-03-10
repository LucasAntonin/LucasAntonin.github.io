import AudioPlayer from "../AudioPlayer";

function Navbar() {
    return (
        <>
            <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                <nav className="relative px-2 sm:px-4 py-2.5 bg-dark-fox">
                    <div className="container flex flex-wrap items-center justify-between mx-auto">
                        <a href="#" className="flex items-center">
                            <img src="images/Foxi_Logo.webp" className="h-6 w-full mr-3 sm:h-10 selector-image" alt="Foxi Logo" />
                        </a>
                        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center mt-1 sm:mt-0 p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-cyan-600" aria-controls="navbar-default" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                        </button>
                        <div className="hidden w-full md:block md:w-auto mb-2 sm:mb-0" id="navbar-default">
                            <ul className="flex flex-col p-4 mt-4 border border-2 border-navbar-neon rounded-lg bg-dark-fox md:flex-row md:space-x-8 md:mt-0 md:text-lg md:font-medium md:border-0">
                                <li>
                                    <a href="#about" className="block py-2 pl-3 pr-4 text-white rounded md:hover:bg-transparent md:hover:text-blue-700 md:p-0">About</a>
                                </li>
                                <li>
                                    <a href="#experience" className="block py-2 pl-3 pr-4 text-white rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Experience</a>
                                </li>
                                <li>
                                    <a href="https://github.com/LucasAntonin" target="_blank" rel="noreferrer" className="block py-2 pl-3 pr-4 text-white rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">GitHub</a>
                                </li>
                                <li>
                                    <a href={'mailto:lucasantonin084@gmail.com?subject=Subject&body=Body%20goes%20here'} className="cursor-pointer block py-2 pl-3 pr-4 text-white rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Contact</a>
                                </li>
                            </ul>
                        </div>
                        <AudioPlayer />
                    </div>
                </nav>
            </div>
        </>
    );
}

export default Navbar;