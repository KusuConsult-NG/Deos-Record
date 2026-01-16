
import Link from "next/link";
import Image from "next/image";
import Footer from "../../components/Footer";

export default function PortfolioPage() {
    return (
        <div className="flex-1 flex flex-col min-h-screen">
            {/* TopNavBar */}
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
                    <Link className="text-sm text-primary font-bold" href="/portfolio">Portfolio</Link>
                    <Link className="text-sm font-medium hover:text-primary transition-colors" href="/about">About</Link>
                </nav>
                <Link href="/booking">
                    <button className="hidden md:flex min-w-[100px] cursor-pointer items-center justify-center rounded-lg h-10 px-5 bg-primary text-background-dark text-sm font-bold transition-transform active:scale-95">
                        Book Now
                    </button>
                </Link>
            </header>
            <main className="flex-1 w-full max-w-[1200px] mx-auto px-4 md:px-10 py-10">
                {/* PageHeading */}
                <div className="flex flex-wrap justify-between gap-3 mb-8">
                    <div className="flex min-w-72 flex-col gap-3">
                        <p className="text-slate-900 dark:text-white text-5xl font-black leading-tight tracking-[-0.033em]">Portfolio Showcase</p>
                        <p className="text-[#c9c192] text-lg font-normal max-w-2xl leading-relaxed">Modern multimedia production from the heart of Abuja. Explore our latest visual and auditory masterpieces.</p>
                    </div>
                </div>
                {/* Video Productions Section */}
                <div className="mb-16">
                    <div className="flex items-center justify-between px-4 pb-3 pt-5 border-b border-[#484223] mb-6">
                        <h2 className="text-slate-900 dark:text-white text-2xl font-bold leading-tight tracking-[-0.015em]">Video Productions</h2>
                        <span className="text-primary text-sm font-medium uppercase tracking-widest">Cinematic Works</span>
                    </div>
                    {/* Featured MediaPlayer */}
                    <div className="p-4 mb-4">
                        <div className="group relative flex items-center justify-center bg-black bg-cover bg-center aspect-video rounded-xl overflow-hidden ring-1 ring-white/10" style={{ backgroundImage: 'url("/images/studio/studio-wide-purple.jpg")' }}>
                            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors"></div>
                            <button className="z-10 flex shrink-0 items-center justify-center rounded-full size-20 bg-primary/90 text-[#222011] shadow-2xl transition-transform hover:scale-110 active:scale-90">
                                <span className="material-symbols-outlined text-[40px]! translate-x-1" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                            </button>
                            <div className="absolute bottom-6 left-6 z-10">
                                <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded text-primary text-xs font-bold uppercase mb-2 inline-block">Featured Production</span>
                                <h3 className="text-3xl font-bold text-white shadow-sm">Artist Music Video: &quot;Abuja Nights&quot;</h3>
                                <p className="text-white/80 text-sm">Director: Deos Record Team | 4K Cinematic</p>
                            </div>
                            <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-linear-to-t from-black/80 to-transparent">
                                <div className="flex h-4 items-center justify-center gap-2">
                                    <div className="h-1 flex-1 rounded-full bg-primary"></div>
                                    <div className="relative"><div className="absolute -left-1 -top-1.5 size-4 rounded-full bg-white shadow-lg shadow-primary/50"></div></div>
                                    <div className="h-1 flex-1 rounded-full bg-white opacity-20"></div>
                                </div>
                                <div className="flex items-center justify-between mt-1">
                                    <p className="text-white text-xs font-medium leading-normal tracking-[0.015em]">1:12</p>
                                    <p className="text-white text-xs font-medium leading-normal tracking-[0.015em]">4:05</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Video Carousel */}
                    <div className="flex overflow-x-auto pb-6 [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                        <div className="flex items-stretch px-4 gap-6">
                            {[
                                { title: "Live Concert Stream", sub: "Event Coverage", img: "/images/studio/studio-podcast-overhead.jpg" },
                                { title: "Corporate Brand Film", sub: "Commercial", img: "/images/studio/studio-desk-side.jpg" },
                                { title: `Documentary: "Vibe of Abuja"`, sub: "Mini-Doc", img: "/images/studio/studio-console-close.jpg" }
                            ].map((item, i) => (
                                <div key={i} className="flex h-full flex-col gap-4 group cursor-pointer min-w-72">
                                    <div className="relative w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl overflow-hidden ring-1 ring-white/10 transition-all hover:ring-primary/50" style={{ backgroundImage: `url("${item.img}")` }}>
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors flex items-center justify-center">
                                            <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-primary/90 rounded-full p-2 text-[#222011]">
                                                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-slate-900 dark:text-white text-base font-semibold group-hover:text-primary transition-colors">{item.title}</p>
                                        <p className="text-[#c9c192] text-sm font-normal">{item.sub}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* Audio Showcase Section */}
                <div className="mb-16">
                    <div className="flex items-center justify-between px-4 pb-3 pt-5 border-b border-[#484223] mb-8">
                        <h2 className="text-slate-900 dark:text-white text-2xl font-bold leading-tight tracking-[-0.015em]">Audio Showcase</h2>
                        <span className="text-primary text-sm font-medium uppercase tracking-widest">Mastered Tracks &amp; Podcasts</span>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4">
                        {/* Music Production Playlist */}
                        <div className="space-y-4">
                            <h3 className="text-[#c9c192] text-sm font-bold uppercase tracking-widest mb-4">Mastered Tracks</h3>
                            <div className="bg-black/20 hover:bg-black/40 border border-white/5 rounded-xl p-5 transition-all flex items-center gap-6 group">
                                <button className="flex shrink-0 items-center justify-center rounded-full size-12 bg-primary text-[#222011] group-hover:scale-105 transition-transform">
                                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                                </button>
                                <div className="flex-1">
                                    <p className="text-slate-900 dark:text-white text-lg font-bold">Midnight Rhythm (feat. EL)</p>
                                    <p className="text-[#c9c192] text-xs font-medium">Afro-Pop | Produced &amp; Mastered</p>
                                    {/* Waveform visualizer simulation */}
                                    <div className="flex items-end gap-[2px] h-8 mt-3">
                                        {[30, 60, 40, 80, 90, 70, 100, 80, 60, 40, 50, 70, 90, 50, 30, 20, 40, 60, 50, 80, 40].map((h, i) => (
                                            <div key={i} className={`waveform-bar ${i < 7 ? 'active' : ''}`} style={{ height: `${h}%` }}></div>
                                        ))}
                                    </div>
                                </div>
                                <div className="text-[#c9c192] text-sm font-mono">03:42</div>
                            </div>
                            <div className="bg-black/20 hover:bg-black/40 border border-white/5 rounded-xl p-5 transition-all flex items-center gap-6 group">
                                <button className="flex shrink-0 items-center justify-center rounded-full size-12 bg-white/10 text-white group-hover:bg-primary group-hover:text-[#222011] transition-all">
                                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                                </button>
                                <div className="flex-1">
                                    <p className="text-slate-900 dark:text-white text-lg font-bold">Echoes of the City</p>
                                    <p className="text-[#c9c192] text-xs font-medium">Soul &amp; Jazz Fusion | Multi-track Mix</p>
                                    <div className="flex items-end gap-[2px] h-8 mt-3">
                                        {[20, 40, 60, 50, 30, 40, 80, 90, 70, 50, 60, 40, 20, 30, 50, 70, 90, 100, 80, 60, 40].map((h, i) => (
                                            <div key={i} className="waveform-bar" style={{ height: `${h}%` }}></div>
                                        ))}
                                    </div>
                                </div>
                                <div className="text-[#c9c192] text-sm font-mono">04:15</div>
                            </div>
                        </div>
                        {/* Podcast Episodes */}
                        <div className="space-y-4">
                            <h3 className="text-[#c9c192] text-sm font-bold uppercase tracking-widest mb-4">Latest Podcast Episodes</h3>
                            <div className="flex gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all cursor-pointer group">
                                <div className="size-24 rounded-lg bg-cover bg-center ring-1 ring-white/10 shrink-0" style={{ backgroundImage: 'url("/images/studio/studio-podcast.jpg")' }}>
                                </div>
                                <div className="flex flex-col justify-center gap-1">
                                    <div className="flex items-center gap-2">
                                        <span className="material-symbols-outlined text-primary text-sm">mic</span>
                                        <span className="text-primary text-[10px] font-bold uppercase">The Abuja Creative Hub</span>
                                    </div>
                                    <p className="text-slate-900 dark:text-white font-bold leading-tight group-hover:text-primary transition-colors">Ep. 42: Navigating the Music Industry in Nigeria</p>
                                    <p className="text-[#c9c192] text-xs">Guest: DJ Sose | Duration: 48m</p>
                                </div>
                                <div className="flex items-center ml-auto">
                                    <span className="material-symbols-outlined text-white/40 group-hover:text-primary">arrow_forward_ios</span>
                                </div>
                            </div>
                            <div className="flex gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all cursor-pointer group">
                                <div className="size-24 rounded-lg bg-cover bg-center ring-1 ring-white/10 shrink-0" style={{ backgroundImage: 'url("/images/studio/studio-console-angle.jpg")' }}>
                                </div>
                                <div className="flex flex-col justify-center gap-1">
                                    <div className="flex items-center gap-2">
                                        <span className="material-symbols-outlined text-primary text-sm">mic</span>
                                        <span className="text-primary text-[10px] font-bold uppercase">Studio Sessions</span>
                                    </div>
                                    <p className="text-slate-900 dark:text-white font-bold leading-tight group-hover:text-primary transition-colors">Ep. 41: Behind the Scenes of High-End Production</p>
                                    <p className="text-[#c9c192] text-xs">Host: Deos Team | Duration: 35m</p>
                                </div>
                                <div className="flex items-center ml-auto">
                                    <span className="material-symbols-outlined text-white/40 group-hover:text-primary">arrow_forward_ios</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Footer / CTA */}
                <div className="mt-20 py-16 px-10 rounded-2xl bg-linear-to-br from-[#eccb13]/10 to-transparent border border-[#eccb13]/20 text-center">
                    <h2 className="text-slate-900 dark:text-white text-4xl font-black mb-4">Have a project in mind?</h2>
                    <p className="text-[#c9c192] text-lg mb-8 max-w-xl mx-auto">From high-quality audio mastering to professional cinematic video production, we bring your vision to life in Abuja.</p>
                    <div className="flex items-center justify-center gap-4">
                        <button className="bg-primary text-[#222011] px-8 py-3 rounded-lg font-bold text-lg hover:scale-105 transition-transform">Book Your Session</button>
                        <button className="border border-[#c9c192] text-slate-900 dark:text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-white/5 transition-colors">Our Packages</button>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
