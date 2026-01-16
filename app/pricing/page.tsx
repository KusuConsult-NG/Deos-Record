
import Link from "next/link";
import Image from "next/image";
import Footer from "../../components/Footer";

const rateCard = [
    {
        category: "Vocals & Training",
        items: [
            { name: "Voice Training (Basics)", price: "₦50,000", detail: "Foundation techniques" },
            { name: "Voice Training (Advanced)", price: "₦150,000", detail: "2 sessions a week" },
            { name: "Instrument Learning (Basic)", price: "₦70,000", detail: "Per instrument" },
            { name: "Instrument Learning (Advanced)", price: "₦200,000", detail: "2 sessions a week" },
            { name: "Music Production Learning (Basic)", price: "₦500,000", detail: "Weekend/Tailored" },
            { name: "Music Production Learning (Advanced)", price: "₦1,500,000", detail: "Full professional course" },
        ]
    },
    {
        category: "Podcast Services",
        items: [
            { name: "Studio Rental (Video Podcast)", price: "₦75,000", detail: "Per hour" },
            { name: "Full Video Podcast Production", price: "₦100,000", detail: "30–60 mins episode" },
            { name: "5-Episode Video Package", price: "₦450,000", detail: "Bundle discount" },
            { name: "12-Episode Video Package", price: "₦900,000", detail: "Season bundle" },
            { name: "Video Editing", price: "₦50,000", detail: "Color grading & cuts (per episode)" },
            { name: "Audio Podcast (1hr)", price: "₦150,000", detail: "Recording & Editing (₦100k without edit)" },
            { name: "Audio Podcast (30mins)", price: "₦100,000", detail: "Recording & Editing (₦70k without edit)" },
        ]
    },
    {
        category: "Audio Production",
        items: [
            { name: "Full Track Production", price: "₦150,000", detail: "Beat, Recording, Mixing & Mastering" },
            { name: "Jingle/Voice-over", price: "₦100,000", detail: "Per piece" },
            { name: "Album Production", price: "₦1,100,000", detail: "10 Tracks" },
            { name: "Audio Covers", price: "₦70,000", detail: "Recording & Mix" },
            { name: "Video Covers", price: "₦100,000", detail: "Music/Spoken Word" },
            { name: "Advert/Jingles", price: "₦150,000", detail: "Professional production" },
        ]
    },
    {
        category: "Video Production",
        items: [
            { name: "Music Video (Indoor)", price: "₦500,000", detail: "Without styling (₦1M with styling)" },
            { name: "Music Video (Outdoor)", price: "₦1,000,000", detail: "Without styling (₦1.5M with styling)" },
            { name: "Documentary", price: "₦1,000,000", detail: "Starting price" },
            { name: "Movie Productions", price: "Min ₦2,500,000", detail: "Without Directing" },
        ]
    },
    {
        category: "Events & Branding",
        items: [
            { name: "Full Session (6hrs)", price: "₦80,000", detail: "Studio hiring" },
            { name: "Half Session (3hrs)", price: "₦45,000", detail: "Studio hiring" },
            { name: "Red Carpet Coverage", price: "₦400,000", detail: "Crew, branding, editing" },
            { name: "Event Coverage", price: "₦1,200,000", detail: "Wedding/Birthday (Audio & Visual)" },
            { name: "Promotional Content", price: "₦250,000", detail: "Commercial creation" },
            { name: "Live & Digital Recordings", price: "₦300,000", detail: "Location & Post-production" },
        ]
    }
];

export default function PricingPage() {
    return (
        <div className="flex-1 flex flex-col min-h-screen">
            {/* Top Navigation Bar */}
            <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-[#483f23] px-10 py-3 bg-background-light dark:bg-background-dark sticky top-0 z-50">
                <div className="flex items-center gap-4 text-slate-900 dark:text-white">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="h-10 w-10 relative rounded-full overflow-hidden">
                            <Image src="/logo.jpg" alt="Deos Record" layout="fill" objectFit="cover" />
                        </div>
                        <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">Deos Record</h2>
                    </Link>
                </div>
                <div className="flex flex-1 justify-end gap-8">
                    <nav className="flex items-center gap-9">
                        <Link className="text-slate-700 dark:text-white text-sm font-medium leading-normal hover:text-primary transition-colors" href="/team">Studio</Link>
                        <Link className="text-slate-700 dark:text-white text-sm font-medium leading-normal hover:text-primary transition-colors" href="/services">Services</Link>
                        <Link className="text-slate-700 dark:text-white text-sm font-medium leading-normal hover:text-primary transition-colors" href="/portfolio">Portfolio</Link>
                        <Link className="text-slate-700 dark:text-white text-sm font-medium leading-normal hover:text-primary transition-colors" href="/about">About</Link>
                    </nav>
                    <Link href="/booking" className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-[#221e11] text-sm font-bold leading-normal tracking-[0.015em]">
                        <span className="truncate">Book Session</span>
                    </Link>
                </div>
            </header>

            <main className="flex-1 flex flex-col items-center w-full">
                {/* Hero Section */}
                <div className="w-full max-w-[1200px] px-4 pt-10 pb-6">
                    <div className="rounded-xl overflow-hidden relative min-h-[300px] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'linear-gradient(rgba(34, 29, 16, 0.85) 0%, rgba(34, 29, 16, 0.95) 100%), url("/images/studio/studio-desk-keyboard.jpg")' }}>
                        <div className="text-center relative z-10 px-4">
                            <h1 className="text-white text-4xl md:text-5xl font-black mb-4">Official Rate Card</h1>
                            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
                                Transparent pricing for Abuja&apos;s premier multi-media production studio.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Rate Card Grid */}
                <div className="w-full max-w-[1000px] px-4 pb-20 space-y-12">
                    {rateCard.map((section, i) => (
                        <div key={i} className="animate-in fade-in slide-in-from-bottom-4 duration-700" style={{ animationDelay: `${i * 100}ms` }}>
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 border-b border-[#483f23] pb-2 flex items-center gap-2">
                                <span className="w-2 h-8 bg-primary rounded-full"></span>
                                {section.category}
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {section.items.map((item, j) => (
                                    <div key={j} className="flex flex-col p-5 rounded-lg bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 hover:border-primary/30 transition-colors">
                                        <div className="flex justify-between items-start mb-1">
                                            <h3 className="font-bold text-slate-800 dark:text-slate-100">{item.name}</h3>
                                            <span className="font-bold text-primary whitespace-nowrap">{item.price}</span>
                                        </div>
                                        <p className="text-sm text-slate-500 dark:text-slate-400">{item.detail}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer CTA */}
                <div className="w-full bg-slate-100 dark:bg-[#1a160b] py-16 px-4 flex flex-col items-center text-center">
                    <h2 className="text-2xl font-bold mb-4">Ready to start?</h2>
                    <p className="text-slate-600 dark:text-[#c9bb92] mb-8 max-w-md">Contact us for custom project quotes that don&apos;t fit into standard packages.</p>
                    <div className="flex gap-4">
                        <Link href="/contact" className="bg-primary text-[#221e11] px-8 py-3 rounded-lg font-bold hover:brightness-110 transition-all">Contact Sales</Link>
                        <Link href="/booking" className="border border-slate-300 dark:border-[#483f23] px-8 py-3 rounded-lg font-bold hover:bg-white/5 transition-all">Book Session</Link>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
