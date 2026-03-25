"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Clapperboard, User, SquarePen } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

export default function BottomNav() {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", icon: SquarePen, href: "/" },
    { name: "Discover", icon: Search, href: "/discover" },
    { name: "Library", icon: Clapperboard, href: "/tickets" },
    { name: "Profile", icon: User, href: "/profile" },
  ];

  return (
    <div className="fixed bottom-10 left-0 w-full flex justify-center px-6 z-50">
      <nav className="w-full max-w-lg h-24 bg-white/60 backdrop-blur-3xl rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white/40 flex items-center justify-around px-4">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className="flex flex-col items-center justify-center w-20 group"
            >
              <div className={cn(
                "w-14 h-14 rounded-full flex items-center justify-center transition-all duration-500 ease-[0.16,1,0.3,1]",
                isActive 
                  ? "bg-[#b22200] text-white shadow-[0_10px_20px_rgba(178,34,0,0.3)] scale-110" 
                  : "text-stone-400 group-hover:text-[#b22200] group-hover:scale-110"
              )}>
                <item.icon size={isActive ? 28 : 24} strokeWidth={isActive ? 2.5 : 2} />
              </div>
              <span className={cn(
                "font-headline text-[9px] font-black uppercase tracking-[0.2em] mt-2 transition-all duration-300",
                isActive ? "text-[#b22200] opacity-100" : "text-stone-400 opacity-60"
              )}>
                {item.name}
              </span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
