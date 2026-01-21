
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-background-light dark:bg-background-dark border-t border-slate-200 dark:border-white/5 py-16 px-6">
            <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
                <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-3">
                        <div className="size-8 bg-primary rounded-full flex items-center justify-center text-white">
                            <span className="material-symbols-outlined text-lg">graphic_eq</span>
                        </div>
                        <h2 className="text-lg font-bold tracking-tight text-slate-900 dark:text-gold">Deos Record</h2>
                    </div>
                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                        Abuja&apos;s premier multi-media studio for professional podcasters, musicians, and filmmakers.
                    </p>
                    <div className="flex gap-4">
                        <Link className="size-10 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-gold transition-colors" href="#">
                            <span className="material-symbols-outlined text-xl">brand_awareness</span>
                        </Link>
                        <Link className="size-10 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-gold transition-colors" href="#">
                            <span className="material-symbols-outlined text-xl">video_stable</span>
                        </Link>
                    </div>
                </div>
                <div>
                    <h4 className="font-bold mb-6 text-slate-900 dark:text-white">Quick Links</h4>
                    <ul className="flex flex-col gap-4 text-sm text-slate-500 dark:text-slate-400">
                        <li><Link className="hover:text-primary dark:hover:text-gold transition-colors" href="/">Home</Link></li>
                        <li><Link className="hover:text-primary dark:hover:text-gold transition-colors" href="/about">About Us</Link></li>
                        <li><Link className="hover:text-primary dark:hover:text-gold transition-colors" href="/services">Studio Services</Link></li>
                        <li><Link className="hover:text-primary dark:hover:text-gold transition-colors" href="/portfolio">Artist Portfolio</Link></li>
                        <li><Link className="hover:text-primary dark:hover:text-gold transition-colors" href="/pricing">Pricing</Link></li>
                        <li><Link className="hover:text-primary dark:hover:text-gold transition-colors" href="/team">Our Team</Link></li>
                        <li><Link className="hover:text-primary dark:hover:text-gold transition-colors" href="/blog">Blog</Link></li>
                        <li><Link className="hover:text-primary dark:hover:text-gold transition-colors" href="/booking">Book a Session</Link></li>
                        <li><Link className="hover:text-primary dark:hover:text-gold transition-colors" href="/contact">Contact</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold mb-6 text-slate-900 dark:text-white">Contact</h4>
                    <ul className="flex flex-col gap-4 text-sm text-slate-500 dark:text-slate-400">
                        <li className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-primary dark:text-gold text-lg">location_on</span>
                            <a href="https://maps.google.com/?q=Suit+c3,+Jodepal+Plaza,+1st+Avenue+Gwarimpa,+Abuja" target="_blank" rel="noopener noreferrer" className="hover:text-primary dark:hover:text-gold transition-colors">Suit c3, Jodepal Plaza, 1st Avenue Gwarimpa, Abuja</a>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-primary dark:text-gold text-lg">call</span>
                            <a href="tel:+2348001234567" className="hover:text-primary dark:hover:text-gold transition-colors">+234 800 123 4567</a>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-primary dark:text-gold text-lg">mail</span>
                            <a href="mailto:deosstudio33@gmail.com" className="hover:text-primary dark:hover:text-gold transition-colors">deosstudio33@gmail.com</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold mb-6 text-slate-900 dark:text-white">Location</h4>
                    <div className="h-40 w-full rounded-xl overflow-hidden bg-slate-200 dark:bg-white/5">
                        <div className="w-full h-full bg-cover bg-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500" style={{ backgroundImage: "url('/images/studio/studio-room.jpg')" }}></div>
                    </div>
                </div>
            </div>
            <div className="max-w-[1280px] mx-auto mt-16 pt-8 border-t border-slate-200 dark:border-white/5 text-center text-xs text-slate-400 dark:text-slate-500">
                © 2024 Deos Record Studio. All rights reserved.
            </div>
        </footer>
    );
}
