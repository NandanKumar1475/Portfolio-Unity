"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MobileMenu } from "@/components/MobileMenu";
import { navLinks } from "@/data/nav";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <div className="container-shell flex h-[72px] items-center justify-between">
        <Link href="/" className="focus-ring flex items-center gap-3 rounded-full" aria-label="Nandan Kumar home">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-300/35 bg-cyan-300/10 text-sm font-bold text-cyan-100">
            NK
          </span>
          <span className="hidden text-sm font-semibold text-white sm:inline">Nandan Kumar</span>
        </Link>
        <nav aria-label="Primary navigation" className="hidden items-center gap-1 md:flex">
          {navLinks.slice(0, -1).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "focus-ring rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/[0.06] hover:text-white",
                pathname === link.href && "bg-cyan-300/10 text-cyan-100",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button asChild size="sm">
            <Link href="/contact">
              Contact Me <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
        <MobileMenu />
      </div>
    </header>
  );
}
