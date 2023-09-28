import '../globals.css';
import '../styles.css';
import { Inter } from 'next/font/google';
import { Providers } from '../providers';
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Analytics } from "@vercel/analytics/react";
import dynamic from 'next/dynamic'

const BackgroundBanner = dynamic(() => import('@/components/background-banner'))
const SocialIcons = dynamic(() => import('@/components/layout/social-icons'))

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Manav Verma',
    description: 'I am a passionate full-stack developer and freelancer with a strong interest in open source and DevOps. I am skilled at writing clean and functional web designs, and I am always looking for ways to improve my skills in web development.',
    keywords: 'Freelancer, Developer, Full-stack-developer, Frontend-developer, Backend-developer.'
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <Providers attribute="class" defaultTheme="system" enableSystem={false}>
                <body className={`h-full scrollbar overflow-x-hidden ${inter.className}`}>
                    <Header />
                    <BackgroundBanner />
                    {children}
                    <SocialIcons />
                    <Footer />
                    <Analytics />
                </body>
            </Providers>
        </html>
    );
}