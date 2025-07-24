import type {Metadata} from 'next';
import {Atkinson_Hyperlegible} from 'next/font/google';
import './globals.css';
import MemoryGameProvider from '@/context';

const atKinsonHyperlegible = Atkinson_Hyperlegible({
    subsets: ['latin'],
    weight: ['400', '700'],
    variable: '--ff-atkinson-hyperlegible',
});

export const metadata: Metadata = {
    title: 'Memory Game',
    description: 'A memory game app',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${atKinsonHyperlegible.variable} antialiased`}>
                <MemoryGameProvider>{children}</MemoryGameProvider>
            </body>
        </html>
    );
}
