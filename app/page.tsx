import Link from "next/link";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <nav className="fixed top-0 w-full z-50 glass-nav border-b border-white/10 backdrop-blur-md bg-[#101022]/80">
        <div className="max-w-[1280px] mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 relative rounded-full overflow-hidden">
              <img src="/logo.jpg" alt="Deos Record" className="object-cover w-full h-full" />
            </div>
            <h2 className="text-xl font-bold tracking-tight">Deos Record</h2>
          </div>
          <div className="hidden md:flex items-center gap-10">
            <Link className="text-sm font-medium hover:text-primary transition-colors" href="/">Home</Link>
            <Link className="text-sm font-medium hover:text-primary transition-colors" href="/services">Services</Link>
            <Link className="text-sm font-medium hover:text-primary transition-colors" href="/portfolio">Portfolio</Link>
            <Link className="text-sm font-medium hover:text-primary transition-colors" href="/about">About</Link>
            <Link className="text-sm font-medium hover:text-primary transition-colors" href="/contact">Contact</Link>
          </div>
          <Link href="/booking" className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all transform hover:scale-105">
            Book Now
          </Link>
        </div>
      </nav>
      <main className="pt-20">
        <section className="relative px-6 py-12 md:py-24 max-w-[1280px] mx-auto">
          <div className="flex flex-col items-center text-center gap-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
              <span className="material-symbols-outlined text-sm">emergency_recording</span>
              Live in Abuja
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight max-w-4xl leading-[1.1]">
              Educate, enlighten, and <span className="text-primary italic">broaden</span> understanding
            </h1>
            <p className="text-slate-500 dark:text-slate-400 text-lg md:text-xl max-w-2xl leading-relaxed">
              Abuja's Premier Multi-Media Hub for high-fidelity Podcasting, Music Production, and Cinematic Video Storytelling.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/booking" className="bg-primary text-white px-8 py-4 rounded-full text-base font-bold flex items-center gap-2 group">
                Book a Session
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
              <Link href="/portfolio" className="bg-white/5 hover:bg-white/10 border border-white/10 px-8 py-4 rounded-full text-base font-bold">
                View Portfolio
              </Link>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div className="max-w-[1440px] mx-auto px-6">
            <div className="flex flex-col gap-6">
              <div className="flex justify-between items-end">
                <div>
                  <h2 className="text-3xl font-bold text-gold">Studio in Action</h2>
                  <p className="text-slate-400">Glimpse into our world-class production environment</p>
                </div>
                <div className="flex gap-2">
                  <button className="size-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                    <span className="material-symbols-outlined">chevron_left</span>
                  </button>
                  <button className="size-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                    <span className="material-symbols-outlined">chevron_right</span>
                  </button>
                </div>
              </div>
              <div className="flex overflow-x-auto gap-6 hide-scrollbar pb-8 snap-x [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                <div className="min-w-[85%] md:min-w-[600px] aspect-video rounded-xl overflow-hidden snap-center relative group">
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent z-10"></div>
                  <div className="absolute bottom-6 left-6 z-20">
                    <span className="text-xs font-bold uppercase tracking-widest text-gold mb-2 block">Recording</span>
                    <h3 className="text-xl font-bold">Vocal Booth Sessions</h3>
                  </div>
                  <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBvzQ3K3JMMkWGEuZ3lLoC9rGGyd4wXmmtL51rZIfshdrXBUAl220Q-TrBjc4wuftZcO-yhlMxLNuOLfTFbLr9bgTpuxkyzZ70csXCgO0neJt-E_tXwZaf3JSDwPOf19u2O-UOt2jdTV1T7tfVQq5B6JEpUAhDPMTdrfCrm4DOrx8NA7LJ-_lbFuda4enpHzkzAshzAILpyNsPjAjA5v7xRTbHwdWbNsUMEqjoaTW4Mdve74j5RwOUNAPdqCFm0oXAai5bqz4uUuUs')" }}></div>
                </div>
                <div className="min-w-[85%] md:min-w-[600px] aspect-video rounded-xl overflow-hidden snap-center relative group">
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent z-10"></div>
                  <div className="absolute bottom-6 left-6 z-20">
                    <span className="text-xs font-bold uppercase tracking-widest text-gold mb-2 block">Podcast</span>
                    <h3 className="text-xl font-bold">The Broadcast Suite</h3>
                  </div>
                  <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC3Dc7q6xlB-l15TDHarqqQlN3SVJpzHKX8x4LcktslGO-wUPtGlhhl1XH_ARGkCIPc0VSGJu9hN4PAKIU7eoVl7iBH2zSeBE5sSEGCmiKhmAzHmYyro1oiyVnzlt8y-ilD_R42QCyax4gOdc7tW3V-ftWomU3Mfty1EcT2FIjMKCoVYbTrKR-14OmV8nLdF456Kh1wOis0D_-amkagtjiYJPoaVYM_hUQy9IchZqQSF7xOdMUwqSCdWU-so6Lh22vNCg44zzQYjS0')" }}></div>
                </div>
                <div className="min-w-[85%] md:min-w-[600px] aspect-video rounded-xl overflow-hidden snap-center relative group">
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent z-10"></div>
                  <div className="absolute bottom-6 left-6 z-20">
                    <span className="text-xs font-bold uppercase tracking-widest text-gold mb-2 block">Post-Production</span>
                    <h3 className="text-xl font-bold">Mixing &amp; Mastering</h3>
                  </div>
                  <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAN1jDXszWannE7PLoAyW0hbSyk-aAVB16uMmOZUPbpI4nqe68yJ4lB1vf4LpFlnfiaSiHcuAP-fjWMMq9VO86s5BhKiXfL1Njn22r6zviZ7zoCGOsBNWD6CZ7w3oVMBDDlueRrPsmG_lf5hT98ve5Lt7YHddzvPEZBIKZStLEmasnRlrHB1nP7Hk24Sp9mLLZwJfPEKktvEn9-apGSgT6m78EBo7ODSP7rdAOROmnevSuSMM1Hg6xcum95PwY0LkT7i5MA_8qYzWs')" }}></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 bg-background-light dark:bg-white/5">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Our Creative Services</h2>
              <p className="text-slate-400 max-w-xl mx-auto">We offer comprehensive production solutions tailored for artists, creators, and brands.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group bg-background-light dark:bg-background-dark p-8 rounded-xl border border-white/5 hover:border-gold/50 transition-all duration-300 flex flex-col items-start gap-6">
                <div className="size-14 rounded-full bg-primary/20 flex items-center justify-center text-primary group-hover:bg-gold group-hover:text-white transition-all">
                  <span className="material-symbols-outlined text-3xl">mic</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Podcasting</h3>
                  <p className="text-slate-400 mb-6 leading-relaxed">Crystal clear audio for your stories. We provide multi-cam video podcasting, editing, and distribution support.</p>
                  <Link className="inline-flex items-center gap-2 text-gold font-semibold hover:underline" href="#">
                    Learn more <span className="material-symbols-outlined text-sm">open_in_new</span>
                  </Link>
                </div>
              </div>
              <div className="group bg-background-light dark:bg-background-dark p-8 rounded-xl border border-white/5 hover:border-gold/50 transition-all duration-300 flex flex-col items-start gap-6">
                <div className="size-14 rounded-full bg-primary/20 flex items-center justify-center text-primary group-hover:bg-gold group-hover:text-white transition-all">
                  <span className="material-symbols-outlined text-3xl">music_note</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Music Production</h3>
                  <p className="text-slate-400 mb-6 leading-relaxed">From demo to hit record. High-fidelity recording, world-class mixing, and professional mastering services.</p>
                  <Link className="inline-flex items-center gap-2 text-gold font-semibold hover:underline" href="#">
                    Learn more <span className="material-symbols-outlined text-sm">open_in_new</span>
                  </Link>
                </div>
              </div>
              <div className="group bg-background-light dark:bg-background-dark p-8 rounded-xl border border-white/5 hover:border-gold/50 transition-all duration-300 flex flex-col items-start gap-6">
                <div className="size-14 rounded-full bg-primary/20 flex items-center justify-center text-primary group-hover:bg-gold group-hover:text-white transition-all">
                  <span className="material-symbols-outlined text-3xl">videocam</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Video Services</h3>
                  <p className="text-slate-400 mb-6 leading-relaxed">Visual storytelling that captivates. Professional filming, music videos, and creative post-production editing.</p>
                  <Link className="inline-flex items-center gap-2 text-gold font-semibold hover:underline" href="#">
                    Learn more <span className="material-symbols-outlined text-sm">open_in_new</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-24 bg-background-dark overflow-hidden">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
              <div className="text-center md:text-left">
                <h2 className="text-4xl font-bold mb-4 tracking-tight">The Voices of <span className="text-gold">Innovation</span></h2>
                <p className="text-slate-400 max-w-xl">Hear from the talented creatives who have elevated their projects at Deos Record.</p>
              </div>
              <div className="flex gap-4">
                <button className="size-12 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-white transition-all">
                  <span className="material-symbols-outlined">west</span>
                </button>
                <button className="size-12 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-white transition-all">
                  <span className="material-symbols-outlined">east</span>
                </button>
              </div>
            </div>
            <div className="flex overflow-x-auto gap-8 hide-scrollbar pb-12 snap-x [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              <div className="min-w-[320px] md:min-w-[420px] bg-white/5 border border-white/10 p-10 rounded-2xl snap-center relative">
                <div className="absolute -top-4 -right-4 size-16 flex items-center justify-center opacity-10">
                  <span className="material-symbols-outlined text-6xl text-gold">format_quote</span>
                </div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="size-16 rounded-full overflow-hidden border-2 border-gold/20">
                    <img alt="Music Artist" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdktcJnFQTz590iq7QYMk7p_nf_PZweuixZfgOqe7Icuih2ztAfK_5h4N3skGxeXppogOpmd0WWt38A3bZBI9DFlf4OuD8wUNcbQIuy_-AgcLwy0jacG59vPnhjk-FP674W3OZIqoip9fFajqV1xzZJWsjlNdaoFT0m-M5G4SZaoTkox308BSlH4Vho2R307njJNkvCZfawWKgQY-qlW1olaKcPNQOV42L9AwUt2BThAQDmAjdxkGrwZhmu5GxPp4Dja89UF3g_rU" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Emmanuel Okafor</h4>
                    <p className="text-gold text-sm font-medium uppercase tracking-wider">Music Artist</p>
                  </div>
                </div>
                <p className="text-slate-300 text-lg leading-relaxed italic">
                  "The acoustic quality and technical expertise at Deos Record are unmatched in Abuja. They didn't just record my album; they brought my creative vision to life."
                </p>
              </div>
              <div className="min-w-[320px] md:min-w-[420px] bg-white/5 border border-white/10 p-10 rounded-2xl snap-center relative">
                <div className="absolute -top-4 -right-4 size-16 flex items-center justify-center opacity-10">
                  <span className="material-symbols-outlined text-6xl text-gold">format_quote</span>
                </div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="size-16 rounded-full overflow-hidden border-2 border-gold/20">
                    <img alt="Podcaster" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjuijLifq5mjFZPOz3Rqi7PJrHQaGhSpHKp3Cltq3d43-9lIfGSEssEWLgkffGxaGva-scjWTrLRjdh0bHHtICy3XnzyTUIFRYL6P-4qwZhRIrw_XYtqbvtm17fcWMmjgSKO-7K2sjgGR1k61eFmXvf7pp3edlvEhRAShsR20KtDmW-KzSXb-7rkVGqaHT9z4i3ThLOsSBMWdm7OjViFyJM7WE9ABWHCeL61yBIs9QH7kIzyjp_MqQM_W8300htNZm_qPIyihOq1U" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Zainab Bello</h4>
                    <p className="text-gold text-sm font-medium uppercase tracking-wider">Podcaster</p>
                  </div>
                </div>
                <p className="text-slate-300 text-lg leading-relaxed italic">
                  "Transitioning to video podcasting was seamless with their multi-cam setup. The professional atmosphere helps my guests feel relaxed and ready to talk."
                </p>
              </div>
              <div className="min-w-[320px] md:min-w-[420px] bg-white/5 border border-white/10 p-10 rounded-2xl snap-center relative">
                <div className="absolute -top-4 -right-4 size-16 flex items-center justify-center opacity-10">
                  <span className="material-symbols-outlined text-6xl text-gold">format_quote</span>
                </div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="size-16 rounded-full overflow-hidden border-2 border-gold/20">
                    <img alt="Film Director" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0HT17O34W1KpOLpib2sejHV30-JyjlOA8TbFIer_WkTeU8-WDkTOQpiS2Ja-swcELTmlIFxUeWXv1TRbOU1cZJuTzLx6sO4RSqEbeL6s8bnCWZJJ406-XzSExrlYUjvdAL47uTy7-iSIef6xWiKjT1ATS7LAmdnPLwKwMqznWRD01VosgEhDT1NSNZqU2qJnju-xTaDqybGG0TfUQJSFsztQpcTJkXnqSmKCwqWW-Au6cgdOwrqIgSwrDOt1_MoovQOrHyX9AnB4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Chidi Nwosu</h4>
                    <p className="text-gold text-sm font-medium uppercase tracking-wider">Film Director</p>
                  </div>
                </div>
                <p className="text-slate-300 text-lg leading-relaxed italic">
                  "Their post-production suite is top-tier. For cinematic sound design and color grading, Deos Record is my first choice every single time."
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 max-w-[1280px] mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-center md:text-left">Selected Works</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="aspect-square rounded-xl overflow-hidden relative group cursor-pointer">
              <div className="absolute inset-0 bg-gold/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10">
                <span className="text-white font-bold">View Project</span>
              </div>
              <div className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBAFvyhNNNMmOptJmDfMQM0JpSykXfPVj8N7HzHZeCF0b82SAVtN_pCG56RkCdg-Pz7LjELAbx3jT1LBxu5FDIuDgccDEGhjVztykctyecUfcVVKi3EcblxBNegXzxZ-8NcYBNF2tAc8M4-kmLsJMaNYhGMfqyGJYrr2kCabj61QTczf0YuFCgERvseTEGYLzvK4eNVkcTe3QZkJPaVXM-mCfGlGiK_DtLo3XepnRWHWab9NI6HSvVVKLpzAKiLWDf9HvCC6HwGm6s')" }}></div>
            </div>
            <div className="aspect-square rounded-xl overflow-hidden relative group cursor-pointer">
              <div className="absolute inset-0 bg-gold/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10">
                <span className="text-white font-bold">View Project</span>
              </div>
              <div className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDonxFJEyfVrOLLYypjsDB4UyUh05dKY3TzGlUMPrSUXTWuhn1C0uAmZWcOE2TYQGHRR7Gi3pvInd_MwP137VXa2-SQmfaKtT9Zqzk-wM7JcwJOHb1C8H5UOkl7j1Gaho_clNbWwqh6HXWB6nMr9-lCP_LY7ltUvR4Q4FX8XMbioQql_Yyq9SrXjbFyqHPSkzBa1kcZu35Gca1hjeZMzbdLQHQwEG6IRkxeffNMjWGtmUToKsyIfDqzV7DetXiqnBgVxFdqwPNsS_E')" }}></div>
            </div>
            <div className="aspect-square rounded-xl overflow-hidden relative group cursor-pointer">
              <div className="absolute inset-0 bg-gold/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10">
                <span className="text-white font-bold">View Project</span>
              </div>
              <div className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCojyY0js0z05KH-CDdX7ZX1jbCT1Tt91bOAg4Mj6h1IrDWvqEadf3vStnsxk0NKkTRXIQdbsrnTRWlq_iwkMRdrlC7sY4sIWqMHzMGfgeerN5J6RQg-k0sA6mMmOclvcWudFe8UFzSUGYpgFIorqxnsV_BzEE2HzDE6bDwslsaU8m6A6OvumIFCAnwDRNU9tj5V2ULMBdww1LltwSoFEQzxZVxkJxiYWfpQCWf7sa_v9_5rB-s_wG9UyhW0IuPBP5TnAzbc3VUoa4')" }}></div>
            </div>
            <div className="aspect-square rounded-xl overflow-hidden relative group cursor-pointer">
              <div className="absolute inset-0 bg-gold/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10">
                <span className="text-white font-bold">View Project</span>
              </div>
              <div className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB0lm6nYTN1k1x_rmpc3_7HjriDcoYq69jRt9XSaM5S3-NlC9S6EmjGhgstbGbwgIARrFF4fO1DdnU_OQgmE5Yh2vooR5sirvBPjkr86nalepMJ54Va9HJY04YMpUKoqGIKvFefwUQxek7iLdJpbVjFvRDm3-25rSyJPEO-wk1VT_Pwd_iyv2x73L7l-ST7lO27qbShKD5RK7a7wNxOe-43C7J3P4wZfwD0We-XT1bdLPSusS26Q1DWMzOa0OLGVt6xRTljZyiOpXY')" }}></div>
            </div>
          </div>
        </section>
        <section className="py-20">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="bg-primary rounded-xl p-12 text-center text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
              <h2 className="text-4xl md:text-5xl font-black mb-6 relative z-10">Ready to create your masterpiece?</h2>
              <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto relative z-10">Join the community of creators in Abuja who trust Deos Record for their professional production needs.</p>
              <Link href="/booking" className="bg-white text-primary px-10 py-4 rounded-full text-lg font-bold hover:bg-slate-100 transition-all transform hover:scale-105 relative z-10">
                Secure Your Session
              </Link>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
