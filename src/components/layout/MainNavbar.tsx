'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function MainNavbar(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className='bg-[#E0ECE4]'>
            <div className='container mx-auto px-4 py-4'>
                <div className='flex justify-between items-center'>
                    {/* Logo Section - Responsive sizing */}
                    <div className='flex items-center space-x-3 md:space-x-4 lg:space-x-6'>
                        <Image
                            src="/Logo.jpg"
                            alt="Logo"
                            width={50}
                            height={50}
                            className='rounded-4xl w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-[70px] lg:h-[70px]' 
                        />
                        <h1 className='font-medium text-lg sm:text-xl md:text-2xl lg:text-3xl'>
                            Heal-O-Mantra
                        </h1>
                    </div>

                    {/* Mobile/Tablet Menu Button - Show until large screens */}
                    <div className="lg:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-gray-600 hover:text-gray-800 cursor-pointer focus:outline-none p-2"
                        >
                            {isMenuOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </button>
                    </div>

                    {/* Desktop Navigation - Only show on large screens */}
                    <nav className='hidden lg:flex items-center space-x-8 xl:space-x-12 text-lg xl:text-xl font-medium'>
                        <Link href="/classes" className='hover:text-gray-600 transition-colors'>
                            Classes
                        </Link>
                        <Link href="/about" className='hover:text-gray-600 transition-colors'>
                            About
                        </Link>
                        <Link href="/studio" className='hover:text-gray-600 transition-colors'>
                            Studio
                        </Link>
                        <Link href="/contact" className='hover:text-gray-600 transition-colors'>
                            Contact Us
                        </Link>
                        
                        {/* Desktop Auth Section */}
                        <div className='flex items-center space-x-6 ml-6'>
                            <Link href="/login" className='hover:text-gray-600 transition-colors'>
                                Login
                            </Link>
                            <Link 
                                href="/book-demo"
                                className='bg-[#cf7d77] px-4 py-2 rounded-md hover:bg-[#b86b65] transition-colors text-white font-semibold whitespace-nowrap'
                            >
                                Book Free Demo
                            </Link>
                        </div>
                    </nav>
                </div>

                {/* Mobile/Tablet Dropdown Menu */}
                {isMenuOpen && (
                    <div className='lg:hidden'>
                        <nav className='bg-white rounded-lg shadow-lg px-6 py-4 mt-4 border border-gray-100'>
                            <div className='flex flex-col space-y-4'>
                                {/* Navigation Links */}
                                <div className='flex flex-col space-y-3 text-base md:text-lg'>
                                    <Link 
                                        href="/classes" 
                                        className='hover:text-gray-600 transition-colors py-2 border-b border-gray-100'
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Classes
                                    </Link>
                                    <Link 
                                        href="/about" 
                                        className='hover:text-gray-600 transition-colors py-2 border-b border-gray-100'
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        About
                                    </Link>
                                    <Link 
                                        href="/studio" 
                                        className='hover:text-gray-600 transition-colors py-2 border-b border-gray-100'
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Studio
                                    </Link>
                                    <Link 
                                        href="/contact" 
                                        className='hover:text-gray-600 transition-colors py-2 border-b border-gray-100'
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Contact Us
                                    </Link>
                                </div>
                                
                                {/* Auth Section */}
                                <div className='flex flex-col  space-y-3  border-t border-gray-200'>
                                    <Link 
                                        href="/login" 
                                        className='py-2 hover:text-gray-600 transition-colors font-medium'
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Login
                                    </Link>
                                    <Link 
                                        href="/book-demo"
                                        className='bg-[#cf7d77] text-center py-3 px-4 rounded-md hover:bg-[#b86b65] transition-colors text-white font-semibold'
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Book Free Demo
                                    </Link>
                                </div>
                            </div>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    )
}