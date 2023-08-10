"use client";

import Image from "next/image";
import Link from "next/link";
import {Menu, Moon, Sun, X} from "lucide-react";
import {useTheme} from "next-themes";
import {usePathname} from "next/navigation";
import {useState} from "react";

export default function Header() {

    const {theme, setTheme} = useTheme();
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    return (
        <div className="navbar bg-white dark:bg-[rgba(12,12,12,0.6)] bg-opacity-60">
            <div className="navLogo mx-7">
                <Link href="/">
                    <Image
                        className="navLogo rounded-full"
                        src="/manav.jpg"
                        alt=""
                        width={50}
                        height={50}
                    />
                </Link>
            </div>
            <div
                className={`${open?'flex':'hidden'} md:flex navLinks bg-white dark:bg-[rgba(12,12,12,0.6)] bg-opacity-60`}
            >
                <Link
                    href="/"
                    className={`${pathname === '/' ? 'active' : ''} navItem`}>
                    Home
                </Link>
                <Link
                    href="/about"
                    className={`${pathname === '/about' ? 'active' : ''} navItem`}>
                    About
                </Link>
                <Link
                    href="/projects"
                    className={`${pathname === '/projects' ? 'active' : ''} navItem`}>
                    Projects
                </Link>
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
                        <Sun/>
                    ) : (
                        <Moon/>
                    )}
                </button>

                <button className="md:hidden" onClick={()=>{setOpen(!open)}}>
                    {
                        !open ?
                            <Menu size={30}/>
                            :
                            <X size={30} />
                    }
                </button>
            </div>
        </div>
    );
}