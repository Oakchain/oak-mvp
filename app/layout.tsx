'use client'
import type { Metadata } from "next";
import React, { useEffect } from 'react';
import { Inter } from "next/font/google";
import DashboardLayout from '@/components/Layout/Dashboard';
import { TooltipProvider } from '@/components/ui/tooltip';
import "./globals.css";
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

const metadata: Metadata = {
  title: "Oak Dashboard",
  description: "User Interface",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();

  useEffect(() => {
    const user = Cookies.get('user');

    if (user === undefined) {
      router.push('/login');
    }
  }, []);
  return (
    <TooltipProvider>
        <html lang='en'>
          <body>
            <DashboardLayout>{children}</DashboardLayout>
          </body>
        </html>
    </TooltipProvider>
  );
}
