"use client";

import Link from "next/link";
import Footer from "../../components/Footer";
import { useTransition } from "react";
import { subscribeNewsletter } from "../actions/subscribe";

export default function BlogPage() {
    const [isPending, startTransition] = useTransition();

    const handleSubscribe = (formData: FormData) => {
        startTransition(async () => {
            await subscribeNewsletter(null, formData);
            alert("Subscribed!");
        });
    };

    return (
        <div className="flex-1 flex flex-col min-h-screen">
            {/* Top Navigation Bar */}
            <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-[#483f23] px-10 py-3 bg-background-light dark:bg-background-dark sticky top-0 z-50">
                <div className="flex items-center gap-4 text-slate-900 dark:text-white">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="size-6 text-primary">
                            <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24 45.8096C19.6865 45.8096 15.4698 44.5305 11.8832 42.134C8.29667 39.7376 5.50128 36.3314 3.85056 32.3462C2.19985 28.361 1.76794 23.9758 2.60947 19.7452C3.451 15.5145 5.52816 11.6284 8.57829 8.5783C11.6284 5.52817 15.5145 3.45101 19.7452 2.60948C23.9758 1.76795 28.361 2.19986 32.3462 3.85057C36.3314 5.50129 39.7376 8.29668 42.134 11.8833C44.5305 15.4698 45.8096 19.6865 45.8096 24L24 24L24 45.8096Z"></path>
                            </svg>
                        </div>
                        <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">Deos Record</h2>
                    </Link>
                </div>
                <div className="flex flex-1 justify-end gap-8 items-center">
                    <nav className="hidden md:flex items-center gap-9">
                        <Link className="text-sm font-medium leading-normal hover:text-primary transition-colors" href="/team">Studio</Link>
                        <Link className="text-sm font-medium leading-normal hover:text-primary transition-colors" href="/services">Services</Link>
                        <Link className="text-sm font-medium leading-normal hover:text-primary transition-colors" href="/portfolio">Portfolio</Link>
                        <Link className="text-sm leading-normal text-primary font-bold" href="/blog">Blog</Link>
                    </nav>
                    <button className="flex min-w-[100px] cursor-pointer items-center justify-center rounded-lg h-10 px-5 bg-primary text-background-dark text-sm font-bold transition-transform active:scale-95">
                        Subscribe
                    </button>
                </div>
            </header>
            <main className="flex-1 max-w-7xl mx-auto w-full px-4 md:px-10 py-12">
                {/* Page Heading & Search */}
                <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-12 border-b border-slate-200 dark:border-[#483f23] pb-8">
                    <div className="flex flex-col gap-4 max-w-2xl">
                        <h1 className="text-slate-900 dark:text-white text-5xl font-black leading-tight tracking-[-0.033em]">Production Tips &amp; Insights</h1>
                        <p className="text-slate-600 dark:text-[#c9bb92] text-lg font-normal leading-relaxed">
                            Expert advice on recording, mixing, and content creation from the professionals at Deos Record.
                        </p>
                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mt-2">
                            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider cursor-pointer hover:bg-primary hover:text-background-dark transition-colors">
                                #Mixing
                            </span>
                            <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-[#c9bb92] text-xs font-bold uppercase tracking-wider cursor-pointer hover:text-primary transition-colors">
                                #Podcasting
                            </span>
                            <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-[#c9bb92] text-xs font-bold uppercase tracking-wider cursor-pointer hover:text-primary transition-colors">
                                #MusicBusiness
                            </span>
                            <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-[#c9bb92] text-xs font-bold uppercase tracking-wider cursor-pointer hover:text-primary transition-colors">
                                #VideoProduction
                            </span>
                        </div>
                    </div>
                    {/* Search Bar */}
                    <div className="w-full md:w-auto relative group">
                        <input className="w-full md:w-80 h-12 bg-white dark:bg-[#1a160d] border border-slate-200 dark:border-[#483f23] rounded-full px-5 pr-12 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-slate-900 dark:text-white" placeholder="Search articles..." type="text" />
                        <button className="absolute right-1 top-1 bottom-1 size-10 bg-primary rounded-full flex items-center justify-center text-background-dark hover:scale-105 transition-transform">
                            <span className="material-symbols-outlined text-[20px]">search</span>
                        </button>
                    </div>
                </div>
                {/* Featured Blog Card */}
                <div className="mb-16">
                    <div className="group relative rounded-2xl overflow-hidden aspect-16/9 md:aspect-21/9 flex items-end">
                        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: 'url("/images/studio/studio-room.jpg")' }}>
                            <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent"></div>
                        </div>
                        <div className="relative z-10 p-6 md:p-10 max-w-4xl space-y-4">
                            <span className="inline-block px-3 py-1 bg-primary text-background-dark text-xs font-bold uppercase tracking-widest rounded-md mb-2">Editor&apos;s Pick</span>
                            <h2 className="text-white text-3xl md:text-5xl font-black leading-tight group-hover:text-primary transition-colors cursor-pointer">
                                The Ultimate Guide to Acoustic Treatment for Home Studios
                            </h2>
                            <p className="text-slate-300 text-lg line-clamp-2 md:line-clamp-none">
                                Stop blaming your microphone. Learn how proper bass traps, diffusers, and absorption panels can transform your recordings from amateur to professional, without breaking the bank.
                            </p>
                            <div className="flex items-center gap-4 text-sm text-slate-400 font-medium pt-2">
                                <div className="flex items-center gap-2">
                                    <div className="size-8 rounded-full bg-gray-600 bg-cover" style={{ backgroundImage: 'url("/logo.jpg")' }}></div>
                                    <span className="text-white">Musa Bello</span>
                                </div>
                                <span>•</span>
                                <span>Oct 15, 2023</span>
                                <span>•</span>
                                <span>12 min read</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Latest Articles Grid */}
                <h2 className="text-2xl font-bold mb-8 flex items-center gap-2 text-slate-900 dark:text-white">
                    <span className="w-2 h-8 bg-primary rounded-sm"></span>
                    Latest Articles
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Article 1 */}
                    <div className="flex flex-col gap-4 group cursor-pointer">
                        <div className="aspect-3/2 rounded-xl overflow-hidden relative">
                            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: 'url("/images/studio/studio-podcast.jpg")' }}></div>
                            <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded text-white text-xs font-bold uppercase">Podcasting</div>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-tight group-hover:text-primary transition-colors">
                                5 Common Mistakes New Podcasters Make (And How to Fix Them)
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm line-clamp-3">
                                From bad audio levels to lack of consistency, we break down the most frequent pitfalls that stop podcasts from growing their audience.
                            </p>
                            <div className="flex items-center gap-2 text-xs text-slate-500 font-bold uppercase tracking-wider pt-1">
                                <span className="text-primary">Read More</span>
                                <span className="material-symbols-outlined text-[16px] text-primary group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </div>
                        </div>
                    </div>
                    {/* Article 2 */}
                    <div className="flex flex-col gap-4 group cursor-pointer">
                        <div className="aspect-3/2 rounded-xl overflow-hidden relative">
                            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: 'url("/images/studio/studio-console-close.jpg")' }}></div>
                            <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded text-white text-xs font-bold uppercase">Production</div>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-tight group-hover:text-primary transition-colors">
                                Understanding Compression: The Glue of Your Mix
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm line-clamp-3">
                                Compression can make or break a track. Learn the basics of threshold, ratio, attack, and release to get that punchy, professional sound.
                            </p>
                            <div className="flex items-center gap-2 text-xs text-slate-500 font-bold uppercase tracking-wider pt-1">
                                <span className="text-primary">Read More</span>
                                <span className="material-symbols-outlined text-[16px] text-primary group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </div>
                        </div>
                    </div>
                    {/* Article 3 */}
                    <div className="flex flex-col gap-4 group cursor-pointer">
                        <div className="aspect-3/2 rounded-xl overflow-hidden relative">
                            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: 'url("/images/studio/studio-desk-keyboard.jpg")' }}></div>
                            <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded text-white text-xs font-bold uppercase">Music Business</div>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-tight group-hover:text-primary transition-colors">
                                Distributing Your Music in Nigeria: 2024 Guide
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm line-clamp-3">
                                Navigating the complex world of music distribution. We review the best platforms for Nigerian artists to get their music on Spotify, Apple Music, and Boomplay.
                            </p>
                            <div className="flex items-center gap-2 text-xs text-slate-500 font-bold uppercase tracking-wider pt-1">
                                <span className="text-primary">Read More</span>
                                <span className="material-symbols-outlined text-[16px] text-primary group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Newsletter Signup */}
                <div className="mt-20 rounded-2xl overflow-hidden relative">
                    <div className="absolute inset-0 bg-slate-900">
                        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary via-slate-900 to-slate-900"></div>
                    </div>
                    <div className="relative z-10 p-10 md:p-16 text-center space-y-6">
                        <h2 className="text-3xl md:text-4xl font-black text-white">Join the Community</h2>
                        <p className="text-slate-400 max-w-lg mx-auto text-lg">
                            Get the latest tips, studio discounts, and industry news delivered straight to your inbox. No spam, just value.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <form action={handleSubscribe} className="flex flex-1 gap-4 w-full">
                                <input name="email" required className="flex-1 bg-white/10 border border-white/20 rounded-lg px-5 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-primary" placeholder="Enter your email" type="email" />
                                <button disabled={isPending} className="bg-primary text-background-dark font-bold px-8 py-3 rounded-lg hover:bg-white transition-colors disabled:opacity-50">
                                    {isPending ? "Subscribing..." : "Subscribe"}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
