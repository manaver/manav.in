"use client";

import { useTheme } from "next-themes";
import Image from "next/image";

export default function BackgroundBanner() {
    const { theme, setTheme } = useTheme();

    return <>
     <Image
                src={theme === 'dark' ? "/lightLogo.png" : "/darkLogo.png"}
                alt="Background logo"
                objectFit="cover"
                className="fixed top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] min-w-[60vw] opacity-10 -z-10"
                height={500}
                width={500}
            />
    </>
}