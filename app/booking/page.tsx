"use client";

import Link from "next/link";
import Image from "next/image";
import Footer from "../../components/Footer";
import dynamic from "next/dynamic";

const BookingForm = dynamic(() => import("./components/BookingForm"), {
    ssr: false,
    loading: () => (
        <div className="flex items-center justify-center min-h-[400px]">
            <div className="text-slate-500 animate-pulse">Loading booking form...</div>
        </div>
    )
});

export default function BookingPage() {
    return (
        <div className="flex-1 flex flex-col min-h-screen">
            {/* Top Navigation Bar */}
            <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-[#483f23] px-10 py-3 bg-background-light dark:bg-background-dark sticky top-0 z-50">
                <div className="flex items-center gap-4 text-slate-900 dark:text-white">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="h-10 w-10 relative rounded-full overflow-hidden">
                            <Image src="/logo.jpg" alt="Deos Record" layout="fill" objectFit="cover" />
                        </div>
                        <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">Deos Record</h2>
                    </Link>
                </div>
                <div className="flex flex-1 justify-end gap-8 items-center">
                    <nav className="hidden md:flex items-center gap-9">
                        <Link className="text-sm font-medium leading-normal hover:text-primary transition-colors" href="/team">Studio</Link>
                        <Link className="text-sm font-medium leading-normal hover:text-primary transition-colors" href="/services">Services</Link>
                        <Link className="text-sm font-medium leading-normal hover:text-primary transition-colors" href="/portfolio">Portfolio</Link>
                        <Link className="text-sm font-medium leading-normal hover:text-primary transition-colors" href="/about">About</Link>
                    </nav>
                </div>
            </header>

            <main className="flex-1 max-w-7xl mx-auto w-full px-4 md:px-10 py-8">
                {/* Page Heading */}
                <div className="flex flex-wrap justify-between items-end gap-4 mb-8">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-4xl font-black leading-tight tracking-[-0.033em] text-slate-900 dark:text-white">Book Your Session</h1>
                        <p className="text-slate-600 dark:text-[#c9bb92] text-lg font-normal">Real-time availability.</p>
                    </div>
                </div>

                {/* Booking Form Component (Client Only) */}
                <BookingForm />
            </main>
            <Footer />
        </div>
    );
}
