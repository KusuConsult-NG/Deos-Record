import Link from "next/link";
import Image from "next/image";
import Footer from "../../components/Footer";

export default function AboutPage() {
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
                    <Link className="text-sm font-medium hover:text-primary transition-colors" href="/services">Services</Link>
                    <Link className="text-sm font-medium hover:text-primary transition-colors" href="/portfolio">Portfolio</Link>
                    <Link className="text-sm text-primary font-bold" href="/about">About</Link>
                </nav>
                <Link href="/contact">
                    <button className="hidden md:flex min-w-[100px] cursor-pointer items-center justify-center rounded-lg h-10 px-5 border border-primary text-primary text-sm font-bold transition-transform active:scale-95 hover:bg-primary hover:text-background-dark">
                        Contact Us
                    </button>
                </Link>
            </header>

            <main className="flex-1 max-w-7xl mx-auto w-full px-4 md:px-10 py-12">
                {/* Hero Section */}
                <section className="flex flex-col md:flex-row items-center gap-12 mb-24">
                    <div className="flex-1 space-y-6">
                        <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest rounded-full">Since 2012</div>
                        <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white leading-[1.1]">
                            Amplifying the <span className="text-primary">Soul</span> of Abuja.
                        </h1>
                        <p className="text-lg text-slate-600 dark:text-[#c9bb92] leading-relaxed max-w-xl">
                            Deos Record started as a bedroom studio with a dream: to give African artists a world-class platform. Today, we are the heartbeat of the creative scene in Abuja, producing award-winning audio and visual content.
                        </p>
                        <div className="flex gap-6 pt-4">
                            <div className="flex flex-col">
                                <span className="text-3xl font-black text-slate-900 dark:text-white">500+</span>
                                <span className="text-xs uppercase text-slate-500 tracking-wider">Projects</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-3xl font-black text-slate-900 dark:text-white">50+</span>
                                <span className="text-xs uppercase text-slate-500 tracking-wider">Awards</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-3xl font-black text-slate-900 dark:text-white">100%</span>
                                <span className="text-xs uppercase text-slate-500 tracking-wider">Passion</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 w-full aspect-square md:aspect-4/3 bg-slate-200 dark:bg-white/5 rounded-2xl overflow-hidden relative border border-slate-200 dark:border-white/10">
                        {/* Simulated Studio Image */}
                        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAc_COzIl4xngUoti_7DrRT9Xprn1lHMl0RdtB7T5hwQRv6IV2HTnGVwWGpKYijMua_wpZXB2KZki7R75emC-D0Tqo00ERRcVRcG8wpmWBz_b7gbb3Ky2ML6QlMZp-D2LfSFoZl92ojRX-UpexFHQpWpPlqt7rpj1t6HN0YMUyES1Clttbn-AAL-aV_qdA1eOmkRvkGaRptBs_Bk6BjfASg3Ha7OgtWeMn-cLO7gEM3YH7tIigUwI5yjz-Gg7a-rUs_JfMuMkr21mg")' }}></div>
                        <div className="absolute inset-0 bg-primary/20 mix-blend-overlay"></div>
                    </div>
                </section>

                {/* Mission / Values */}
                <section className="mb-24 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="p-8 rounded-2xl bg-white dark:bg-[#221d10] border border-slate-200 dark:border-[#483f23] shadow-lg shadow-black/5">
                        <span className="material-symbols-outlined text-4xl text-primary mb-4">diamond</span>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Premium Quality</h3>
                        <p className="text-slate-500 dark:text-[#9e9475] text-sm leading-relaxed">We don&apos;t compromise. From our Neve preamps to our RED cameras, we invest in the best to make you look and sound your best.</p>
                    </div>
                    <div className="p-8 rounded-2xl bg-white dark:bg-[#221d10] border border-slate-200 dark:border-[#483f23] shadow-lg shadow-black/5">
                        <span className="material-symbols-outlined text-4xl text-primary mb-4">groups</span>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Community First</h3>
                        <p className="text-slate-500 dark:text-[#9e9475] text-sm leading-relaxed">We are more than a studio; we are a hub. We host listening parties, workshops, and collaborate with local talent to grow the industry.</p>
                    </div>
                    <div className="p-8 rounded-2xl bg-white dark:bg-[#221d10] border border-slate-200 dark:border-[#483f23] shadow-lg shadow-black/5">
                        <span className="material-symbols-outlined text-4xl text-primary mb-4">rocket_launch</span>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Innovation</h3>
                        <p className="text-slate-500 dark:text-[#9e9475] text-sm leading-relaxed">We stay ahead of the curve, embracing Dolby Atmos, VR recording, and AI-assisted mastering workflows.</p>
                    </div>
                </section>

                {/* Team Callout */}
                <section className="text-center bg-slate-900 dark:bg-black rounded-3xl p-16 md:p-24 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://lh3.googleusercontent.com/aida-public/AB6AXuDDBhnA8W4UlN3kO6aPSaf-RjYL0HECExiTMUVnr60bJ39i09longP4D2YD1qw_X-MslEbITKQ4A509LsI-AzYSdTfBhVY9-QR8IW4ojRW86CD3MUfaUmFjldobo_jtry6hXsft6ySz1McFiyYJyipKDbo-KwhxnU0GdyHBYSZqanjOuc_7Kmhx6B35QcqX6sMMMRqpNl0BcZCTylvbWm5iBurPj-ce6jLV_rHj_hsgbJdYRr-V0fYqDx69_9rE9j4q08A620TUkqU')] bg-cover bg-center opacity-20"></div>
                    <div className="absolute inset-0 bg-linear-to-t from-black via-black/80 to-transparent"></div>

                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Meet the Visionaries</h2>
                        <p className="text-slate-400 text-lg mb-10">
                            Our team is composed of passionate audio engineers, filmmakers, and creative directors who live for their craft.
                        </p>
                        <Link href="/team" className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-primary transition-colors">
                            <span>View Team Profiles</span>
                            <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </Link>
                    </div>
                </section>

            </main>
        </div>
    );
}
