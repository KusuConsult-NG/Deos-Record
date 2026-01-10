import Link from "next/link";
import Image from "next/image";
import Footer from "../../components/Footer";
import { serviceCategories } from "../data/services";

export default function ServicesPage() {
    return (
        <div className="flex-1 flex flex-col min-h-screen">
            <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-[#483f23] px-10 py-3 bg-background-light dark:bg-background-dark sticky top-0 z-50">
                <div className="flex items-center gap-4 text-slate-900 dark:text-white">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="h-10 w-10 relative rounded-full overflow-hidden">
                            <Image src="/logo.jpg" alt="Deos Record" layout="fill" objectFit="cover" />
                        </div>
                        <span className="text-lg font-bold">Deos Record</span>
                    </Link>
                </div>
                <nav className="hidden md:flex items-center gap-9">
                    <Link className="text-sm font-medium hover:text-primary transition-colors" href="/team">Studio</Link>
                    <Link className="text-sm text-primary font-bold" href="/services">Services</Link>
                    <Link className="text-sm font-medium hover:text-primary transition-colors" href="/portfolio">Portfolio</Link>
                    <Link className="text-sm font-medium hover:text-primary transition-colors" href="/about">About</Link>
                </nav>
                <Link href="/booking">
                    <button className="hidden md:flex min-w-[100px] cursor-pointer items-center justify-center rounded-lg h-10 px-5 bg-primary text-background-dark text-sm font-bold transition-transform active:scale-95">
                        Book Now
                    </button>
                </Link>
            </header>

            <main className="flex-1 max-w-7xl mx-auto w-full px-4 md:px-10 py-12">
                {/* Page Heading */}
                <div className="mb-16 text-center max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-black mb-6 text-slate-900 dark:text-white">Our Services & Rates</h1>
                    <p className="text-slate-600 dark:text-[#c9bb92] text-lg leading-relaxed">
                        A fully equipped professional hub in Abuja. From training to high-end production, find the perfect package for your creative needs.
                    </p>
                </div>

                {/* Service Categories Loop */}
                <div className="space-y-20">
                    {serviceCategories.map((cat, i) => (
                        <div key={i} className="scroll-mt-24" id={cat.category.toLowerCase().replace(/\s+/g, '-')}>
                            <div className="flex items-center gap-4 mb-8 border-b border-slate-200 dark:border-white/10 pb-4">
                                <div className="p-3 rounded-full bg-primary/10 text-primary">
                                    <span className="material-symbols-outlined text-3xl">{cat.icon}</span>
                                </div>
                                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">{cat.category}</h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {cat.items.map((item, j) => (
                                    <div key={j} className="group p-6 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-primary/50 transition-all hover:-translate-y-1 flex flex-col">
                                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                                        <p className="text-slate-500 dark:text-slate-400 text-sm mb-4 leading-relaxed flex-1">{item.desc}</p>
                                        <div className="mt-4 pt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
                                            <span className="text-primary font-bold text-lg">{item.price}</span>
                                            <Link href="/booking" className="text-xs font-bold uppercase tracking-wider text-slate-400 hover:text-white transition-colors bg-slate-100 dark:bg-white/5 px-3 py-1.5 rounded-lg group-hover:bg-primary group-hover:text-background-dark">
                                                Book
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-24 rounded-3xl bg-slate-900 dark:bg-[#1a160d] border border-slate-800 dark:border-[#483f23] p-10 md:p-16 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -ml-32 -mb-32"></div>

                    <div className="relative z-10 max-w-2xl mx-auto space-y-6">
                        <h2 className="text-3xl md:text-4xl font-black text-white">Custom Project?</h2>
                        <p className="text-slate-400 text-lg">
                            Don&apos;t see exactly what you need? We offer tailored solutions for large-scale productions and unique requirements.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                            <Link href="/contact" className="px-8 py-4 rounded-xl bg-white text-slate-900 font-bold hover:bg-slate-100 transition-colors">Contact Support</Link>
                            <Link href="/booking" className="px-8 py-4 rounded-xl bg-primary text-background-dark font-bold hover:scale-105 transition-transform">Book Consultation</Link>
                        </div>
                    </div>
                </div>

            </main>
            <Footer />
        </div>
    );
}
