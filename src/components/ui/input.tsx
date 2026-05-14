import * as React from "react";
import { cn } from "@/lib/utils";

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        "focus-ring h-12 w-full rounded-xl border border-white/12 bg-white/[0.05] px-4 text-sm text-white placeholder:text-slate-500",
        className,
      )}
      {...props}
    />
  ),
);
Input.displayName = "Input";
