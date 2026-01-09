"use client";

import Link from "next/link";
import Footer from "../../components/Footer";
import { useState, useTransition } from "react";
import { bookSession } from "../actions/bookSession";
import { useRouter } from "next/navigation";

export default function BookingPage() {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const [selectedService, setSelectedService] = useState("Standard Podcast Session");
    const [selectedStaff, setSelectedStaff] = useState("Musa Bello");

    const handleBooking = async () => {
        startTransition(async () => {
            const formData = new FormData();
            formData.append("service", selectedService);
            formData.append("staff", selectedStaff);

            const result = await bookSession(null, formData);
            if (result.success) {
                router.push("/confirmation");
            }
        });
    };

    return (
        <div className="flex-1 flex flex-col min-h-screen">
            {/* Top Navigation Bar */}
            <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-[#483f23] px-10 py-3 bg-background-light dark:bg-background-dark sticky top-0 z-50">
                <div className="flex items-center gap-4 text-slate-900 dark:text-white">
                    <div className="h-10 w-10 relative rounded-full overflow-hidden">
                        <img src="/logo.jpg" alt="Deos Record" className="object-cover w-full h-full" />
                    </div>
                    <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">Deos Record</h2>
                </div>
                <div className="flex flex-1 justify-end gap-8 items-center">
                    <nav className="hidden md:flex items-center gap-9">
                        <Link className="text-sm font-medium leading-normal hover:text-primary transition-colors" href="/team">Studio</Link>
                        <Link className="text-sm font-medium leading-normal hover:text-primary transition-colors" href="/services">Services</Link>
                        <Link className="text-sm font-medium leading-normal hover:text-primary transition-colors" href="/portfolio">Portfolio</Link>
                        <Link className="text-sm font-medium leading-normal hover:text-primary transition-colors" href="/about">About</Link>
                    </nav>
                    <button className="flex min-w-[100px] cursor-pointer items-center justify-center rounded-lg h-10 px-5 bg-primary text-background-dark text-sm font-bold transition-transform active:scale-95">
                        Sign In
                    </button>
                </div>
            </header>
            <main className="flex-1 max-w-7xl mx-auto w-full px-4 md:px-10 py-8">
                {/* Page Heading */}
                <div className="flex flex-wrap justify-between items-end gap-4 mb-8">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-4xl font-black leading-tight tracking-[-0.033em] text-slate-900 dark:text-white">Book Your Session</h1>
                        <p className="text-slate-600 dark:text-[#c9bb92] text-lg font-normal">Professional recording spaces in the heart of Abuja.</p>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 text-green-500 text-sm font-bold border border-green-500/20">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        Studio Available Today
                    </div>
                </div>
                {/* Booking Interface Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Left Column: Services & Staff */}
                    <div className="lg:col-span-5 space-y-8">
                        {/* Section: Select Service */}
                        <section className="bg-white dark:bg-[#332d19] rounded-xl border border-slate-200 dark:border-[#675a32] overflow-hidden">
                            <h2 className="text-lg font-bold px-6 py-4 border-b border-slate-200 dark:border-[#675a32] flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">layers</span>
                                1. Select Service
                            </h2>
                            {/* Tabs for Categories */}
                            <div className="flex border-b border-slate-100 dark:border-[#483f23] px-2 gap-2 overflow-x-auto">
                                <button className="flex items-center gap-2 px-4 py-3 border-b-2 border-primary text-primary text-sm font-bold">
                                    <span className="material-symbols-outlined text-[20px]">mic</span> Podcast
                                </button>
                                <button className="flex items-center gap-2 px-4 py-3 border-b-2 border-transparent text-slate-500 dark:text-[#c9bb92] text-sm font-bold hover:text-primary">
                                    <span className="material-symbols-outlined text-[20px]">music_note</span> Music
                                </button>
                                <button className="flex items-center gap-2 px-4 py-3 border-b-2 border-transparent text-slate-500 dark:text-[#c9bb92] text-sm font-bold hover:text-primary">
                                    <span className="material-symbols-outlined text-[20px]">videocam</span> Video
                                </button>
                            </div>
                            <div className="p-4 space-y-3">
                                <label
                                    className={`flex items-center justify-between p-4 rounded-lg border-2 cursor-pointer transition-all ${selectedService === "Standard Podcast Session" ? "border-primary bg-primary/5" : "border-transparent hover:bg-slate-50 dark:hover:bg-white/5"}`}
                                    onClick={() => setSelectedService("Standard Podcast Session")}
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={`size-10 rounded flex items-center justify-center ${selectedService === "Standard Podcast Session" ? "bg-primary/20 text-primary" : "bg-slate-100 dark:bg-white/10 text-slate-500 dark:text-[#c9bb92]"}`}>
                                            <span className="material-symbols-outlined">podcasts</span>
                                        </div>
                                        <div>
                                            <p className="font-bold text-sm text-slate-900 dark:text-white">Standard Podcast Session</p>
                                            <p className="text-xs text-slate-500 dark:text-[#c9bb92]">Up to 4 participants · 1 Hour</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className={`font-bold ${selectedService === "Standard Podcast Session" ? "text-primary" : "text-slate-900 dark:text-white"}`}>₦25,000</p>
                                        <input
                                            readOnly
                                            checked={selectedService === "Standard Podcast Session"}
                                            className="text-primary focus:ring-primary border-slate-300"
                                            name="service"
                                            type="radio"
                                            value="Standard Podcast Session"
                                        />
                                    </div>
                                </label>
                                <label
                                    className={`flex items-center justify-between p-4 rounded-lg border-2 cursor-pointer transition-all ${selectedService === "Video Podcast Upgrade" ? "border-primary bg-primary/5" : "border-slate-200 dark:border-[#675a32] hover:bg-slate-50 dark:hover:bg-white/5"}`}
                                    onClick={() => setSelectedService("Video Podcast Upgrade")}
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={`size-10 rounded flex items-center justify-center ${selectedService === "Video Podcast Upgrade" ? "bg-primary/20 text-primary" : "bg-slate-100 dark:bg-white/10 text-slate-500 dark:text-[#c9bb92]"}`}>
                                            <span className="material-symbols-outlined">video_call</span>
                                        </div>
                                        <div>
                                            <p className="font-bold text-sm text-slate-900 dark:text-white">Video Podcast Upgrade</p>
                                            <p className="text-xs text-slate-500 dark:text-[#c9bb92]">Multicam setup · 1.5 Hours</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className={`font-bold ${selectedService === "Video Podcast Upgrade" ? "text-primary" : "text-slate-900 dark:text-white"}`}>₦45,000</p>
                                        <input
                                            readOnly
                                            checked={selectedService === "Video Podcast Upgrade"}
                                            className="text-primary focus:ring-primary border-slate-300"
                                            name="service"
                                            type="radio"
                                            value="Video Podcast Upgrade"
                                        />
                                    </div>
                                </label>
                            </div>
                        </section>
                        {/* Section: Select Staff */}
                        <section className="bg-white dark:bg-[#332d19] rounded-xl border border-slate-200 dark:border-[#675a32] overflow-hidden">
                            <h2 className="text-lg font-bold px-6 py-4 border-b border-slate-200 dark:border-[#675a32] flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">person</span>
                                2. Choose Engineer
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4">
                                {/* Staff 1 */}
                                <div
                                    onClick={() => setSelectedStaff("Musa Bello")}
                                    className={`flex flex-col gap-3 rounded-lg border-2 p-4 relative cursor-pointer transition-all ${selectedStaff === "Musa Bello" ? "border-primary bg-primary/5 ring-1 ring-primary/20" : "border-slate-200 dark:border-[#675a32] bg-transparent hover:border-primary/50"}`}
                                >
                                    <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-12 shrink-0 border-2 border-primary" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAc_COzIl4xngUoti_7DrRT9Xprn1lHMl0RdtB7T5hwQRv6IV2HTnGVwWGpKYijMua_wpZXB2KZki7R75emC-D0Tqo00ERRcVRcG8wpmWBz_b7gbb3Ky2ML6QlMZp-D2LfSFoZl92ojRX-UpexFHQpWpPlqt7rpj1t6HN0YMUyES1Clttbn-AAL-aV_qdA1eOmkRvkGaRptBs_Bk6BjfASg3Ha7OgtWeMn-cLO7gEM3YH7tIigUwI5yjz-Gg7a-rUs_JfMuMkr21mg")' }}></div>
                                    <div className="flex flex-col gap-0.5">
                                        <h3 className="text-slate-900 dark:text-white text-base font-bold">Musa Bello</h3>
                                        <p className="text-slate-500 dark:text-[#c9bb92] text-xs">Lead Audio Engineer</p>
                                    </div>
                                    {selectedStaff === "Musa Bello" && <span className="absolute top-4 right-4 text-primary material-symbols-outlined">check_circle</span>}
                                </div>
                                {/* Staff 2 */}
                                <div
                                    onClick={() => setSelectedStaff("Sarah Obi")}
                                    className={`flex flex-col gap-3 rounded-lg border-2 p-4 relative cursor-pointer transition-all ${selectedStaff === "Sarah Obi" ? "border-primary bg-primary/5 ring-1 ring-primary/20" : "border-slate-200 dark:border-[#675a32] bg-transparent hover:border-primary/50"}`}
                                >
                                    <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-12 shrink-0 opacity-80 group-hover:opacity-100" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDDBhnA8W4UlN3kO6aPSaf-RjYL0HECExiTMUVnr60bJ39i09longP4D2YD1qw_X-MslEbITKQ4A509LsI-AzYSdTfBhVY9-QR8IW4ojRW86CD3MUfaUmFjldobo_jtry6hXsft6ySz1McFiyYJyipKDbo-KwhxnU0GdyHBYSZqanjOuc_7Kmhx6B35QcqX6sMMMRqpNl0BcZCTylvbWm5iBurPj-ce6jLV_rHj_hsgbJdYRr-V0fYqDx69_9rE9j4q08A620TUkqU")' }}></div>
                                    <div className="flex flex-col gap-0.5">
                                        <h3 className="text-slate-900 dark:text-white text-base font-bold">Sarah Obi</h3>
                                        <p className="text-slate-500 dark:text-[#c9bb92] text-xs">Creative Director</p>
                                    </div>
                                    {selectedStaff === "Sarah Obi" && <span className="absolute top-4 right-4 text-primary material-symbols-outlined">check_circle</span>}
                                </div>
                            </div>
                        </section>
                    </div>
                    {/* Right Column: Calendar & Summary */}
                    <div className="lg:col-span-7 space-y-6">
                        {/* Calendar Section */}
                        <div className="bg-white dark:bg-[#332d19] rounded-xl border border-slate-200 dark:border-[#675a32] overflow-hidden p-6">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-xl font-bold flex items-center gap-2">
                                    <span className="material-symbols-outlined text-primary">calendar_month</span>
                                    October 2023
                                </h2>
                                <div className="flex gap-2">
                                    <button className="p-2 hover:bg-slate-100 dark:hover:bg-white/10 rounded-lg text-slate-500 dark:text-white">
                                        <span className="material-symbols-outlined">chevron_left</span>
                                    </button>
                                    <button className="p-2 hover:bg-slate-100 dark:hover:bg-white/10 rounded-lg text-slate-500 dark:text-white">
                                        <span className="material-symbols-outlined">chevron_right</span>
                                    </button>
                                </div>
                            </div>
                            {/* Calendar Grid */}
                            <div className="grid grid-cols-7 gap-1 text-center mb-6">
                                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, i) => (
                                    <div key={i} className="text-[10px] uppercase font-black text-slate-400 dark:text-[#675a32] pb-2">{day}</div>
                                ))}
                                {/* Filler */}
                                <div className="h-10 text-slate-300 dark:text-[#483f23] flex items-center justify-center text-sm">28</div>
                                <div className="h-10 text-slate-300 dark:text-[#483f23] flex items-center justify-center text-sm">29</div>
                                <div className="h-10 text-slate-300 dark:text-[#483f23] flex items-center justify-center text-sm">30</div>
                                {[1, 2, 3, 4, 5, "...", 23].map((day, i) => (
                                    <div key={i} className="h-10 text-slate-900 dark:text-white flex items-center justify-center text-sm font-medium hover:bg-primary/20 rounded cursor-pointer">{day}</div>
                                ))}
                                <div className="h-10 bg-primary text-background-dark flex items-center justify-center text-sm font-bold rounded-lg shadow-lg shadow-primary/30 cursor-pointer">24</div>
                                {[25, 26, 27].map((day, i) => (
                                    <div key={i} className="h-10 text-slate-900 dark:text-white flex items-center justify-center text-sm font-medium hover:bg-primary/20 rounded cursor-pointer">{day}</div>
                                ))}
                            </div>
                            {/* Time Slots Grid */}
                            <h3 className="text-sm font-bold text-slate-400 dark:text-[#c9bb92] uppercase tracking-wider mb-4">Available Slots for Oct 24</h3>
                            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
                                <button className="py-2 border border-slate-200 dark:border-[#675a32] rounded text-sm hover:border-primary hover:text-primary transition-all">09:00 AM</button>
                                <button className="py-2 border border-slate-200 dark:border-[#675a32] rounded text-sm hover:border-primary hover:text-primary transition-all">10:30 AM</button>
                                <button className="py-2 border-2 border-primary bg-primary/10 text-primary font-bold rounded text-sm">02:00 PM</button>
                                <button className="py-2 border border-slate-200 dark:border-[#675a32] rounded text-sm opacity-30 cursor-not-allowed">03:30 PM</button>
                                <button className="py-2 border border-slate-200 dark:border-[#675a32] rounded text-sm hover:border-primary hover:text-primary transition-all">05:00 PM</button>
                                <button className="py-2 border border-slate-200 dark:border-[#675a32] rounded text-sm hover:border-primary hover:text-primary transition-all">06:30 PM</button>
                            </div>
                        </div>
                        {/* Booking Summary Sticky-style */}
                        <div className="bg-[#2a2514] dark:bg-[#1a160d] border border-[#eebd2b]/30 rounded-xl p-6 shadow-2xl">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                                <div className="space-y-1">
                                    <h3 className="text-white font-bold text-lg">Booking Summary</h3>
                                    <p className="text-[#c9bb92] text-sm">
                                        <span className="text-white font-semibold">{selectedService}</span> with <span className="text-white font-semibold">{selectedStaff}</span>
                                    </p>
                                    <div className="flex items-center gap-4 pt-1">
                                        <div className="flex items-center gap-1 text-xs text-primary">
                                            <span className="material-symbols-outlined text-[16px]">calendar_today</span> Oct 24th, 2023
                                        </div>
                                        <div className="flex items-center gap-1 text-xs text-primary">
                                            <span className="material-symbols-outlined text-[16px]">schedule</span> 02:00 PM (1 Hr)
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-6">
                                    <div className="text-right">
                                        <p className="text-[#c9bb92] text-xs uppercase font-bold tracking-widest">Total Amount</p>
                                        <p className="text-white text-3xl font-black">{selectedService === "Standard Podcast Session" ? "₦25,000" : "₦45,000"}</p>
                                    </div>
                                    <button
                                        onClick={handleBooking}
                                        disabled={isPending}
                                        className="flex min-w-[180px] cursor-pointer items-center justify-center rounded-lg h-14 px-6 bg-primary text-background-dark text-base font-black transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/20 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isPending ? "Booking..." : "Confirm Booking"}
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* Footer Help */}
                        <div className="flex items-center justify-center gap-8 py-4 opacity-50">
                            <div className="flex items-center gap-2 text-xs">
                                <span className="material-symbols-outlined text-[18px]">verified_user</span> Secure Checkout
                            </div>
                            <div className="flex items-center gap-2 text-xs">
                                <span className="material-symbols-outlined text-[18px]">history</span> 24h Rescheduling
                            </div>
                            <div className="flex items-center gap-2 text-xs">
                                <span className="material-symbols-outlined text-[18px]">support_agent</span> 24/7 Support
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
