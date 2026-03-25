"use client";
import { SlidersHorizontal, BookOpen } from "lucide-react";
import { motion } from "motion/react";

export default function ArchivePage() {
  return (
    <div className="max-w-screen-xl mx-auto px-6 pb-32 pt-8">
      {/* History & Stats Section */}
      <section className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-12">
        <div className="space-y-4">
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="font-headline text-[#b22200] font-black tracking-[0.4em] uppercase text-[10px]"
          >
            Legacy Collection
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-headline text-8xl md:text-[12vw] font-black tracking-tighter text-[#2f2e2e] leading-[0.75] uppercase"
          >
            ARCHIVE
          </motion.h2>
        </div>
        <div className="grid grid-cols-2 gap-6 md:w-1/3">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-white p-8 rounded-[2.5rem] flex flex-col justify-center border border-stone-100 shadow-xl"
          >
            <span className="font-headline text-5xl font-black text-[#b22200] tracking-tighter">42</span>
            <span className="font-headline text-[10px] uppercase tracking-[0.2em] text-stone-400 font-black mt-2">Films Seen</span>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-[#2f2e2e] p-8 rounded-[2.5rem] flex flex-col justify-center shadow-2xl"
          >
            <span className="font-headline text-5xl font-black text-white tracking-tighter">3</span>
            <span className="font-headline text-[10px] uppercase tracking-[0.2em] text-white/40 font-black mt-2">Collections</span>
          </motion.div>
        </div>
      </section>

      {/* Filtering Bar */}
      <nav className="flex items-center gap-4 mb-24 overflow-x-auto pb-4 hide-scrollbar">
        {['All Time', 'Year', 'Genre', 'Rating'].map((filter, i) => (
          <motion.button 
            key={filter}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 + i * 0.1 }}
            className={`px-8 py-3 rounded-full font-headline text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 ${i === 0 ? 'bg-[#b22200] text-white shadow-xl' : 'bg-white text-stone-400 border border-stone-100 hover:border-[#b22200] hover:text-[#b22200]'}`}
          >
            {filter}
          </motion.button>
        ))}
        <div className="ml-auto">
          <div className="w-12 h-12 rounded-full bg-white border border-stone-100 flex items-center justify-center shadow-sm hover:bg-stone-50 transition-colors cursor-pointer">
            <SlidersHorizontal className="text-stone-400" size={20} />
          </div>
        </div>
      </nav>

      {/* Cinematic Timeline */}
      <div className="space-y-48 relative">
        {/* Timeline Center Line (Decorative) */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-stone-200 hidden md:block opacity-50"></div>
        
        <TimelineEntry 
          title="The Godfather"
          meta="Francis Ford Coppola • 1972"
          rating="10/10"
          date="Oct 14, 2023"
          theater="Apollo Screen 4"
          heroText="COPPOLA'S MASTERPIECE"
          img="https://lh3.googleusercontent.com/aida-public/AB6AXuC-AYQIKa_h0ADAqygiu75V_6o47n8zy7hCzZVkIdhPlqUpt29ucjD4B5rniDqlweI6yZylDU-A9xkVNCyEqgsRkfa8hs8xMS95Fd8fj7W5V7oOjPmwoDMn7BmS6PQHdtJwO1OdbBxVt55FDKM8BrcFg-s6aL797JbWfyPkG72yIhl3fVT71Z9XR6G0Zht9FtIhFZmq9m-3XzIyO5E5Oi12EK7farDDMBQv9c0_zzAGL66TF7wrJ9_YjN4XFoy7NNPSw2R9aIUBDg"
          slanted={true}
          delay={0.1}
        />

        <TimelineEntry 
          title="Pulp Fiction"
          meta="Quentin Tarantino • 1994"
          rating="9.2"
          date="Sept 02, 2023"
          theater="Grand Lux Cinema"
          heroText="TARANTINO RETROSPECTIVE"
          img="https://lh3.googleusercontent.com/aida-public/AB6AXuC_YZ8FzlVI9Ig2TVuuvEFYx0gdsp2EKeT9RrgbBKHYr-AXzMKfqjQlPWlQ59_jGgHaOhSpDlSPjbpHLFb_T_5NhQneulDu-b_HR4XJ9_6mL1u1GrI5Ky_Xs8Q9kUcWWHfA-OFoX0buPqb1xtdcHg0JyWcmAxjuvCimJoFtl0ta3K-_k5dqxo3b7xAv4v8W-a9bf5mFIWfJQmKlVyyHaZoxU8HOAlm55tqfl2Ap68ceedp371VySarVN2OxUYSrOCd59yFEaeSsbQ"
          slanted={false}
          reverse={true}
          accent="secondary"
          delay={0.2}
        />
      </div>
    </div>
  );
}

function TimelineEntry({ title, meta, rating, date, theater, heroText, img, slanted, reverse, accent = "primary", delay = 0 }) {
  return (
    <motion.article 
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`flex flex-col md:flex-row items-center gap-12 md:gap-24 group ${reverse ? 'md:flex-row-reverse' : ''}`}
    >
      <div className={`w-full md:w-1/2 flex justify-center ${reverse ? 'md:justify-start' : 'md:justify-end'}`}>
        <motion.div 
          whileHover={{ rotate: 0, scale: 1.02 }}
          className={`relative bg-white p-10 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] w-full max-w-sm overflow-hidden border border-stone-100 transition-all duration-700 rounded-[2.5rem] ${slanted ? 'transform -rotate-2' : 'transform rotate(1.5deg)'} ${accent === 'secondary' ? 'bg-[#2f2e2e] text-white border-white/10' : ''}`}
        >
          <div className="flex justify-between items-start mb-10">
            <div>
              <h3 className="font-headline text-4xl font-black leading-none tracking-tighter uppercase mb-3">{title}</h3>
              <p className={`text-[10px] font-black uppercase tracking-[0.1em] ${accent === 'secondary' ? 'opacity-50' : 'text-stone-400'}`}>{meta}</p>
            </div>
            <span className={`font-headline text-3xl font-black ${accent === 'secondary' ? 'text-[#b22200]' : 'text-[#b22200]'}`}>{rating}</span>
          </div>
          <div className={`border-t-2 border-dashed my-8 ${accent === 'secondary' ? 'border-white/10' : 'border-stone-100'}`}></div>
          <div className="grid grid-cols-2 gap-8 mb-10">
            <div>
              <p className={`text-[10px] uppercase tracking-[0.3em] font-black mb-2 ${accent === 'secondary' ? 'opacity-40' : 'text-stone-400'}`}>Date</p>
              <p className="font-black text-lg">{date}</p>
            </div>
            <div>
              <p className={`text-[10px] uppercase tracking-[0.3em] font-black mb-2 ${accent === 'secondary' ? 'opacity-40' : 'text-stone-400'}`}>Theater</p>
              <p className="font-black text-lg">{theater}</p>
            </div>
          </div>
          <div className={`w-full h-16 flex items-center justify-center rounded-2xl ${accent === 'secondary' ? 'bg-white/5' : 'bg-stone-50'}`}>
            <div className="flex gap-2">
              {[1, 2, 1, 4, 1, 3, 1].map((h, i) => (
                <div key={i} className={`w-1 h-10 rounded-full ${accent === 'secondary' ? 'bg-white/20' : 'bg-stone-200'}`} style={{ height: `${h * 8}px` }}></div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
      <div className="w-full md:w-1/2">
        <div className="relative w-full aspect-[4/5] md:aspect-square overflow-hidden rounded-[4rem] bg-stone-100 shadow-2xl transition-transform group-hover:scale-[1.02] duration-1000">
          <img alt={title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" src={img} referrerPolicy="no-referrer" />
          <div className={`absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 ${accent === 'secondary' ? 'from-[#b22200]/40' : ''}`}></div>
          <div className="absolute bottom-12 left-12 text-white">
            <p className="font-headline text-6xl font-black tracking-tighter editorial-text leading-none">{heroText}</p>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
