import '../globals.css';
import '../styles.css';
import {Inter} from 'next/font/google';
import {Providers} from '../providers';
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import SocialIcons from "@/components/layout/social-icons";
import Image from "next/image";
import {Analytics} from "@vercel/analytics/react";

const inter = Inter({subsets: ['latin']});

export const runtime = 'edge'

export const metadata = {
    title: 'Manav Verma',
    description: 'I am a passionate full-stack developer and freelancer with a strong interest in open source and DevOps. I am skilled at writing clean and functional web designs, and I am always looking for ways to improve my skills in web development.',
    keywords: 'Freelancer, Developer, Full-stack-developer, Frontend-developer, Backend-developer.'
}

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <Providers attribute="class" defaultTheme="system" enableSystem={false}>
            <body className={`h-full scrollbar overflow-x-hidden ${inter.className}`}>
            <Header/>
            <div className={`fixed top-0 bg-[url('/darkLogo.png')] dark:bg-[url('/lightLogo.png')] bg-no-repeat bg-contain bg-center min-w-[100vw] min-h-[100vh] opacity-10`}></div>
            {children}
            <SocialIcons/>
            <Footer/>
            <Analytics />
            </body>
        </Providers>
        </html>
    );
}