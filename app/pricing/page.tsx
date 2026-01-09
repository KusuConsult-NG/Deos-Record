
import Link from "next/link";
import Image from "next/image";
import Footer from "../../components/Footer";

export default function PricingPage() {
    return (
        <div className="flex-1 flex flex-col min-h-screen">
            {/* Top Navigation Bar */}
            <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-[#483f23] px-10 py-3 bg-background-light dark:bg-background-dark">
                <div className="flex items-center gap-4">
                    <div className="h-10 w-10 relative rounded-full overflow-hidden">
                        <Image src="/logo.jpg" alt="Deos Record" layout="fill" objectFit="cover" />
                    </div>
                    <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">Deos Record</h2>
                </div>
                <div className="flex flex-1 justify-end gap-8">
                    <nav className="flex items-center gap-9">
                        <Link className="text-slate-700 dark:text-white text-sm font-medium leading-normal hover:text-primary transition-colors" href="/">Home</Link>
                        <Link className="text-slate-700 dark:text-white text-sm font-medium leading-normal hover:text-primary transition-colors" href="/services">Services</Link>
                        <Link className="text-primary text-sm font-bold leading-normal" href="/pricing">Pricing</Link>
                        <Link className="text-slate-700 dark:text-white text-sm font-medium leading-normal hover:text-primary transition-colors" href="/portfolio">Gallery</Link>
                        <Link className="text-slate-700 dark:text-white text-sm font-medium leading-normal hover:text-primary transition-colors" href="/about">About</Link>
                    </nav>
                    <Link href="/booking" className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-[#221e11] text-sm font-bold leading-normal tracking-[0.015em]">
                        <span className="truncate">Book Session</span>
                    </Link>
                    <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border border-[#483f23]" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBWxAkpU7ghtw2hSoB6EhgLhZTT1hAuArqhd-Mq43OYRVafjxx0XZuAPi986bXQJ28tLhYKV3wFmEDSBMjjL5vQ_PhfD0e1CIPnEadZ5UMgqDJ4G9ERSaKb3I6NJuTIU5XCEmKv6xd6rJt51WdLt_vLwT204KoH1dYftoyFEW3UJCls-QePvBv4uApEMRynOdTr1oqnmSci7ZFQ0rK4zZ4HSEVT53GudQAP1QbL6GEvydFK1pkbuGxJVOvxfjQRuEim1yRQF1SxbPI")' }}></div>
                </div>
            </header>
            <main className="flex-1 flex flex-col items-center">
                {/* Hero Section */}
                <div className="w-full max-w-[1200px] px-4 pt-10 pb-6">
                    <div className="@container">
                        <div className="@[480px]:p-4">
                            <div className="flex min-h-[320px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-8 relative overflow-hidden" style={{ backgroundImage: 'linear-gradient(rgba(34, 29, 16, 0.85) 0%, rgba(34, 29, 16, 0.95) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuD8tsMO-4SFO4SDFQeJFYNZgzkJzX2YDb1VRsk8tqs6ySCgt5FJCJaXsRf7uEDTa6D3OCY3k4BZDT2OWMWHREWmVcz_MpGHgeNLZEkc_RFyqXDt2BiGsqYY4CzUFCa9fqMguIX-8XqBjkEMZsn9WGruuMZrtgnlNCDHpnVXNqfXCIN0EJXLlt5ZqH4Oh8lgj8M-3TWi8NBcReP4EKI8T56pWnEJDpsT9A9vX2ON7gAcxtK4PYtNd_GquEf-iMiOVS3bCLJJKil5rlE")' }}>
                                <div className="flex flex-col gap-3 text-center max-w-[700px] relative z-10">
                                    <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-6xl">
                                        Packages &amp; Pricing
                                    </h1>
                                    <p className="text-slate-300 text-sm font-normal leading-relaxed @[480px]:text-lg">
                                        Elevate your sound and vision with Abuja&apos;s premier multi-media production studio. Choose a professional plan tailored to your creative journey.
                                    </p>
                                </div>
                                <Link href="/services" className="relative z-10 flex min-w-[120px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-[#221e11] text-base font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-all">
                                    <span className="truncate">View All Services</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Segmented Control */}
                <div className="w-full max-w-[960px] px-4">
                    <div className="flex px-4 py-6 justify-center">
                        <div className="flex h-12 w-full max-w-[400px] items-center justify-center rounded-xl bg-slate-200 dark:bg-[#483f23] p-1.5">
                            <label className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-4 has-checked:bg-white dark:has-checked:bg-[#221e11] has-checked:shadow-md text-slate-600 dark:text-[#c9bb92] has-checked:text-slate-900 dark:has-checked:text-white text-sm font-bold leading-normal transition-all">
                                <span className="truncate">Single Session</span>
                                <input defaultChecked className="invisible w-0" name="pricing-toggle" type="radio" value="single" />
                            </label>
                            <label className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-4 has-checked:bg-white dark:has-checked:bg-[#221e11] has-checked:shadow-md text-slate-600 dark:text-[#c9bb92] has-checked:text-slate-900 dark:has-checked:text-white text-sm font-bold leading-normal transition-all">
                                <span className="truncate">Monthly Retainer</span>
                                <input className="invisible w-0" name="pricing-toggle" type="radio" value="monthly" />
                            </label>
                        </div>
                    </div>
                </div>
                {/* Pricing Cards Grid */}
                <div className="w-full max-w-[1200px] px-4 pb-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
                        {/* Creative Plan */}
                        <div className="flex flex-col gap-6 rounded-xl border border-solid border-slate-200 dark:border-[#483f23] bg-white dark:bg-[#2b2515] p-8 hover:border-primary/50 transition-all">
                            <div className="flex flex-col gap-2">
                                <h3 className="text-slate-500 dark:text-[#c9bb92] text-sm font-bold uppercase tracking-widest">Entry Tier</h3>
                                <h1 className="text-slate-900 dark:text-white text-2xl font-bold leading-tight">Creative</h1>
                                <p className="flex items-baseline gap-1 mt-2">
                                    <span className="text-slate-400 dark:text-[#c9bb92] text-xl font-bold">₦</span>
                                    <span className="text-slate-900 dark:text-white text-5xl font-black tracking-tighter">25k</span>
                                    <span className="text-slate-500 dark:text-[#c9bb92] text-sm font-medium">/ session</span>
                                </p>
                            </div>
                            <Link href="/booking" className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-4 bg-slate-100 dark:bg-[#483f23] text-slate-900 dark:text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary hover:text-[#221e11] transition-all">
                                <span className="truncate">Get Started</span>
                            </Link>
                            <div className="flex flex-col gap-4 mt-2">
                                {[
                                    "1-hour podcast session",
                                    "Basic vocal recording",
                                    "Raw file delivery",
                                    "Standard studio setup"
                                ].map((item, i) => (
                                    <div key={i} className="text-sm font-medium leading-normal flex items-center gap-3 text-slate-700 dark:text-slate-200">
                                        <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Pro Studio Plan (Featured) */}
                        <div className="flex flex-col gap-6 rounded-xl border-2 border-solid border-primary bg-white dark:bg-[#332d19] p-8 shadow-2xl relative scale-105 z-10">
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-[#221e11] text-[10px] font-black uppercase tracking-widest rounded-full px-4 py-1 shadow-lg">
                                Most Popular
                            </div>
                            <div className="flex flex-col gap-2">
                                <h3 className="text-primary text-sm font-bold uppercase tracking-widest">Mid-Level</h3>
                                <div className="flex items-center justify-between">
                                    <h1 className="text-slate-900 dark:text-white text-2xl font-bold leading-tight">Pro Studio</h1>
                                </div>
                                <p className="flex items-baseline gap-1 mt-2">
                                    <span className="text-primary text-xl font-bold">₦</span>
                                    <span className="text-slate-900 dark:text-white text-5xl font-black tracking-tighter">75k</span>
                                    <span className="text-slate-500 dark:text-[#c9bb92] text-sm font-medium">/ session</span>
                                </p>
                            </div>
                            <Link href="/booking" className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-4 bg-primary text-[#221e11] text-sm font-bold leading-normal tracking-[0.015em] hover:brightness-110 transition-all shadow-md shadow-primary/20">
                                <span className="truncate">Get Started</span>
                            </Link>
                            <div className="flex flex-col gap-4 mt-2">
                                {[
                                    "Full song production",
                                    "Professional mixing & mastering",
                                    "4K multi-cam podcasting",
                                    "Social media clips",
                                    "Dedicated Sound Engineer"
                                ].map((item, i) => (
                                    <div key={i} className="text-sm font-semibold leading-normal flex items-center gap-3 text-slate-900 dark:text-white">
                                        <span className="material-symbols-outlined text-primary text-[22px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Elite Production Plan */}
                        <div className="flex flex-col gap-6 rounded-xl border border-solid border-slate-200 dark:border-[#483f23] bg-white dark:bg-[#2b2515] p-8 hover:border-primary/50 transition-all">
                            <div className="flex flex-col gap-2">
                                <h3 className="text-slate-500 dark:text-[#c9bb92] text-sm font-bold uppercase tracking-widest">Premium Tier</h3>
                                <h1 className="text-slate-900 dark:text-white text-2xl font-bold leading-tight">Elite</h1>
                                <p className="flex items-baseline gap-1 mt-2">
                                    <span className="text-slate-400 dark:text-[#c9bb92] text-xl font-bold">₦</span>
                                    <span className="text-slate-900 dark:text-white text-5xl font-black tracking-tighter">250k</span>
                                    <span className="text-slate-500 dark:text-[#c9bb92] text-sm font-medium">/ day</span>
                                </p>
                            </div>
                            <Link href="/booking" className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-4 bg-slate-100 dark:bg-[#483f23] text-slate-900 dark:text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary hover:text-[#221e11] transition-all">
                                <span className="truncate">Get Started</span>
                            </Link>
                            <div className="flex flex-col gap-4 mt-2">
                                {[
                                    "Music video production",
                                    "Live streaming services",
                                    "Red carpet setup",
                                    "Full-day studio lockout",
                                    "Priority booking"
                                ].map((item, i) => (
                                    <div key={i} className="text-sm font-medium leading-normal flex items-center gap-3 text-slate-700 dark:text-slate-200">
                                        <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                {/* FAQ Section Header */}
                <div className="w-full max-w-[960px] px-4">
                    <h2 className="text-slate-900 dark:text-white text-3xl font-bold leading-tight tracking-[-0.015em] px-4 pb-10 pt-5 text-center">Frequently Asked Questions</h2>
                    <div className="flex flex-col gap-4 px-4 pb-20">
                        {["What is the standard turnaround time?", "Do you offer discounts for multi-day bookings?", "Can I bring my own engineer?"].map((question, i) => (
                            <div key={i} className="border-b border-slate-200 dark:border-[#483f23] py-4">
                                <div className="flex justify-between items-center cursor-pointer">
                                    <h3 className="text-slate-800 dark:text-white font-semibold">{question}</h3>
                                    <span className="material-symbols-outlined">expand_more</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Footer CTA */}
                <div className="w-full bg-slate-100 dark:bg-[#1a160b] py-16 px-4 flex flex-col items-center text-center">
                    <h2 className="text-2xl font-bold mb-4">Ready to start your next project?</h2>
                    <p className="text-slate-600 dark:text-[#c9bb92] mb-8 max-w-md">Contact our team for custom project quotes and enterprise solutions.</p>
                    <div className="flex gap-4">
                        <Link href="/contact" className="bg-primary text-[#221e11] px-8 py-3 rounded-lg font-bold">Contact Sales</Link>
                        <Link href="/team" className="border border-slate-300 dark:border-[#483f23] px-8 py-3 rounded-lg font-bold">Tour Studio</Link>
                    </div>
                </div>
            </main>
            {/* Bottom Footer Info */}
            <Footer />
        </div>
    );
}
