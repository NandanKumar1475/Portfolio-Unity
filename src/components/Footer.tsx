import Link from "next/link";
import { SocialLinks } from "@/components/SocialLinks";
import { navLinks } from "@/data/nav";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="container-shell flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <Link href="/" className="text-base font-semibold text-white">
            Nandan Kumar
          </Link>
          <p className="mt-2 max-w-xl text-sm text-slate-400">
            Unity XR Developer specializing in interactive simulations, AR/VR workflows, and
            performance-focused immersive applications.
          </p>
        </div>
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
          <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate-400">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-cyan-100">
                {link.label}
              </Link>
            ))}
          </nav>
          <SocialLinks compact />
        </div>
      </div>
    </footer>
  );
}
