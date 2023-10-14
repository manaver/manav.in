"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import GetIcon from "../get-icons";


export default function Header() {

    const { theme, setTheme } = useTheme();
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    const navLinks = [
        {
            name: 'Home',
            href: '/'
        },
        {
            name: 'About',
            href: '/about'
        },
        {
            name: 'Projects',
            href: '/projects'
        },
        // {
        //     name: 'Accomplishments',
        //     href: '/accomplishments'
        // }
    ];

    return (
        <div className="navbar bg-white dark:bg-[rgba(12,12,12,0.9)] ">
            <div className="mx-7 duration-300 hover:scale-110">
                <Link href="/">
                    <Avatar>
                        <AvatarImage src="/manav.jpg" />
                        <AvatarFallback>MV</AvatarFallback>
                    </Avatar>
                </Link>
            </div>

            <div
                className={`${open ? 'flex' : 'hidden'} md:flex navLinks bg-white dark:bg-[rgba(12,12,12,0.6)] bg-opacity-60 backdrop-blur-sm`}
            >
                {navLinks.map((link, index) => (
                    <Link
                        href={link.href}
                        key={index}
                    className={`${pathname === link.href ? 'active' : ''} navItem`}>
                        {link.name}
                    </Link>
                ))}
            </div>

            <div className="icons flex items-center space-x-6 pe-3">
                <button className="navIcons themeIcon"
                    onClick={() => {
                        const scheme = theme !== 'light' ? 'light' : 'dark';
                        setTheme(scheme);
                    }}
                    aria-label="Toggle Theme"
                >
                    {theme === 'dark' ? (
                        <GetIcon iconName='Sun' />
                    ) : (
                        <GetIcon iconName='Moon' />
                    )}
                </button>

                <button className="md:hidden" onClick={() => {
                    setOpen(!open)
                }}>
                    {
                        !open ?
                            <GetIcon iconName='Menu' />
                            :
                            <GetIcon iconName='X' />
                    }
                </button>
            </div>
        </div>
    );
}