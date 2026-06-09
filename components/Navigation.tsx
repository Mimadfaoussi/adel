"use client";

import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navItems } from "./content";

export function Navigation() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActive(visible.target.id);
        }
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0.2, 0.4, 0.6] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/50 bg-white/85 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/85">
      <nav className="section-shell flex h-20 items-center justify-between gap-4">
        <a href="#home" className="group flex items-center gap-3" aria-label="العودة إلى الرئيسية">
          <span className="grid size-11 place-items-center rounded-xl bg-campaign-green text-lg font-black text-white shadow-soft transition group-hover:scale-105">
            ع
          </span>
          <span className="leading-tight">
            <span className="block text-lg font-black text-campaign-ink dark:text-white">عادل قراش</span>
            <span className="block text-xs font-bold text-campaign-green">الرياضة تبدأ من البلدية</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 rounded-full border border-slate-200 bg-white p-1 shadow-sm lg:flex dark:border-white/10 dark:bg-slate-900">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`rounded-full px-4 py-2 text-sm font-bold transition ${
                active === item.id
                  ? "bg-campaign-green text-white"
                  : "text-slate-600 hover:bg-campaign-mint hover:text-campaign-deep dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setDark((value) => !value)}
            className="grid size-11 place-items-center rounded-xl border border-slate-200 bg-white text-slate-700 transition hover:border-campaign-green hover:text-campaign-green dark:border-white/10 dark:bg-slate-900 dark:text-slate-200"
            aria-label={dark ? "تفعيل الوضع النهاري" : "تفعيل الوضع الليلي"}
            title={dark ? "الوضع النهاري" : "الوضع الليلي"}
          >
            {dark ? <Sun size={19} /> : <Moon size={19} />}
          </button>
          <button
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
            className="grid size-11 place-items-center rounded-xl border border-slate-200 bg-white text-slate-700 lg:hidden dark:border-white/10 dark:bg-slate-900 dark:text-slate-200"
            aria-label="فتح القائمة"
            title="القائمة"
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="border-t border-slate-100 bg-white px-4 py-4 lg:hidden dark:border-white/10 dark:bg-slate-950">
          <div className="mx-auto grid max-w-7xl gap-2">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setMenuOpen(false)}
                className={`rounded-xl px-4 py-3 text-sm font-bold ${
                  active === item.id
                    ? "bg-campaign-green text-white"
                    : "bg-slate-50 text-slate-700 dark:bg-slate-900 dark:text-slate-200"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
