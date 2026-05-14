import { socials } from "@/data/socials";
import { cn } from "@/lib/utils";

export function SocialLinks({ className, compact = false }: { className?: string; compact?: boolean }) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      {socials.map((social) => {
        const Icon = social.icon;
        return (
          <a
            key={social.label}
            href={social.href}
            target={social.href.startsWith("mailto:") ? undefined : "_blank"}
            rel={social.href.startsWith("mailto:") ? undefined : "noreferrer"}
            aria-label={`Open ${social.label}`}
            className={cn(
              "focus-ring inline-flex items-center justify-center rounded-full border border-white/12 bg-white/[0.05] text-slate-300 transition hover:border-cyan-300/40 hover:bg-cyan-300/10 hover:text-cyan-100",
              compact ? "h-9 w-9" : "h-11 w-11",
            )}
          >
            <Icon className={compact ? "h-4 w-4" : "h-5 w-5"} aria-hidden="true" />
          </a>
        );
      })}
    </div>
  );
}
