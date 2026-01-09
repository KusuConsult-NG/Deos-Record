import Link from "next/link";
import Image from "next/image";
import Footer from "../../components/Footer";

const audioServices = [
    {
        title: "Music Production",
        description: "Full-scale music production from beat making to final arrangement. We work with you to find your unique sound.",
        icon: "music_note",
        price: "₦150,000"
    },
    {
        title: "Mixing & Mastering",
        description: "Industry-standard mixing and mastering to ensure your tracks sound perfect on every device and platform.",
        icon: "graphic_eq",
        price: "₦80,000"
    },
    {
        title: "Podcast Recording",
        description: "Crystal clear voice recording in our acoustically treated rooms. includes post-production editing.",
        icon: "mic",
        price: "₦25,000"
    },
    {
        title: "Voiceovers & ADR",
        description: "Professional voiceover recording for commercials, films, and animations with top-tier equipment.",
        icon: "record_voice_over",
        price: "₦40,000"
    }
];

const videoServices = [
    {
        title: "Music Videos",
        description: "Cinematic 4K visuals to accompany your hit song. Concept development, shooting, and editing included.",
        icon: "movie",
        price: "From ₦350,000"
    },
    {
        title: "Documentaries",
        description: "Tell your story with depth and clarity. We handle interviews, b-roll, and narrative structure.",
        icon: "auto_stories",
        price: "Custom Quote"
    },
    {
        title: "Commercials",
        description: "High-impact ads for TV and social media that drive engagement and sales for your brand.",
        icon: "campaign",
        price: "From ₦200,000"
    },
    {
        title: "Live Streaming",
        description: "Multi-camera live streaming setup for concerts, conferences, and diverse events.",
        icon: "live_tv",
        price: "₦100,000"
    }
];

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
                    <h1 className="text-4xl md:text-5xl font-black mb-6 text-slate-900 dark:text-white">Our Expertise</h1>
                    <p className="text-slate-600 dark:text-[#c9bb92] text-lg leading-relaxed">
                        We offer a comprehensive suite of multimedia services designed to take your project from concept to reality.
                        Whether it&apos;s audio engineering or visual storytelling, we deliver excellence.
                    </p>
                </div>

                {/* Audio Services */}
                <div className="mb-20">
                    <div className="flex items-center gap-4 mb-10">
                        <div className="p-3 rounded-full bg-primary/10 text-primary">
                            <span className="material-symbols-outlined text-3xl">headphones</span>
                        </div>
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Audio Production</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {audioServices.map((service, index) => (
                            <div key={index} className="group p-6 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-primary/50 transition-all hover:-translate-y-1">
                                <div className="size-12 rounded-xl bg-slate-100 dark:bg-white/10 flex items-center justify-center text-slate-600 dark:text-white mb-4 group-hover:bg-primary group-hover:text-background-dark transition-colors">
                                    <span className="material-symbols-outlined">{service.icon}</span>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{service.title}</h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 leading-relaxed">{service.description}</p>
                                <div className="mt-auto pt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
                                    <span className="text-primary font-bold">{service.price}</span>
                                    <Link href="/booking" className="text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-white transition-colors">Book</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Video Services */}
                <div className="mb-20">
                    <div className="flex items-center gap-4 mb-10">
                        <div className="p-3 rounded-full bg-primary/10 text-primary">
                            <span className="material-symbols-outlined text-3xl">videocam</span>
                        </div>
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Video Production</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {videoServices.map((service, index) => (
                            <div key={index} className="group p-6 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-primary/50 transition-all hover:-translate-y-1">
                                <div className="size-12 rounded-xl bg-slate-100 dark:bg-white/10 flex items-center justify-center text-slate-600 dark:text-white mb-4 group-hover:bg-primary group-hover:text-background-dark transition-colors">
                                    <span className="material-symbols-outlined">{service.icon}</span>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{service.title}</h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 leading-relaxed">{service.description}</p>
                                <div className="mt-auto pt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
                                    <span className="text-primary font-bold">{service.price}</span>
                                    <Link href="/booking" className="text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-white transition-colors">Inquire</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="rounded-3xl bg-slate-900 dark:bg-[#1a160d] border border-slate-800 dark:border-[#483f23] p-10 md:p-16 text-center relative overflow-hidden">
                    {/* Background glow */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -ml-32 -mb-32"></div>

                    <div className="relative z-10 max-w-2xl mx-auto space-y-6">
                        <h2 className="text-3xl md:text-4xl font-black text-white">Need a Custom Package?</h2>
                        <p className="text-slate-400 text-lg">We understand that every project is unique. Let&apos;s discuss your specific requirements and create a tailored solution for you.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                            <Link href="/contact" className="px-8 py-4 rounded-xl bg-white text-slate-900 font-bold hover:bg-slate-100 transition-colors">Contact Support</Link>
                            <Link href="/booking" className="px-8 py-4 rounded-xl bg-primary text-background-dark font-bold hover:scale-105 transition-transform">Book a Session</Link>
                        </div>
                    </div>
                </div>

            </main>
            <Footer />
        </div>
    );
}
