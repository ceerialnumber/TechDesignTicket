"use client";
import { Menu } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-[#f9f6f5]/80 backdrop-blur-xl flex justify-between items-center px-6 py-4 border-b border-black/5">
      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-black/5 rounded-full transition-colors">
          <Menu className="text-[#2f2e2e]" size={24} />
        </button>
        <Link href="/">
          <h1 className="font-headline font-black text-3xl tracking-tighter uppercase text-[#b22200] hover:opacity-80 transition-opacity">
            CURATOR
          </h1>
        </Link>
      </div>
      <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#ff785a] shadow-sm cursor-pointer hover:scale-105 transition-transform">
        <img
          alt="User Profile"
          className="w-full h-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_44C1Vt1iBTpGD4oIuinBnROb5PZJwrgPrbQcc3LrF4hQ7F59qxLRHal4KctbRkISvS_oQkjj7zWxfs95EhR5L3-OdQdS5_UnKYoPE7paf9xfRRywxaxuLrl9rvzEl0IuUHtqTRojulMvY3EWi2hOwVTTjx7BtZOUrM__EAVsXVnm0vsMMg5JcdC42sRszipbTOiL9Skynb1-vdpRvABxiBA5DsKtYZDNnjUMjhdztitqnknpPwY2LZkOAc605mV3-Pnu2RVhEA"
          referrerPolicy="no-referrer"
        />
      </div>
    </header>
  );
}
