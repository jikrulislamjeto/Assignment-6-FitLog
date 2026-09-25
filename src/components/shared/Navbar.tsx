import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu } from 'lucide-react';

import Logo from '@/assets/logo.png';

const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50 bg-[#0C0D10] shadow-sm">
            {/* Navbar Container */}
            <div className="navbar mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                {/* Left Side: Mobile Menu + Logo */}
                <div className="navbar-start">
                    {/* Mobile Dropdown Menu */}
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            aria-label="Open navigation menu"
                            className="btn btn-ghost lg:hidden"
                        >
                            <Menu className="h-5 w-5" aria-hidden="true" />
                        </div>

                        {/* Mobile Navigation Links */}
                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content z-1 mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
                        >
                            <li>
                                <Link href="/workouts">Workouts</Link>
                            </li>

                            <li>
                                <Link href="/my-plan">My Plan</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Logo */}
                    <Link
                        href="/"
                        className="btn btn-ghost rounded-2xl text-xl"
                    >
                        <Image
                            src={Logo}
                            alt="FitLog logo"
                            height={30}
                            width={30}
                        />
                        FITLOG
                    </Link>
                </div>

                {/* Center: Desktop Navigation */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal gap-1 px-1">
                        <li>
                            <Link
                                href="/workouts"
                                className="btn btn-ghost rounded-2xl text-sm"
                            >
                                Workouts
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="/my-plan"
                                className="btn btn-ghost rounded-2xl text-sm"
                            >
                                My Plan
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Right Side: Plan + Saved */}
                <div className="navbar-end gap-2">
                    <Link
                        href="/plan"
                        className="btn btn-ghost rounded-2xl text-sm"
                    >
                        Plan
                    </Link>

                    <Link
                        href="/saved"
                        className="btn btn-ghost rounded-2xl text-sm"
                    >
                        Saved
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;