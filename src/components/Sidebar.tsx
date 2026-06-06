'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import {
  LayoutDashboard,
  TrendingUp,
  FileText,
  PiggyBank,
  Banknote,
  Settings,
  Compass,
  Menu,
  X,
} from 'lucide-react';

const navItems = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/dashboard/cashflow', label: 'Cashflow', icon: TrendingUp },
  { href: '/dashboard/facturen', label: 'Facturen', icon: FileText },
  { href: '/dashboard/reserveringen', label: 'Reserveringen', icon: PiggyBank },
  { href: '/dashboard/uitkering', label: 'Uitkering', icon: Banknote },
];

function NavContent({ onClose }: { onClose?: () => void }) {
  const pathname = usePathname();

  return (
    <>
      <div className="px-6 py-6 flex items-center gap-3 border-b border-white/10">
        <div className="w-9 h-9 rounded-xl bg-indigo-500 flex items-center justify-center shrink-0">
          <Compass size={20} className="text-white" />
        </div>
        <div>
          <p className="text-white font-bold text-lg leading-tight">KasKompas</p>
          <p className="text-slate-400 text-xs">zzp financieel dashboard</p>
        </div>
        {onClose && (
          <button onClick={onClose} className="ml-auto text-slate-400 hover:text-white md:hidden">
            <X size={20} />
          </button>
        )}
      </div>

      <nav className="flex-1 px-3 py-5 space-y-1">
        {navItems.map(({ href, label, icon: Icon }) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              onClick={onClose}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-150 ${
                active
                  ? 'bg-white/15 text-white'
                  : 'text-slate-400 hover:bg-white/10 hover:text-white'
              }`}
            >
              <Icon size={18} className={active ? 'text-indigo-400' : 'text-slate-500'} />
              {label}
            </Link>
          );
        })}
      </nav>

      <div className="px-3 pb-5">
        <Link
          href="/dashboard/instellingen"
          onClick={onClose}
          className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:bg-white/10 hover:text-white text-sm font-medium transition-all"
        >
          <Settings size={18} className="text-slate-500" />
          Instellingen
        </Link>
        <div className="mx-4 mt-4 p-3 rounded-xl bg-white/5 border border-white/10">
          <p className="text-slate-300 text-xs font-semibold">Jan de Vries</p>
          <p className="text-slate-500 text-xs">KvK 12345678</p>
          <span className="mt-2 inline-block px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-medium">Pro plan</span>
        </div>
      </div>
    </>
  );
}

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close sidebar on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Mobile top bar */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-40 bg-slate-900 border-b border-white/10 flex items-center px-4 h-14">
        <button onClick={() => setOpen(true)} className="text-slate-300 hover:text-white p-1">
          <Menu size={22} />
        </button>
        <div className="flex items-center gap-2 ml-3">
          <div className="w-7 h-7 rounded-lg bg-indigo-500 flex items-center justify-center">
            <Compass size={15} className="text-white" />
          </div>
          <span className="text-white font-bold text-base">KasKompas</span>
        </div>
      </div>

      {/* Mobile overlay backdrop */}
      {open && (
        <div
          className="md:hidden fixed inset-0 z-40 bg-black/50"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Mobile drawer */}
      <aside
        className={`md:hidden fixed top-0 left-0 z-50 h-full w-72 bg-gradient-to-b from-slate-800 to-slate-900 flex flex-col transform transition-transform duration-300 ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <NavContent onClose={() => setOpen(false)} />
      </aside>

      {/* Desktop sidebar */}
      <aside className="hidden md:flex w-64 min-h-screen bg-gradient-to-b from-slate-800 to-slate-900 flex-col shrink-0">
        <NavContent />
      </aside>
    </>
  );
}
