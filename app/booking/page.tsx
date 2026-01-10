"use client";

import Link from "next/link";
import Image from "next/image";
import Footer from "../../components/Footer";
import { useState, useTransition } from "react";
import { bookSession } from "../actions/bookSession";
import { useRouter } from "next/navigation";
import { serviceCategories, teamMembers } from "../data/services";

export default function BookingPage() {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();

    // State
    const [activeCategory, setActiveCategory] = useState("Vocals & Training Services");
    const [selectedServiceId, setSelectedServiceId] = useState("");
    const [selectedStaffId, setSelectedStaffId] = useState(teamMembers[0]?.name || "Tunde Deos");

    // Date/Time State
    const [selectedDate, setSelectedDate] = useState("");
    const [selectedTime, setSelectedTime] = useState("");

    // Generate Dates (Today + 13 days)
    const dates = Array.from({ length: 14 }).map((_, i) => {
        const d = new Date();
        d.setDate(d.getDate() + i);
        return {
            dateStr: d.toISOString().split('T')[0],
            dayName: d.toLocaleDateString('en-US', { weekday: 'short' }),
            dayNum: d.getDate(),
            month: d.toLocaleDateString('en-US', { month: 'short' })
        };
    });

    // Generate Time Slots
    const timeSlots = ["09:00", "10:30", "12:00", "13:30", "15:00", "16:30", "18:00", "19:30"];

    // Set Default Date on Mount
    if (!selectedDate && dates[0]) {
        setSelectedDate(dates[0].dateStr);
    }

    // Find Selected Service Object
    const allServices = serviceCategories.flatMap(c => c.items);
    const selectedService = allServices.find(s => s.id === selectedServiceId) || allServices[0];

    const handleBooking = async () => {
        if (!selectedDate || !selectedTime) {
            alert("Please select a date and time for your session.");
            return;
        }

        startTransition(async () => {
            const formData = new FormData();
            formData.append("serviceId", selectedService.id);
            formData.append("serviceName", selectedService.title);
            formData.append("price", selectedService.price);
            formData.append("staff", selectedStaffId);
            formData.append("date", selectedDate);
            formData.append("time", selectedTime);

            const result = await bookSession(null, formData);
            if (result.success) {
                router.push("/confirmation");
            } else {
                alert(result.message || "Booking failed. Please try again.");
            }
        });
    };

    return (
        <div className="flex-1 flex flex-col min-h-screen">
            {/* Top Navigation Bar */}
            <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-[#483f23] px-10 py-3 bg-background-light dark:bg-background-dark sticky top-0 z-50">
                <div className="flex items-center gap-4 text-slate-900 dark:text-white">
                    <div className="h-10 w-10 relative rounded-full overflow-hidden">
                        <Image src="/logo.jpg" alt="Deos Record" layout="fill" objectFit="cover" />
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
                {/* Booking Interface Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Left Column: Services & Staff */}
                    <div className="lg:col-span-6 space-y-8">
                        {/* Section: Select Service */}
                        <section className="bg-white dark:bg-[#332d19] rounded-xl border border-slate-200 dark:border-[#675a32] overflow-hidden flex flex-col max-h-[600px]">
                            <h2 className="text-lg font-bold px-6 py-4 border-b border-slate-200 dark:border-[#675a32] flex items-center gap-2 shrink-0">
                                <span className="material-symbols-outlined text-primary">layers</span>
                                1. Select Service
                            </h2>
                            {/* Category Filter */}
                            <div className="flex border-b border-slate-100 dark:border-[#483f23] px-2 gap-2 overflow-x-auto shrink-0 z-10 bg-white dark:bg-[#332d19]">
                                {serviceCategories.map((cat, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setActiveCategory(cat.category)}
                                        className={`flex items-center gap-2 px-4 py-3 border-b-2 text-sm font-bold whitespace-nowrap transition-colors ${activeCategory === cat.category ? "border-primary text-primary" : "border-transparent text-slate-500 hover:text-primary dark:text-[#c9bb92]"}`}
                                    >
                                        <span className="material-symbols-outlined text-[20px]">{cat.icon}</span> {cat.category.split(" ")[0]}
                                    </button>
                                ))}
                            </div>
                            {/* Service List */}
                            <div className="p-4 space-y-3 overflow-y-auto min-h-0">
                                {serviceCategories.find(c => c.category === activeCategory)?.items.map((item) => (
                                    <label
                                        key={item.id}
                                        className={`flex items-center justify-between p-4 rounded-lg border-2 cursor-pointer transition-all ${selectedService.id === item.id ? "border-primary bg-primary/5" : "border-slate-200 dark:border-[#675a32] hover:bg-slate-50 dark:hover:bg-white/5"}`}
                                        onClick={() => setSelectedServiceId(item.id)}
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className={`size-10 rounded flex items-center justify-center shrink-0 ${selectedService.id === item.id ? "bg-primary/20 text-primary" : "bg-slate-100 dark:bg-white/10 text-slate-500 dark:text-[#c9bb92]"}`}>
                                                <span className="material-symbols-outlined">radio_button_checked</span>
                                            </div>
                                            <div>
                                                <p className="font-bold text-sm text-slate-900 dark:text-white">{item.title}</p>
                                                <p className="text-xs text-slate-500 dark:text-[#c9bb92]">{item.desc}</p>
                                            </div>
                                        </div>
                                        <div className="text-right shrink-0 pl-2">
                                            <p className={`font-bold ${selectedService.id === item.id ? "text-primary" : "text-slate-900 dark:text-white"}`}>{item.price}</p>
                                            <input
                                                readOnly
                                                checked={selectedService.id === item.id}
                                                className="hidden"
                                                name="service"
                                                type="radio"
                                                value={item.id}
                                            />
                                        </div>
                                    </label>
                                ))}
                            </div>
                        </section>
                        {/* Section: Select Staff */}
                        <section className="bg-white dark:bg-[#332d19] rounded-xl border border-slate-200 dark:border-[#675a32] overflow-hidden">
                            <h2 className="text-lg font-bold px-6 py-4 border-b border-slate-200 dark:border-[#675a32] flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">person</span>
                                2. Choose Specialist
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 max-h-[300px] overflow-y-auto">
                                {teamMembers.map((member, i) => (
                                    <div
                                        key={i}
                                        onClick={() => setSelectedStaffId(member.name)}
                                        className={`flex items-center gap-3 rounded-lg border-2 p-3 cursor-pointer transition-all ${selectedStaffId === member.name ? "border-primary bg-primary/5 ring-1 ring-primary/20" : "border-slate-200 dark:border-[#675a32] bg-transparent hover:border-primary/50"}`}
                                    >
                                        <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 shrink-0 border border-slate-200 dark:border-white/20" style={{ backgroundImage: `url("${member.avatar}")` }}></div>
                                        <div className="flex flex-col gap-0.5 min-w-0">
                                            <h3 className="text-slate-900 dark:text-white text-sm font-bold truncate">{member.name}</h3>
                                            <p className="text-slate-500 dark:text-[#c9bb92] text-xs truncate">{member.role}</p>
                                        </div>
                                        {selectedStaffId === member.name && <span className="ml-auto text-primary material-symbols-outlined text-base">check_circle</span>}
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                    {/* Right Column: Calendar & Summary */}
                    <div className="lg:col-span-6 space-y-6">
                        {/* Calendar Section */}
                        <div className="bg-white dark:bg-[#332d19] rounded-xl border border-slate-200 dark:border-[#675a32] overflow-hidden p-6">
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-xl font-bold flex items-center gap-2">
                                    <span className="material-symbols-outlined text-primary">calendar_month</span>
                                    Select Date & Time
                                </h2>
                            </div>
                            {/* Date Scroll */}
                            <div className="flex gap-2 text-center mb-6 overflow-x-auto pb-4 items-center">
                                {dates.map((d, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setSelectedDate(d.dateStr)}
                                        className={`flex flex-col min-w-[60px] cursor-pointer rounded-lg border p-2 transition-all ${selectedDate === d.dateStr ? "bg-primary border-primary text-background-dark shadow-lg shadow-primary/30" : "bg-white dark:bg-white/5 border-slate-200 dark:border-white/10 hover:border-primary/50 text-slate-900 dark:text-white"}`}
                                    >
                                        <span className={`text-[10px] uppercase font-bold ${selectedDate === d.dateStr ? "opacity-70" : "opacity-50"}`}>{d.month}</span>
                                        <span className="text-xl font-bold my-1">{d.dayNum}</span>
                                        <span className={`text-[10px] uppercase font-bold ${selectedDate === d.dateStr ? "opacity-70" : "opacity-50"}`}>{d.dayName}</span>
                                    </button>
                                ))}
                            </div>
                            {/* Time Slots Grid */}
                            <h3 className="text-sm font-bold text-slate-400 dark:text-[#c9bb92] uppercase tracking-wider mb-4">Available Slots</h3>
                            <div className="grid grid-cols-4 gap-2">
                                {timeSlots.map((time, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setSelectedTime(time)}
                                        className={`py-2 border-2 rounded text-sm font-bold transition-all ${selectedTime === time ? "border-primary bg-primary/10 text-primary" : "border-slate-200 dark:border-[#675a32] hover:border-primary hover:text-primary text-slate-600 dark:text-slate-300"}`}
                                    >
                                        {time}
                                    </button>
                                ))}
                            </div>
                        </div>
                        {/* Booking Summary Sticky-style */}
                        <div className="bg-[#2a2514] dark:bg-[#1a160d] border border-[#eebd2b]/30 rounded-xl p-6 shadow-2xl sticky top-24">
                            <div className="flex flex-col gap-6">
                                <div className="space-y-1">
                                    <h3 className="text-white font-bold text-lg">Booking Summary</h3>
                                    <p className="text-[#c9bb92] text-sm">
                                        <span className="text-white font-semibold">{selectedService.title}</span> with <span className="text-white font-semibold">{selectedStaffId}</span>
                                    </p>
                                    <div className="flex items-center gap-4 pt-4 border-t border-white/10 mt-4">
                                        <div className="flex items-center gap-2 text-xs text-primary bg-primary/10 px-3 py-1.5 rounded-full border border-primary/20">
                                            <span className="material-symbols-outlined text-[16px]">calendar_today</span> {selectedDate || "Select Date"}
                                        </div>
                                        <div className="flex items-center gap-2 text-xs text-primary bg-primary/10 px-3 py-1.5 rounded-full border border-primary/20">
                                            <span className="material-symbols-outlined text-[16px]">schedule</span> {selectedTime || "Select Time"}
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between gap-6 pt-2">
                                    <div>
                                        <p className="text-[#c9bb92] text-xs uppercase font-bold tracking-widest">Total Amount</p>
                                        <p className="text-white text-3xl font-black">{selectedService.price}</p>
                                    </div>
                                    <button
                                        onClick={handleBooking}
                                        disabled={isPending || !selectedDate || !selectedTime}
                                        className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-lg h-14 px-6 bg-primary text-background-dark text-base font-black transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/20 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isPending ? "Booking..." : "Confirm"}
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
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
