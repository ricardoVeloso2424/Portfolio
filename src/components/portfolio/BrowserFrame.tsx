import Image from "next/image";
import { cn } from "@/lib/cn";

export default function BrowserFrame({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-white/10 bg-[#0a0f18] shadow-[0_25px_60px_-30px_rgba(0,0,0,0.9)]",
        className,
      )}
    >
      <div aria-hidden className="flex items-center gap-1.5 border-b border-white/[0.06] bg-white/[0.02] px-3.5 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 h-4 flex-1 rounded-md bg-white/[0.04]" />
      </div>
      <div className="group/shot relative aspect-video overflow-hidden">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 1024px) 92vw, 520px"
          className="object-cover object-top transition-transform duration-500 ease-out motion-safe:group-hover/shot:scale-[1.04] motion-reduce:transition-none"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#04070d]/35 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover/shot:opacity-100"
        />
      </div>
    </div>
  );
}
