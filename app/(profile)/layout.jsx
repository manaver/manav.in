import '../globals.css';
import '../styles.css';
import {Inter} from 'next/font/google';
import {Providers} from '../providers';
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

const inter = Inter({subsets: ['latin']});

export const runtime = 'edge'

export const metadata = {
    title: 'Hindi Ringtones 2023 - Download Your Favorite Ringtones',
    description: 'Download hindi ringtones 2023, bgm ringtones, tamil ringtones, bollywood ringtones all at one place! Get a ringtone for your phone now.',
    keywords: 'Download hindi ringtones 2023, bgm ringtones, tamil ringtones, bollywood ringtones all at one place! Get a ringtone for your phone now.'
}

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <Providers attribute="class" defaultTheme="system" enableSystem={false}>
            <body className={`h-full scrollbar overflow-x-hidden ${inter.className}`}>
            <Header />
                {children}
            </body>
            <Footer />
        </Providers>
        </html>
    );
}