'use client';

import { ThemeProvider } from 'next-themes';

export function Providers({ children, ...props }) {
    return <ThemeProvider attribute="class" {...props}>{children}</ThemeProvider>;
}