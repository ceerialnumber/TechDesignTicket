"use client";
import { Plus, QrCode } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

export default function ExplorePage() {
  return (
    <div className="space-y-12">
      {/* Hero Editorial Section */}
      <section className="px-6 mb-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full h-[650px] rounded-[4rem] overflow-hidden bg-black shadow-[0_40px_80px_-15px_rgba(0,0,0,0.3)] group"
        >
          <motion.img
            initial={{ scale: 1.3, opacity: 0 }}
            animate={{ scale: 1.1, opacity: 0.7 }}
            transition={{ duration: 2, ease: "easeOut" }}
            alt="Classical Bust Hero"
            className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCB3CdQJ1OtLtyjomBApgvpJt7wFc8bz9-ZadA7Hwz-RU-lxIUkMmAPvH_N1wiicdyurqThtahPuet-CArQQHenAaKLbDNLe8M22ZViPPgRCUsRIEK5Z3LObUz_mxnH8ZxpJpCIyb6Ru8yGjtyeHCaoBQDQ2QCdYkyroySuQUcFIhYZsKWg23GsLho287-7yJWJWbGdwk9y64amffrEDFdU056_84_0u1Wj-gPMbw4f7bnjzaZt1U1uOk1fn85swrGogJkWiRcUHw"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
          <div className="absolute inset-x-0 bottom-0 p-16 flex flex-col items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-3 mb-8"
            >
              <span className="w-12 h-px bg-[#b22200]"></span>
              <span className="text-white font-headline text-[11px] font-black tracking-[0.4em] uppercase">
                Curated Selection
              </span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="font-headline text-[18vw] md:text-[12vw] font-black text-white editorial-text tracking-tighter mb-8 leading-[0.75]"
            >
              THE<br /><span className="text-[#b22200] italic tracking-[-0.08em]">CURATOR</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="flex flex-col md:flex-row md:items-center gap-8 w-full justify-between"
            >
              <p className="text-white/50 font-body text-lg max-w-md leading-relaxed">
                A digital sanctuary for cinematic excellence. We bridge the gap between classical aesthetics and modern storytelling.
              </p>
              <button className="px-10 py-5 bg-white text-black font-headline font-black text-xs uppercase tracking-[0.2em] rounded-full hover:bg-[#b22200] hover:text-white transition-all duration-500 shadow-xl">
                Enter Archive
              </button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Section Header */}
      <section className="px-8 flex justify-between items-end">
        <div>
          <p className="text-[#b22200] font-headline text-[10px] font-black tracking-[0.3em] uppercase mb-4">Current Season</p>
          <h3 className="font-headline text-5xl font-black tracking-tighter uppercase">My Stubs</h3>
        </div>
        <Link href="/tickets" className="text-stone-400 font-headline text-[10px] font-black tracking-[0.2em] uppercase hover:text-[#b22200] transition-colors">
          View All
        </Link>
      </section>

      {/* My Tickets - Horizontal Scroll */}
      <section>
        <div className="flex overflow-x-auto hide-scrollbar gap-8 px-6 pb-12 pt-4">
          {/* Ticket 1: Vibrant Orange */}
          <motion.div 
            whileHover={{ scale: 1.02, rotate: 0 }}
            className="flex-shrink-0 w-80 h-48 bg-[#FF6B35] rounded-3xl relative slanted-card shadow-2xl shadow-[#FF6B35]/30 overflow-hidden ticket-cutout punched-hole"
          >
            <div className="relative z-10 flex h-full">
              <div className="flex-1 p-6 flex flex-col justify-between">
                <div>
                  <p className="text-white/70 text-[10px] font-black uppercase tracking-[0.2em] mb-1">Admits One</p>
                  <p className="font-headline font-black text-2xl text-white leading-none uppercase">The Great<br />Gatsby</p>
                  <p className="text-white/60 text-[10px] font-bold uppercase mt-3 tracking-widest">Row G • Seat 12</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                  <span className="text-white/80 text-[10px] font-bold uppercase tracking-widest">Now Showing</span>
                </div>
              </div>
              <div className="w-px h-full border-r-2 border-dashed border-white/30"></div>
              <div className="w-24 p-6 flex flex-col justify-between items-center text-white">
                <div className="text-center">
                  <p className="text-[10px] font-bold uppercase tracking-widest opacity-60">Time</p>
                  <span className="font-black text-xl">19:30</span>
                </div>
                <div className="bg-white p-2 rounded-lg">
                  <QrCode className="text-[#FF6B35]" size={24} />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Ticket 2: Vibrant Blue */}
          <motion.div 
            whileHover={{ scale: 1.02, rotate: 0 }}
            className="flex-shrink-0 w-80 h-48 bg-[#4361EE] rounded-3xl relative transform rotate-2 shadow-2xl shadow-[#4361EE]/30 overflow-hidden ticket-cutout punched-hole"
          >
            <div className="relative z-10 flex h-full">
              <div className="flex-1 p-6 flex flex-col justify-between">
                <div>
                  <p className="text-white/70 text-[10px] font-black uppercase tracking-[0.2em] mb-1">Standard Entry</p>
                  <p className="font-headline font-black text-2xl text-white leading-none uppercase">Blade<br />Runner</p>
                  <p className="text-white/60 text-[10px] font-bold uppercase mt-3 tracking-widest">Row A • Seat 04</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-white/80 text-[10px] font-bold uppercase tracking-widest">IMAX EXPERIENCE</span>
                </div>
              </div>
              <div className="w-px h-full border-r-2 border-dashed border-white/30"></div>
              <div className="w-24 p-6 flex flex-col justify-between items-center text-white">
                <div className="text-center">
                  <p className="text-[10px] font-bold uppercase tracking-widest opacity-60">Time</p>
                  <span className="font-black text-xl">21:15</span>
                </div>
                <div className="bg-white p-2 rounded-lg">
                  <QrCode className="text-[#4361EE]" size={24} />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Recently Added */}
      <section className="px-6 pb-12">
        <div className="mb-12">
          <p className="text-[#b22200] font-headline text-[10px] font-black tracking-[0.3em] uppercase mb-4">New Arrivals</p>
          <h3 className="font-headline text-5xl font-black tracking-tighter uppercase">Recently Added</h3>
        </div>
        <div className="grid grid-cols-2 gap-6">
          {/* Large Feature Card */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="col-span-2 relative h-[450px] rounded-[3.5rem] overflow-hidden shadow-2xl group"
          >
            <img
              alt="Movie Poster"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1rpC4QLXcFp88epNL2E15K0JRJ3ymZjXJwTAk4yFyW-ivzxgTK0YKWf5SZiFgn3_PUBowVf-GrMzQlzRPP6aDz5k_-U1nRCJs-0dHIYxxvOO_HhD888Qqn87EBdkOD_32wQKGmE0UXp9V_ahayDzsVJ2C15Jz-QCBF9gE5JQPoa_qwZ8qOyO9Lyah17Mn7xX3Hbz9t7JwrVpOy0e-d_LepUdUTYis9r1U3490d5X3TYS2x7sc4HtpiNigTTxcaB3cxqGvSyM1Zg"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
            <div className="absolute bottom-10 left-10 right-10">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-[#b22200] text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-[0.2em]">Masterpiece</span>
              </div>
              <h4 className="font-headline text-5xl font-black text-white uppercase tracking-tighter leading-none mb-4">Citizen Kane</h4>
              <p className="text-white/60 text-xs font-bold uppercase tracking-widest">Released 1941 • 119 MIN</p>
            </div>
          </motion.div>

          {/* Small Grid Card 1 */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="bg-white rounded-[3rem] p-6 flex flex-col gap-6 shadow-xl border border-stone-100"
          >
            <div className="aspect-[3/4] rounded-[2rem] overflow-hidden">
              <img
                alt="Movie Poster 2"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1SjzpWWzpGHjN3FALhDTtVOCbQM5iYp4I64wgffLyfFfCiwlKZJDrImeZoSmAO-xbqRJPp1y-dC4_nPRF4q8-IJj4JarGnOZ873gqTtR2BT8Xix23gVMDKmmEkjkjtOq3mU6Murr8fjdzMbL-Sv4etyXX5KIxGk3aoIxUBwQEKRZFhKaLnaacANUBpR3F8JOje4p4gVZOSUlnFDyLPGLvNVC15Su8jANYPeYKZkmIPw6ZEhgw1Cbz-YQOmT7lbh9UDtcP6qvi6w"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h4 className="font-headline text-2xl font-black text-[#2f2e2e] leading-none uppercase mb-2">Parasite</h4>
              <p className="text-stone-400 text-[10px] font-black uppercase tracking-widest">Thriller • 2019</p>
            </div>
          </motion.div>

          {/* Small Grid Card 2 */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="bg-white rounded-[3rem] p-6 flex flex-col gap-6 shadow-xl border border-stone-100"
          >
            <div className="aspect-[3/4] rounded-[2rem] overflow-hidden">
              <img
                alt="Movie Poster 3"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoFECOuzZGDPi5r-wtCgIgkaBWNSzmp9UtAza-Zzq6RYc1xl63R0Lt_Uw_2H7hthCCWlB9QUS9gsUsVfIEKscLQd0I8TygVrb-N-B89450_5bBoh0UI_ok5IlPm5mrLijtfE-W60s2W6JOtOCd8F2Kqc1PCCW_9f9qaYKhVnKHsxmPEYgnX8FPYYSVxc_1IpGRObvWX1_dROz_Y4BN2z3tFqYZr-4UXAi9fbljqNSj8G6m4xra7DLo1e01U3ofreTVbyGIjod1yA"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h4 className="font-headline text-2xl font-black text-[#2f2e2e] leading-none uppercase mb-2">Vertigo</h4>
              <p className="text-stone-400 text-[10px] font-black uppercase tracking-widest">Mystery • 1958</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Floating Action Button */}
      <button className="fixed bottom-28 right-8 w-20 h-20 bg-[#b22200] text-white rounded-[2rem] shadow-2xl shadow-[#b22200]/40 flex items-center justify-center z-50 transform hover:scale-110 transition-all active:scale-95 duration-300">
        <Plus size={36} strokeWidth={3} />
      </button>
    </div>
  );
}
