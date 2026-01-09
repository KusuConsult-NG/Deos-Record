
import Link from "next/link";
import Footer from "../../components/Footer";

export default function TeamPage() {
    return (
        <div className="flex-1 flex flex-col min-h-screen">
            {/* Navigation */}
            <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-primary/20 px-6 md:px-20 lg:px-40 py-4 bg-background-light dark:bg-background-dark/95 sticky top-0 z-50 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                    <div className="h-10 w-10 relative rounded-full overflow-hidden">
                        <img src="/logo.jpg" alt="Deos Record" className="object-cover w-full h-full" />
                    </div>
                    <h2 className="text-slate-900 dark:text-white text-xl font-black leading-tight tracking-tight">DEOS RECORD</h2>
                </div>
                <div className="hidden md:flex flex-1 justify-end gap-8">
                    <nav className="flex items-center gap-8">
                        <Link className="text-slate-600 dark:text-slate-300 hover:text-primary transition-colors text-sm font-semibold uppercase tracking-wider" href="/">Home</Link>
                        <Link className="text-slate-600 dark:text-slate-300 hover:text-primary transition-colors text-sm font-semibold uppercase tracking-wider" href="/services">Services</Link>
                        <Link className="text-primary text-sm font-semibold uppercase tracking-wider border-b-2 border-primary" href="/team">Team</Link>
                        <Link className="text-slate-600 dark:text-slate-300 hover:text-primary transition-colors text-sm font-semibold uppercase tracking-wider" href="/contact">Contact</Link>
                    </nav>
                    <Link href="/booking" className="flex min-w-[120px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-6 bg-primary text-background-dark text-sm font-bold uppercase tracking-wider hover:brightness-110 transition-all">
                        Book Now
                    </Link>
                </div>
            </header>
            <main className="flex-1">
                {/* Page Heading */}
                <div className="px-6 md:px-20 lg:px-40 py-12 md:py-20">
                    <div className="max-w-[1200px] mx-auto">
                        <div className="flex flex-wrap items-end justify-between gap-6">
                            <div className="flex flex-col gap-4 max-w-2xl">
                                <span className="text-primary font-bold uppercase tracking-[0.2em] text-xs">Abuja's Premier Studio</span>
                                <h1 className="text-slate-900 dark:text-white text-5xl md:text-6xl font-black leading-tight tracking-tight">The Creative Minds</h1>
                                <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl font-normal leading-relaxed">
                                    Behind every masterpiece at Deos Record is a team of dedicated visionaries crafting the future of multimedia production.
                                </p>
                            </div>
                            <button className="flex min-w-[200px] cursor-pointer items-center justify-center rounded-lg h-14 px-8 bg-primary/10 border border-primary text-primary hover:bg-primary hover:text-background-dark transition-all duration-300 text-sm font-bold uppercase tracking-widest">
                                <span>Join the collective</span>
                            </button>
                        </div>
                    </div>
                </div>
                {/* Team Grid Section */}
                <div className="px-6 md:px-20 lg:px-40 pb-20">
                    <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Team Member 1 */}
                        <div className="group relative flex flex-col gap-5 overflow-hidden rounded-xl bg-white/5 p-4 border border-white/10 hover:border-primary/50 transition-all duration-500">
                            <div className="relative w-full aspect-4/5 overflow-hidden rounded-lg">
                                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB0qWIJtohAF3XmNBkB2WNohK4h-KAeQ0RDPz94drh4uFQPVgTnbXU3FC3DcHn4GY44xu4Zys3NOXE8_YXGdwgphooXg-8aesMyV87H3GStd91H9Yv9N8Uf7kI9zziL5lyO21JAsuxaNtQ01jcXCPSc1F2V-KjN9qolQInjmqyif4iK6Fc2tcfDMX6IBcq63VqGKMUeJnTT--ywDx6qZyaWWXvRyyjjt1Coag6OnK1b91KrKnSQ8HmuKE4paXNhrg1hTBiEiWVwpuo")' }}>
                                </div>
                                <div className="absolute inset-0 bg-linear-to-b from-transparent to-background-dark/90 opacity-60 group-hover:opacity-40 transition-opacity"></div>
                                <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                    <div className="flex gap-2 justify-center">
                                        <div className="rounded-full bg-primary/90 text-background-dark p-2 cursor-pointer hover:bg-white transition-colors">
                                            <span className="material-symbols-outlined text-[18px]!">share</span>
                                        </div>
                                        <div className="rounded-full bg-primary/90 text-background-dark p-2 cursor-pointer hover:bg-white transition-colors">
                                            <span className="material-symbols-outlined text-[18px]!">alternate_email</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="text-slate-900 dark:text-white text-xl font-bold">Tunde Deos</h3>
                                        <p className="text-primary text-sm font-semibold uppercase tracking-wider">Lead Producer</p>
                                    </div>
                                    <span className="material-symbols-outlined text-primary/40 group-hover:text-primary transition-colors">graphic_eq</span>
                                </div>
                                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                    Driving the sonic vision of Abuja with over 12 years of experience in multi-platinum music production.
                                </p>
                            </div>
                        </div>
                        {/* Team Member 2 */}
                        <div className="group relative flex flex-col gap-5 overflow-hidden rounded-xl bg-white/5 p-4 border border-white/10 hover:border-primary/50 transition-all duration-500">
                            <div className="relative w-full aspect-4/5 overflow-hidden rounded-lg">
                                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAppflpr3TKm999bfYTORKfkZCAv-XQCd--yFqk32_Ttj8QdbGhz2-CH3IZnJZybQWtbdTNDyMgPD69qdZRlJkhT3ZqNjaBddQgsipRJllh0Hz8mDXzXrzqZW_CTrVa-oH--QjOS4V1eXhPlq6itPqzJLa2AMI738kUs-IaI9667eNgLKKCRMLDhMaBCbzPsDss3cI61SDwCtECe6laTKpbOCDSfK0iylJpoxdYhKp_y_bgqHQBl6ksY5EzrRBTLRFSF9Smhi5uyGU")' }}>
                                </div>
                                <div className="absolute inset-0 bg-linear-to-b from-transparent to-background-dark/90 opacity-60 group-hover:opacity-40 transition-opacity"></div>
                                <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                    <div className="flex gap-2 justify-center">
                                        <div className="rounded-full bg-primary/90 text-background-dark p-2 cursor-pointer hover:bg-white transition-colors">
                                            <span className="material-symbols-outlined text-[18px]!">link</span>
                                        </div>
                                        <div className="rounded-full bg-primary/90 text-background-dark p-2 cursor-pointer hover:bg-white transition-colors">
                                            <span className="material-symbols-outlined text-[18px]!">photo_camera</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="text-slate-900 dark:text-white text-xl font-bold">Sarah J.</h3>
                                        <p className="text-primary text-sm font-semibold uppercase tracking-wider">Audio Engineer</p>
                                    </div>
                                    <span className="material-symbols-outlined text-primary/40 group-hover:text-primary transition-colors">settings_input_component</span>
                                </div>
                                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                    Precision in every frequency. Sarah specializes in Dolby Atmos mixing and complex spatial audio design.
                                </p>
                            </div>
                        </div>
                        {/* Team Member 3 */}
                        <div className="group relative flex flex-col gap-5 overflow-hidden rounded-xl bg-white/5 p-4 border border-white/10 hover:border-primary/50 transition-all duration-500">
                            <div className="relative w-full aspect-4/5 overflow-hidden rounded-lg">
                                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDP1OQQ5gVI89Q56Hge_1FbfHNcwZYIR-GpDcgk4zWDhz6V0y6ZkI0tD91mvDIF84FjRST9dcgJfrBpIrP136ABSnZYxzkt7QF9rpwXaX5hvnC8eEBmjJTrwzs2w3Rw_dZNxN7wWFdkY3DVbz7FpT21hAWGeN5wavWh8YIxRgEzMzgdIvej8f5LbPXy8g-f1KF2HZ5HB2apfg0dvlFQ12SjpSnUcD8_dmGMxw5NWnzhh8KiK7d8QPOJ87Xu12s6et4L1Sxd4IJwxzA")' }}>
                                </div>
                                <div className="absolute inset-0 bg-linear-to-b from-transparent to-background-dark/90 opacity-60 group-hover:opacity-40 transition-opacity"></div>
                                <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                    <div className="flex gap-2 justify-center">
                                        <div className="rounded-full bg-primary/90 text-background-dark p-2 cursor-pointer hover:bg-white transition-colors">
                                            <span className="material-symbols-outlined text-[18px]!">videocam</span>
                                        </div>
                                        <div className="rounded-full bg-primary/90 text-background-dark p-2 cursor-pointer hover:bg-white transition-colors">
                                            <span className="material-symbols-outlined text-[18px]!">movie</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="text-slate-900 dark:text-white text-xl font-bold">David O.</h3>
                                        <p className="text-primary text-sm font-semibold uppercase tracking-wider">Video Director</p>
                                    </div>
                                    <span className="material-symbols-outlined text-primary/40 group-hover:text-primary transition-colors">movie_filter</span>
                                </div>
                                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                    Visual storytelling redefined. David captures the essence of rhythm through cinematic cinematography.
                                </p>
                            </div>
                        </div>
                        {/* Team Member 4 */}
                        <div className="group relative flex flex-col gap-5 overflow-hidden rounded-xl bg-white/5 p-4 border border-white/10 hover:border-primary/50 transition-all duration-500">
                            <div className="relative w-full aspect-4/5 overflow-hidden rounded-lg">
                                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAjU3hp7PW1sg8ahW5cxI0wRxIldquwRCypnyLQc4PkadeD93iJTZFFJ9sv4LuCYM0hzbsAse6Hq4zLi_RTUiP3fzqd-ONdgf3jUCNdvq-CHMRTuGBF_qCJEnJ7Jkuv1CN01cpeDIZwNGArhewKKmqCsfQC0eSKpD29392zNfOLIRy1IRWvOkUShovYiwtqFK6WR_-EpM1CQHWcrvs3mwiDfItOxj7xBI5Ib3Lxene6cgcX5L4odIgaGwEaZmYxGMJJNe3iJjXQYVQ")' }}>
                                </div>
                                <div className="absolute inset-0 bg-linear-to-b from-transparent to-background-dark/90 opacity-60 group-hover:opacity-40 transition-opacity"></div>
                            </div>
                            <div className="space-y-2">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="text-slate-900 dark:text-white text-xl font-bold">Aisha M.</h3>
                                        <p className="text-primary text-sm font-semibold uppercase tracking-wider">Creative Strategist</p>
                                    </div>
                                    <span className="material-symbols-outlined text-primary/40 group-hover:text-primary transition-colors">lightbulb</span>
                                </div>
                                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                    Bridging the gap between idea and art. Aisha ensures every project has a powerful, marketable soul.
                                </p>
                            </div>
                        </div>
                        {/* Team Member 5 */}
                        <div className="group relative flex flex-col gap-5 overflow-hidden rounded-xl bg-white/5 p-4 border border-white/10 hover:border-primary/50 transition-all duration-500">
                            <div className="relative w-full aspect-4/5 overflow-hidden rounded-lg">
                                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDiXbjk1F3YdUGCDrp_kfjF-jcdAnU5t0PGvtgecOFVa_m1vaERudrXBIspyalhaEa41xRPYs_Co3SiJqUDDdbyJb8lxoCLtQqZYf1BFlX1DJOSE6Kpg3iAx6oqc446XBNMc0IaKvC-lafP36d2JItN37uaMhgiNFeQY7BRHeK3dd-cDR4bIcPQfv1dzKOzmh0AWS1wbtdpYge4TmPD0jRpQzYqC2XeuLgLru3QDjkwl12W44a5EWd34QRGIjxZGeU8cdgyJpbmAjw")' }}>
                                </div>
                                <div className="absolute inset-0 bg-linear-to-b from-transparent to-background-dark/90 opacity-60 group-hover:opacity-40 transition-opacity"></div>
                            </div>
                            <div className="space-y-2">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="text-slate-900 dark:text-white text-xl font-bold">Kevin L.</h3>
                                        <p className="text-primary text-sm font-semibold uppercase tracking-wider">Sound Designer</p>
                                    </div>
                                    <span className="material-symbols-outlined text-primary/40 group-hover:text-primary transition-colors">surround_sound</span>
                                </div>
                                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                    Crafting immersive soundscapes for film and gaming. Expert in Foley and synthetic audio manipulation.
                                </p>
                            </div>
                        </div>
                        {/* Team Member 6 */}
                        <div className="group relative flex flex-col gap-5 overflow-hidden rounded-xl bg-white/5 p-4 border border-white/10 hover:border-primary/50 transition-all duration-500">
                            <div className="relative w-full aspect-4/5 overflow-hidden rounded-lg">
                                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAz6bZcl_VBOIfmD_1FJDH2cGuYxBl7UdCG5e9kTw2V72RHOTjQdDPkIecakxzemItYwTCkIzHB0LJ-vMYDvaopW0OIlxujTIJXK5e7_y_miNivgsZg17rnDyBaGyqV9QzT2r9FwR4f97i7hc46VyoOEQ8nLJKLYYShZPvwR1ysy7qIA5hMVHpr1bnaZpLSF2apobYIU8sy_7-VJCiBwZW_GBF8DKNCdiScbISSc_rruLw-hdSFQHp2neyqiT-wZYiyWUmNeOCpExU")' }}>
                                </div>
                                <div className="absolute inset-0 bg-linear-to-b from-transparent to-background-dark/90 opacity-60 group-hover:opacity-40 transition-opacity"></div>
                            </div>
                            <div className="space-y-2">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="text-slate-900 dark:text-white text-xl font-bold">Zoe A.</h3>
                                        <p className="text-primary text-sm font-semibold uppercase tracking-wider">Lead Editor</p>
                                    </div>
                                    <span className="material-symbols-outlined text-primary/40 group-hover:text-primary transition-colors">content_cut</span>
                                </div>
                                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                    The final touch of perfection. Zoe brings narrative cohesion to raw footage with master-level editing.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Social Actions Bar */}
                <div className="px-6 md:px-20 lg:px-40 py-10 bg-black/20 border-y border-white/5">
                    <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
                        <p className="text-slate-400 text-sm font-medium">Follow our creative journey on social media</p>
                        <div className="flex flex-wrap justify-center gap-6">
                            <div className="flex flex-col items-center gap-2 group cursor-pointer">
                                <div className="rounded-full bg-primary/10 border border-primary/20 p-3 group-hover:bg-primary group-hover:text-background-dark transition-all duration-300">
                                    <span className="material-symbols-outlined text-[20px]">public</span>
                                </div>
                                <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest group-hover:text-primary">LinkedIn</p>
                            </div>
                            <div className="flex flex-col items-center gap-2 group cursor-pointer">
                                <div className="rounded-full bg-primary/10 border border-primary/20 p-3 group-hover:bg-primary group-hover:text-background-dark transition-all duration-300">
                                    <span className="material-symbols-outlined text-[20px]">photo_camera</span>
                                </div>
                                <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest group-hover:text-primary">Instagram</p>
                            </div>
                            <div className="flex flex-col items-center gap-2 group cursor-pointer">
                                <div className="rounded-full bg-primary/10 border border-primary/20 p-3 group-hover:bg-primary group-hover:text-background-dark transition-all duration-300">
                                    <span className="material-symbols-outlined text-[20px]">movie</span>
                                </div>
                                <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest group-hover:text-primary">TikTok</p>
                            </div>
                            <div className="flex flex-col items-center gap-2 group cursor-pointer">
                                <div className="rounded-full bg-primary/10 border border-primary/20 p-3 group-hover:bg-primary group-hover:text-background-dark transition-all duration-300">
                                    <span className="material-symbols-outlined text-[20px]">language</span>
                                </div>
                                <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest group-hover:text-primary">Portfolio</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* CTA Section */}
                <div className="px-6 md:px-20 lg:px-40 py-24 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -mr-48 -mt-48"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -ml-48 -mb-48"></div>
                    <div className="max-w-[800px] mx-auto text-center space-y-8 relative z-10">
                        <h2 className="text-slate-900 dark:text-white text-4xl md:text-5xl font-black leading-tight tracking-tight">
                            Ready to bring your project to life?
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl font-normal max-w-2xl mx-auto">
                            Our experts are ready to transform your vision into a multimedia masterpiece. Let's record history together in Abuja.
                        </p>
                        <div className="flex justify-center pt-4">
                            <button className="flex min-w-[240px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-16 px-10 bg-primary text-background-dark text-lg font-black uppercase tracking-widest hover:scale-105 transition-transform shadow-[0_10px_40px_-10px_rgba(238,189,43,0.3)]">
                                <span>Work with our experts</span>
                            </button>
                        </div>
                    </div>
                </div>
            </main>
            {/* Footer */}
            <Footer />
        </div>
    );
}
