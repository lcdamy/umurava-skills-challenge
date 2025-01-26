"use client";
import * as React from 'react';
import { Geist, Geist_Mono } from "next/font/google";
import "./../globals.css";
import Link from 'next/link';
import { Bell, DashLogo, File, Gift, HelpCenter, Home, Search, Settings, UserPlus } from '../components/svgs';
import { activeLink } from '../components/Nav';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export default function DashboardLayout({ children }: React.PropsWithChildren<object>) {
    // Readonly<{ children: React.ReactNode; }>)

    const pathname = usePathname();

    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <div className="grid sm:grid-cols-6 zoom-out">
                    <aside className="bg-primary text-white shadow-md ">
                        <nav className="flex flex-col justify-between h-full sm:p-4">
                            <div className='sm:space-y-4'>
                                <Link href={"/"} className="!cursor-pointer">
                                    <DashLogo className="text-white h-8 w-8" />
                                </Link>
                                <ul className='sm:space-y-4'>
                                    {[{ link: "/dashboard", label: "Dashboard" }, { link: "/dashboard/hackathons", label: "Challenges & Hackathons" }, { link: "/dashboard/community", label: "Community" }].map((item, index) => (
                                        <li key={index} className={`flex items-center gap-1 sm:p-2 cursor-pointer rounded-md ${activeLink(item.label, pathname) ? "bg-white text-primary" : "bg-primary text-white"} hover:bg-white hover:text-primary stroke-white hover:stroke-primary`}>

                                            {item.link === "/dashboard" ? <Home className={`h-6 w-6 !stroke-[0.1] !stroke-current`} /> : item.link === "/dashboard/hackathons" ? <File className={`h-6 w-6 !stroke-[0.1] !stroke-current`} /> : <UserPlus className={`h-6 w-6 !stroke-[1.5] !stroke-current !fill-none`} />}
                                            <a href={item.link} className='sm:text-sm'>{item.label}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className='sm:space-y-8'>
                                <ul className='sm:space-y-4'>
                                    {[{ link: "/dashboard/settings", label: "Settings" }, { link: "/dashboard/help", label: "Help Center" }, { link: "/dashboard/refer", label: "Refer family & friends" }].map((item, index) => (
                                        <li key={index} className={`flex items-center gap-1 sm:p-2 cursor-pointer rounded-md ${activeLink(item.label, pathname) ? "bg-white text-primary" : "bg-primary text-white"} hover:bg-white hover:text-primary stroke-white hover:stroke-current`}>

                                            {item.link === "/dashboard/settings" ? <Settings className={`h-6 w-6 !stroke-[0.1] !stroke-current`} /> : item.link === "/dashboard/help" ? <HelpCenter className={`h-6 w-6 !stroke-[0.1] !stroke-current`} /> : <Gift className={`h-6 w-6 !stroke-[0.1] !stroke-current`} />}
                                            <a href={item.link} className='sm:text-sm'>{item.label}</a>
                                        </li>
                                    ))}
                                </ul>
                                <div className="flex sm:flex-row sm:gap-4">
                                    <div className="relative bg-tertiaryColor h-12 w-12 rounded-full border-2 border-white">
                                        <Image src="/.Sidebar/Image.png" alt="avatar" objectFit='cover' priority className="rounded-full" width={48} height={48} />
                                        <div className='absolute bottom-0 right-0 bg-success h-3 w-3 border border-white rounded-full'></div>
                                    </div>
                                    <div className="flex sm:flex-col">
                                        <p className="text-white text-sm sm:text-sm">{"Hilaire Sh"}</p>
                                        <p className="text-white text-sm sm:text-sm"> {"email@example.com"}</p>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </aside>
                    <main className="grid sm:col-span-5 bg-backgroundA">
                        <div className='flex flex-col gap-4 sm:gap-8'>
                            <header className="topbar">
                                {/* Topbar content */}
                                <div className="flex items-center justify-between bg-white p-2 rounded-md">
                                    <form className='bg-tertiary sm:w-1/2 flex items-center justify-between sm:px-2 sm:mx-4 sm:my-2 rounded-md'>
                                        <Search className={`h-6 w-6`} />
                                        <input className="bg-tertiary w-full text-black outline-none sm:p-2 rounded-md" placeholder="Search here ..." />
                                    </form>
                                    <div className='flex items-center gap-2'>
                                        <div className='bg-tertiary flex !items-center !justify-center p-2 rounded-full'>
                                            <Bell className={`h-6 w-6 self-center`} />
                                        </div>
                                        <Image src="/.Sidebar/Image.png" alt="avatar" objectFit='contain' priority className="rounded-full" width={40} height={40} />
                                    </div>
                                </div>
                            </header>
                            {children}
                        </div>
                    </main>
                </div>
            </body>
        </html>
    );
}
