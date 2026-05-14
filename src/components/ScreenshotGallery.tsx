import Image from "next/image";

export function ScreenshotGallery({ screenshots, title }: { screenshots: string[]; title: string }) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {screenshots.map((screenshot, index) => (
        <div key={screenshot} className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
          <Image
            src={screenshot}
            alt={`${title} screenshot ${index + 1}`}
            width={1200}
            height={800}
            className="aspect-[16/11] w-full object-cover"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
}
