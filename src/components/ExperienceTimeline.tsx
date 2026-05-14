import { timeline } from "@/data/experience";

export function ExperienceTimeline() {
  return (
    <div className="relative">
      <div className="absolute bottom-0 left-4 top-0 w-px bg-gradient-to-b from-cyan-300/70 via-blue-400/30 to-transparent" />
      <div className="space-y-7">
        {timeline.map((item) => (
          <article key={item.title} className="relative pl-12">
            <span className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full border border-cyan-300/40 bg-slate-950">
              <span className="h-2.5 w-2.5 rounded-full bg-cyan-200" />
            </span>
            <p className="text-sm font-medium text-cyan-100">{item.date}</p>
            <h3 className="mt-2 text-xl font-semibold text-white">{item.title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-400">{item.description}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
