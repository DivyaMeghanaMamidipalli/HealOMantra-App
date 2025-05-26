import Image from 'next/image';
import Link from 'next/link';
export default function MainNavbar(){
    return(
        <header className="bg-[#E0ECE4]">
            <div className="container mx-auto px-20 py-4">
                <div className="flex justify-between items-center">
                    {/* Logo and Title Section */}
                    <div className="flex items-center space-x-6">
                        <div className="logo-container">
                            <Image
                                src="/Logo.jpg"
                                alt="HealOMantra Logo"
                                width={80}
                                height={80}
                                className="rounded-4xl shadow-xl"
                                priority
                            />
                        </div>
                        <Link href="/" className="text-3xl font-medium ">
                            Heal-O-Mantra
                        </Link>
                    </div>

                    {/* Navigation Section */}
                    <nav>
                        <div className="flex items-center space-x-12 text-xl font-medium">
                            <Link href="/about" className=" hover:text-gray-600 transition-colors">
                                About
                            </Link>
                            <Link href="/classes" className=" hover:text-gray-600 transition-colors">
                                Classes
                            </Link>
                            <Link href="/teachers" className="hover:text-gray-600 transition-colors">
                                Studio
                            </Link>
                            <Link href="/teachers" className="hover:text-gray-600 transition-colors">
                                Contact Us
                            </Link>
                            
                            {/* Auth Links */}
                            <div className="flex items-center space-x-12 ml-6 font-semibold">
                                <Link href="/auth/login" className="hover:text-gray-600 transition-colors">
                                    Log In
                                </Link>
                                <Link href="/auth/signup" className="bg-[#cf7d77] p-2 rounded-md hover:text-gray-600 transition-colors">
                                    Book Free Demo
                                </Link>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )
}