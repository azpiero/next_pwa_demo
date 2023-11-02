import './globals.css';
import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import SessionProvider from './SessionProvider';
import '@radix-ui/themes/styles.css';
import { Box, Theme } from '@radix-ui/themes';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ja'>
      <head>
        <link rel='manifest' href='/manifest.json' />
        <link rel='apple-touch-icon' href='/icon.png'></link>
        <meta name='theme-color' content='#b8e986' />
      </head>
      <body>
        <SessionProvider>
          <Theme>
            <div className='h-screen flex flex-col bg-bg'>
              <Header />
              <div className='h-[calc(100vh-20rem)]'>{children} </div>
            </div>
          </Theme>
        </SessionProvider>
      </body>
    </html>
  );
}
