"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { usePaystackPayment } from 'react-paystack';
import { bookSession } from "../../actions/bookSession";
import { serviceCategories, teamMembers } from "../../data/services";

export default function BookingForm() {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();

    // State
    const [activeCategory, setActiveCategory] = useState("Vocals & Training Services");
    const [selectedServiceId, setSelectedServiceId] = useState("");
    const [selectedStaffId, setSelectedStaffId] = useState(teamMembers[0]?.name || "Tunde Deos");

    // User Details State
    const [clientName, setClientName] = useState("");
    const [clientEmail, setClientEmail] = useState("");
    const [clientPhone, setClientPhone] = useState("");

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
    const allTimeSlots = ["09:00", "10:30", "12:00", "13:30", "15:00", "16:30", "18:00", "19:30"];

    // Filter Time Slots for Today
    const timeSlots = allTimeSlots.filter(time => {
        if (!selectedDate) return true;
        const today = new Date();
        const selected = new Date(selectedDate);

        // If not today, show all
        if (selected.getDate() !== today.getDate() || selected.getMonth() !== today.getMonth()) {
            return true;
        }

        // If today, check time
        const [hours, minutes] = time.split(':').map(Number);
        const slotTime = new Date(today);
        slotTime.setHours(hours, minutes, 0);

        return slotTime > new Date();
    });

    // Set Default Date on Mount
    if (!selectedDate && dates[0]) {
        setSelectedDate(dates[0].dateStr);
    }

    // Find Selected Service Object
    const allServices = serviceCategories.flatMap(c => c.items);
    const selectedService = allServices.find(s => s.id === selectedServiceId) || allServices[0];

    // Paystack Configuration
    const amountInKobo = parseInt(selectedService.price.replace(/[^0-9]/g, ''), 10) * 100;

    const config = {
        reference: (new Date()).getTime().toString(),
        email: clientEmail,
        amount: amountInKobo,
        publicKey: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY || 'pk_test_0000000000000000000000000000000000000000',
        metadata: {
            custom_fields: [
                { display_name: "Service", variable_name: "service", value: selectedService.title },
                { display_name: "Client Name", variable_name: "client_name", value: clientName }
            ]
        }
    };

    const initializePayment = usePaystackPayment(config);

    const submitBooking = (reference: string) => {
        startTransition(async () => {
            const formData = new FormData();
            formData.append("serviceId", selectedService.id);
            formData.append("serviceName", selectedService.title);
            formData.append("price", selectedService.price);
            formData.append("staff", selectedStaffId);
            formData.append("date", selectedDate);
            formData.append("time", selectedTime);

            // Append User Details
            formData.append("clientName", clientName);
            formData.append("clientEmail", clientEmail);
            formData.append("clientPhone", clientPhone);
            formData.append("paymentReference", reference);

            const result = await bookSession(null, formData);
            if (result.success) {
                router.push(`/confirmation?id=${result.bookingId}`);
            } else {
                alert(result.message || "Booking failed. Save your receipt reference: " + reference);
            }
        });
    };

    const onSuccess = (reference: any) => {
        submitBooking(reference.reference);
    };

    const onClose = () => {
        alert("Payment canceled. Please complete payment to book your session.");
    };

    const handleBooking = (e: any) => {
        e.preventDefault();

        if (!selectedDate || !selectedTime) {
            alert("Please select a date and time for your session.");
            return;
        }
        if (!clientName || !clientEmail || !clientPhone) {
            alert("Please fill in your contact details (Name, Email, Phone).");
            return;
        }

        // @ts-ignore
        initializePayment(onSuccess, onClose);
    };

    const handlePayLater = (e: any) => {
        e.preventDefault();

        if (!selectedDate || !selectedTime) {
            alert("Please select a date and time for your session.");
            return;
        }
        if (!clientName || !clientEmail || !clientPhone) {
            alert("Please fill in your contact details (Name, Email, Phone).");
            return;
        }

        submitBooking("PAY_LATER");
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column */}
            <div className="lg:col-span-6 space-y-8">
                {/* 1. Select Service */}
                <section className="bg-white dark:bg-[#332d19] rounded-xl border border-slate-200 dark:border-[#675a32] overflow-hidden flex flex-col max-h-[600px]">
                    <h2 className="text-lg font-bold px-6 py-4 border-b border-slate-200 dark:border-[#675a32] flex items-center gap-2 shrink-0">
                        <span className="material-symbols-outlined text-primary">layers</span>
                        1. Select Service
                    </h2>
                    <div className="flex border-b border-slate-100 dark:border-[#483f23] px-2 gap-2 overflow-x-auto shrink-0 z-10 bg-white dark:bg-[#332d19]">
                        {serviceCategories.map((cat, i) => (
                            <button
                                key={i}
                                onClick={() => {
                                    setActiveCategory(cat.category);
                                    if (cat.items.length > 0) {
                                        setSelectedServiceId(cat.items[0].id);
                                    }
                                }}
                                className={`flex items-center gap-2 px-4 py-3 border-b-2 text-sm font-bold whitespace-nowrap transition-colors ${activeCategory === cat.category ? "border-primary text-primary" : "border-transparent text-slate-500 hover:text-primary dark:text-[#c9bb92]"}`}
                            >
                                <span className="material-symbols-outlined text-[20px]">{cat.icon}</span> {cat.category.split(" ")[0]}
                            </button>
                        ))}
                    </div>
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

                {/* 2. Choose Specialist */}
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

                {/* 3. User Details */}
                <section className="bg-white dark:bg-[#332d19] rounded-xl border border-slate-200 dark:border-[#675a32] overflow-hidden">
                    <h2 className="text-lg font-bold px-6 py-4 border-b border-slate-200 dark:border-[#675a32] flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary">contact_mail</span>
                        3. Contact Details
                    </h2>
                    <div className="p-6 space-y-4">
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-[#c9bb92] mb-1">Full Name</label>
                            <input
                                type="text"
                                value={clientName}
                                onChange={(e) => setClientName(e.target.value)}
                                placeholder="Enter your full name"
                                className="w-full p-3 rounded-lg border border-slate-200 dark:border-[#5a5035] bg-white dark:bg-[#221e11] text-slate-900 dark:text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                            />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-[#c9bb92] mb-1">Email Address</label>
                                <input
                                    type="email"
                                    value={clientEmail}
                                    onChange={(e) => setClientEmail(e.target.value)}
                                    placeholder="you@email.com"
                                    className="w-full p-3 rounded-lg border border-slate-200 dark:border-[#5a5035] bg-white dark:bg-[#221e11] text-slate-900 dark:text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-[#c9bb92] mb-1">Phone Number</label>
                                <input
                                    type="tel"
                                    value={clientPhone}
                                    onChange={(e) => setClientPhone(e.target.value)}
                                    placeholder="080 1234 5678"
                                    className="w-full p-3 rounded-lg border border-slate-200 dark:border-[#5a5035] bg-white dark:bg-[#221e11] text-slate-900 dark:text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-6 space-y-6">
                {/* Calendar */}
                <div className="bg-white dark:bg-[#332d19] rounded-xl border border-slate-200 dark:border-[#675a32] overflow-hidden p-6">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-xl font-bold flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary">calendar_month</span>
                            Select Date & Time
                        </h2>
                    </div>
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

                {/* Booking Summary */}
                <div className="bg-[#2a2514] dark:bg-[#1a160d] border border-[#eebd2b]/30 rounded-xl p-6 shadow-2xl sticky top-24">
                    <div className="flex flex-col gap-6">
                        <div className="space-y-1">
                            <h3 className="text-white font-bold text-lg">Booking Summary</h3>
                            <p className="text-[#c9bb92] text-sm md:text-base">
                                <span className="text-white font-semibold">{selectedService.title}</span> with <span className="text-white font-semibold">{selectedStaffId}</span>
                            </p>
                            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10 mt-4">
                                <div className="flex items-center gap-2 text-xs text-primary bg-primary/10 px-3 py-1.5 rounded-full border border-primary/20 whitespace-nowrap">
                                    <span className="material-symbols-outlined text-[16px]">calendar_today</span> {selectedDate || "Select Date"}
                                </div>
                                <div className="flex items-center gap-2 text-xs text-primary bg-primary/10 px-3 py-1.5 rounded-full border border-primary/20 whitespace-nowrap">
                                    <span className="material-symbols-outlined text-[16px]">schedule</span> {selectedTime || "Select Time"}
                                </div>
                            </div>
                            {clientName && (
                                <div className="pt-2 text-xs text-[#c9bb92]/60">
                                    Booking for: <span className="text-[#c9bb92] font-semibold">{clientName}</span>
                                </div>
                            )}
                        </div>
                        <div className="flex flex-col gap-4 pt-2">
                            <div className="flex justify-between items-end">
                                <div>
                                    <p className="text-[#c9bb92] text-xs uppercase font-bold tracking-widest">Total Amount</p>
                                    <p className="text-white text-3xl font-black">{selectedService.price}</p>
                                </div>
                            </div>
                            <button
                                onClick={handleBooking}
                                disabled={isPending || !selectedDate || !selectedTime || !clientName || !clientEmail || !clientPhone}
                                className="flex w-full cursor-pointer items-center justify-center rounded-lg h-14 px-6 bg-primary text-background-dark text-base font-black transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/20 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-wide gap-2"
                            >
                                <span className="material-symbols-outlined">lock</span>
                                {isPending ? "Processing..." : "Pay & Confirm"}
                            </button>
                            <button
                                onClick={handlePayLater}
                                disabled={isPending || !selectedDate || !selectedTime || !clientName || !clientEmail || !clientPhone}
                                className="flex w-full cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-transparent border border-white/20 text-white text-sm font-bold transition-all hover:bg-white/10 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-wide gap-2"
                            >
                                <span className="material-symbols-outlined">payments</span>
                                Book Now (Pay at Venue)
                            </button>
                            <div className="flex justify-center">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/2/29/Paystack_Logo.png" alt="Secured by Paystack" className="h-4 opacity-50 grayscale hover:grayscale-0 transition-all" />
                            </div>
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
    );
}
