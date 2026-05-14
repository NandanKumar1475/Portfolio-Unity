import * as React from "react";
import { cn } from "@/lib/utils";

export const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => (
  <textarea
    ref={ref}
    className={cn(
      "focus-ring min-h-36 w-full resize-y rounded-xl border border-white/12 bg-white/[0.05] px-4 py-3 text-sm text-white placeholder:text-slate-500",
      className,
    )}
    {...props}
  />
));
Textarea.displayName = "Textarea";
