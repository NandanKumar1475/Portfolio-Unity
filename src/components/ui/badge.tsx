import * as React from "react";
import { cn } from "@/lib/utils";

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  tone?: "cyan" | "blue" | "slate";
};

export function Badge({ className, tone = "slate", ...props }: BadgeProps) {
  const tones = {
    cyan: "border-cyan-300/25 bg-cyan-300/10 text-cyan-100",
    blue: "border-blue-300/25 bg-blue-300/10 text-blue-100",
    slate: "border-white/12 bg-white/[0.06] text-slate-200",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium",
        tones[tone],
        className,
      )}
      {...props}
    />
  );
}
