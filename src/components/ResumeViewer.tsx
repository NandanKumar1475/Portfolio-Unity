import { ArrowDownToLine } from "lucide-react";
import { Button } from "@/components/ui/button";

const resumePath = "/resume/Nandan_Kumar_Unity_XR_Developer.pdf";

export function ResumeViewer() {
  return (
    <div className="glass overflow-hidden rounded-2xl">
      <div className="flex flex-col gap-4 border-b border-white/10 p-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-white">Nandan Kumar Resume</h2>
          <p className="mt-1 text-sm text-slate-400">Unity XR Developer / AR VR Simulation Engineer</p>
        </div>
        <Button asChild>
          <a href={resumePath} download>
            Download PDF <ArrowDownToLine className="h-4 w-4" aria-hidden="true" />
          </a>
        </Button>
      </div>
      <iframe
        title="Nandan Kumar resume PDF"
        src={resumePath}
        className="h-[72vh] min-h-[520px] w-full bg-slate-950"
      />
    </div>
  );
}
