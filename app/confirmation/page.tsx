
import Link from "next/link";

export default function ConfirmationPage() {
    return (
        <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden bg-background-light dark:bg-background-dark">
            {/* Background Particles (Static/CSS-animated) */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="particle" style={{ left: '10%', animationDelay: '0s' }}></div>
                <div className="particle" style={{ left: '30%', animationDelay: '2s' }}></div>
                <div className="particle" style={{ left: '50%', animationDelay: '1s' }}></div>
                <div className="particle" style={{ left: '70%', animationDelay: '3s' }}></div>
                <div className="particle" style={{ left: '90%', animationDelay: '1.5s' }}></div>
            </div>

            <div className="w-full max-w-md bg-white dark:bg-[#1f1b13] border border-[#eebd2b]/20 rounded-2xl p-8 text-center relative z-10 shadow-2xl">
                {/* Success Icon */}
                <div className="size-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 relative">
                    <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping"></div>
                    <span className="material-symbols-outlined text-primary text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                </div>

                <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-2">Booking Confirmed!</h1>
                <p className="text-slate-500 dark:text-[#c9bb92] text-sm mb-8">
                    Your session has been successfully scheduled. A confirmation email has been sent to your inbox.
                </p>

                {/* Booking Details Card */}
                <div className="bg-slate-50 dark:bg-[#2a251b] rounded-xl p-4 mb-8 border border-slate-100 dark:border-[#483f23] text-left">
                    <div className="flex justify-between items-center mb-4 pb-4 border-b border-slate-200 dark:border-[#483f23]">
                        <span className="text-xs font-bold uppercase tracking-widest text-[#c9bb92]">Booking ID</span>
                        <span className="text-slate-900 dark:text-white font-mono font-bold">#DR-8834</span>
                    </div>
                    <div className="space-y-3">
                        <div className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-primary">podcasts</span>
                            <div>
                                <p className="text-xs text-slate-500 dark:text-[#c9bb92]">Service</p>
                                <p className="text-sm font-bold text-slate-900 dark:text-white">Standard Podcast Session</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-primary">calendar_month</span>
                            <div>
                                <p className="text-xs text-slate-500 dark:text-[#c9bb92]">Date &amp; Time</p>
                                <p className="text-sm font-bold text-slate-900 dark:text-white">Oct 24, 2023 • 02:00 PM</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-primary">person</span>
                            <div>
                                <p className="text-xs text-slate-500 dark:text-[#c9bb92]">Engineer</p>
                                <p className="text-sm font-bold text-slate-900 dark:text-white">Musa Bello</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Next Steps */}
                <div className="space-y-4 mb-8">
                    <Link className="flex items-center justify-center gap-2 w-full py-3 bg-primary text-[#221e11] font-bold rounded-lg hover:brightness-110 transition-all" href="#">
                        <span className="material-symbols-outlined text-sm">event</span> Add to Calendar
                    </Link>
                    <Link className="flex items-center justify-center gap-2 w-full py-3 border border-slate-200 dark:border-[#483f23] text-slate-600 dark:text-[#c9bb92] font-bold rounded-lg hover:bg-slate-50 dark:hover:bg-white/5 transition-all" href="/">
                        Return to Home
                    </Link>
                </div>

                <p className="text-xs text-slate-400 dark:text-slate-600">Need to make changes? <Link href="/contact" className="text-primary hover:underline">Contact Support</Link></p>
            </div>
        </div>
    );
}
