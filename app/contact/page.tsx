"use client";

import Link from "next/link";
import { useState, useTransition } from "react";
import { submitContact } from "../actions/contact";
import Footer from "../../components/Footer";

export default function ContactPage() {
    const [isPending, startTransition] = useTransition();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        startTransition(async () => {
            await submitContact(null, formData);
            alert("Message sent!");
            (event.target as HTMLFormElement).reset();
        });
    };

    return (
        <div className="flex-1 flex flex-col min-h-screen">
            <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-[#483f23] px-10 py-3 bg-background-light dark:bg-background-dark sticky top-0 z-50">
                <div className="flex items-center gap-4 text-slate-900 dark:text-white">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="h-10 w-10 relative rounded-full overflow-hidden">
                            <img src="/logo.jpg" alt="Deos Record" className="object-cover w-full h-full" />
                        </div>
                        <span className="text-lg font-bold">Deos Record</span>
                    </Link>
                </div>
                <nav className="hidden md:flex items-center gap-9">
                    <Link className="text-sm font-medium hover:text-primary" href="/">Home</Link>
                    <Link className="text-sm font-medium hover:text-primary" href="/services">Services</Link>
                    <Link className="text-sm text-primary font-bold" href="/contact">Contact</Link>
                </nav>
            </header>
            <main className="flex-1 flex max-w-4xl mx-auto w-full p-10">
                <div className="w-full">
                    <h1 className="text-4xl font-black mb-4 dark:text-white">Contact Us</h1>
                    <p className="text-slate-500 mb-8">Got a project in mind? Let's talk.</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="space-y-4 text-slate-900 dark:text-white">
                            <div className="p-6 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-[#483f23]">
                                <h3 className="font-bold text-lg mb-2">Studio Location</h3>
                                <p>Wuse II, Abuja, Nigeria</p>
                            </div>
                            <div className="p-6 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-[#483f23]">
                                <h3 className="font-bold text-lg mb-2">Contact Info</h3>
                                <p>+234 800 123 4567</p>
                                <p>hello@deosrecord.com</p>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <input name="name" required placeholder="Name" className="w-full p-4 rounded-lg border border-slate-200 dark:border-[#483f23] bg-white dark:bg-[#1a160d] text-slate-900 dark:text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none" />
                            <input name="email" type="email" required placeholder="Email" className="w-full p-4 rounded-lg border border-slate-200 dark:border-[#483f23] bg-white dark:bg-[#1a160d] text-slate-900 dark:text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none" />
                            <textarea name="message" required placeholder="Message" rows={4} className="w-full p-4 rounded-lg border border-slate-200 dark:border-[#483f23] bg-white dark:bg-[#1a160d] text-slate-900 dark:text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none"></textarea>
                            <button disabled={isPending} className="w-full py-4 bg-primary text-background-dark font-bold rounded-lg hover:brightness-110 disabled:opacity-50">
                                {isPending ? "Sending..." : "Send Message"}
                            </button>
                        </form>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
