"use client";
import { QrCode, ChevronRight, Sparkles } from "lucide-react";
import { motion } from "motion/react";

export default function TicketsPage() {
  return (
    <div className="px-6 space-y-16 max-w-2xl mx-auto pb-20">
      {/* Editorial Header */}
      <section className="pt-8">
        <motion.p 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-[#b22200] font-headline text-[10px] font-black tracking-[0.4em] uppercase mb-4"
        >
          Your Collection
        </motion.p>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-headline text-7xl font-black tracking-tighter leading-[0.8] text-[#2f2e2e] uppercase"
        >
          TICKETS<br /><span className="text-[#b22200] italic">&amp; HISTORY</span>
        </motion.h2>
      </section>

      {/* Filters */}
      <div className="flex gap-3 overflow-x-auto pb-4 hide-scrollbar">
        {['All', 'Active', 'Past', 'Wishlist'].map((filter, i) => (
          <motion.button 
            key={filter}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 + i * 0.1 }}
            className={`px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 ${i === 0 ? 'bg-[#2f2e2e] text-white shadow-xl' : 'bg-white text-stone-400 border border-stone-100 hover:border-[#b22200] hover:text-[#b22200]'}`}
          >
            {filter}
          </motion.button>
        ))}
      </div>

      {/* Active Tickets Section */}
      <section className="relative">
        <div className="flex items-center justify-between mb-8">
          <h3 className="font-headline text-2xl font-black tracking-tighter uppercase text-[#2f2e2e]">Active Admission</h3>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#b22200] animate-ping"></span>
            <span className="text-[#b22200] font-black text-[10px] uppercase tracking-widest">1 Active</span>
          </div>
        </div>

        {/* The Realistic Ticket Stub */}
        <motion.div 
          initial={{ rotate: -2, opacity: 0, scale: 0.95 }}
          animate={{ rotate: -2, opacity: 1, scale: 1 }}
          whileHover={{ rotate: 0, scale: 1.02 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white rounded-[2.5rem] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] border border-stone-100 relative overflow-hidden flex cursor-pointer group punched-hole"
        >
          {/* Ticket Main Body */}
          <div className="flex-grow p-10 pr-8">
            <div className="flex gap-8 mb-10">
              <div className="w-28 h-40 rounded-2xl overflow-hidden shadow-2xl flex-shrink-0 transform group-hover:scale-105 transition-transform duration-700">
                <img 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMySxQO3YV82ou4NG8jpefjHc8ExuSLK5SM4DJhbsMvtxhLshBUhVoxB16rBvlyHNn9PeDW91bMfkIR76gYPvDk6PGyW3t72A1wWRDWC7dlLa_J-GdIGXNW4CUPSFretIZ_usi12df-gsm_aHT3p0sXPnNYeYkMxX0M5XQWIojauePDDo-9Cjz5_QQzXuTmo859p5kzksyh0EWo-SK28i1C9NMUmaPA-FQ1MZe1cKCuJYBVF4HBT8kuz5wwA2N8YT8FAycgixzCw"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col justify-center">
                <span className="inline-block px-3 py-1 bg-[#b22200]/10 text-[#b22200] text-[10px] font-black uppercase rounded-full mb-4 w-fit tracking-widest">
                  Premiering Now
                </span>
                <h4 className="font-headline text-3xl font-black leading-none mb-4 tracking-tighter uppercase text-[#2f2e2e]">THE SILENT<br />CHORUS</h4>
                <div className="flex gap-6">
                  <div>
                    <p className="text-[10px] uppercase font-black text-stone-400 tracking-[0.2em] mb-1.5">Seat</p>
                    <p className="font-headline font-black text-xl text-[#b22200]">H12</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-black text-stone-400 tracking-[0.2em] mb-1.5">Row</p>
                    <p className="font-headline font-black text-xl text-[#2f2e2e]">H</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-black text-stone-400 tracking-[0.2em] mb-1.5">Screen</p>
                    <p className="font-headline font-black text-xl text-[#2f2e2e]">04</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-8 border-t-2 border-dashed border-stone-100 flex items-center justify-between">
              <div>
                <p className="text-[10px] uppercase font-black text-stone-400 tracking-[0.3em] mb-2">Date &amp; Time</p>
                <p className="font-headline font-black text-2xl text-[#2f2e2e]">OCT 24, 20:45</p>
              </div>
            </div>
          </div>
          {/* Vertical Tear-off Divider */}
          <div className="w-px border-r-2 border-dashed border-stone-100 relative my-8"></div>
          {/* Ticket Stub (QR side) */}
          <div className="w-32 flex flex-col items-center justify-center p-8 bg-stone-50 group-hover:bg-stone-100 transition-colors">
            <div className="bg-white p-4 rounded-2xl shadow-xl border border-stone-100 mb-6 transform group-hover:rotate-12 transition-transform duration-500">
              <QrCode size={48} className="text-[#2f2e2e]" />
            </div>
            <p className="text-[10px] font-headline font-black uppercase tracking-tighter text-stone-400 text-center leading-tight opacity-60">ADM-982-CHOR</p>
          </div>
        </motion.div>
      </section>

      {/* Collection History */}
      <section>
        <div className="flex items-center justify-between mb-10">
          <h3 className="font-headline text-2xl font-black tracking-tighter uppercase text-[#2f2e2e]">Recent History</h3>
          <button className="text-[#b22200] font-black text-[10px] uppercase tracking-widest hover:opacity-70 transition-opacity">View Archive</button>
        </div>
        <div className="space-y-8">
          <HistoryItem 
            title="Elysium Protocol" 
            meta="Oct 12 • Grand Odeon Cinema" 
            img="https://lh3.googleusercontent.com/aida-public/AB6AXuDqde4HpNbRvsCzIk3nyKVF7mOzjUTNtlt0zsh7Ko9hwTnMdu2wnAHd1pIRR63iCifPlHO7E3fQhka418UTXWFAThgCiIGu_xvExrlWz4nopfUFWn8l967kjFdgMwbGsn0xx_mbg_fa3u4YzYQ1anM2Htooh1qNzNwKQQnCBjgSr3dcD8nx0Fh-elR-ijCh0_1sajwFFooo8cDcjpz6PtfAYxATGFNJT_hPDhd_8sTHHo77brwa_PR4KACFl26fg0rEzQQP6aZLtQ"
            delay={0.1}
          />
          <HistoryItem 
            title="Nocturnal Muse" 
            meta="Sep 28 • The Rialto Loft" 
            img="https://lh3.googleusercontent.com/aida-public/AB6AXuD1FhKYXKxiEewkK0REQQk3-FMp4EXRCKkYQkxUmlZBOAbPxOyrSY1PyQ-CXydKTCoSkss8JST_FMNXszuUkGqpbhvkruiU6f6TfJ5jNcCReUiVIbnTh5q9HwhVPf6rQBMZtYTmD3f35ypIT9cUmyTG0Q0iebJT0QzkUW-lkX8jKSEjlPq9LNEWLjDQU1t5WWoTNmF5BXXM9zZurr__sfXiDLIcFO8QfX247CBx37SaLjEJI9RGV_Izbj_yNH2r_ccq8rCuKzF4xw"
            delay={0.2}
          />
        </div>
      </section>

      {/* Stats Bento Grid */}
      <section className="mt-20">
        <div className="mb-10">
          <p className="text-[#b22200] font-headline text-[10px] font-black tracking-[0.3em] uppercase mb-4">Performance</p>
          <h3 className="font-headline text-2xl font-black tracking-tighter uppercase text-[#2f2e2e]">Your Stats</h3>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white p-8 rounded-[3rem] border border-stone-100 shadow-xl"
          >
            <Sparkles className="text-[#b22200] mb-4" size={28} />
            <p className="text-6xl font-headline font-black text-[#b22200] tracking-tighter">12</p>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-stone-400 mt-2">Films Seen</p>
          </motion.div>
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-[#2f2e2e] p-8 rounded-[3rem] shadow-2xl flex flex-col justify-between"
          >
            <div>
              <p className="text-3xl font-headline font-black text-white tracking-tighter uppercase">Elite</p>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 mt-1">Curator Status</p>
            </div>
            <div className="w-full bg-white/10 h-2 rounded-full mt-8 overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: '75%' }}
                transition={{ duration: 1, delay: 0.5 }}
                className="bg-[#b22200] h-full rounded-full"
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function HistoryItem({ title, meta, img, delay }) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay }}
      viewport={{ once: true }}
      className="group flex items-center gap-6 bg-white hover:bg-stone-50 p-4 rounded-[2.5rem] shadow-lg border border-stone-100 transition-all duration-500 cursor-pointer"
    >
      <div className="w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0 grayscale group-hover:grayscale-0 transition-all duration-700 shadow-md">
        <img className="w-full h-full object-cover" src={img} referrerPolicy="no-referrer" />
      </div>
      <div className="flex-grow">
        <h5 className="font-headline font-black text-xl text-[#2f2e2e] group-hover:text-[#b22200] transition-colors uppercase tracking-tighter leading-none mb-2">{title}</h5>
        <p className="text-[10px] text-stone-400 font-black uppercase tracking-widest">{meta}</p>
      </div>
      <div className="pr-4">
        <div className="w-10 h-10 rounded-full border border-stone-100 flex items-center justify-center group-hover:bg-[#b22200] group-hover:border-[#b22200] transition-all duration-300">
          <ChevronRight className="text-stone-400 group-hover:text-white transition-colors" size={20} />
        </div>
      </div>
    </motion.div>
  );
}
