import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export function VideoEmbed({ title, url }: { title: string; url: string }) {
  const isEmbeddableVideo = url.includes("youtube.com/embed") || url.includes("player.vimeo.com");

  if (!isEmbeddableVideo) {
    return (
      <div className="rounded-2xl border border-white/10 bg-slate-950 p-6">
        <p className="text-lg font-semibold text-white">External product reference</p>
        <p className="mt-3 text-sm leading-6 text-slate-400">
          This project is based on hardware and workflow testing. Open the official reference page
          used during validation.
        </p>
        <Button asChild className="mt-5" variant="secondary">
          <a href={url} target="_blank" rel="noreferrer">
            Open Reference <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
        </Button>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-950">
      <iframe
        title={title}
        src={url}
        className="aspect-video w-full"
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}
