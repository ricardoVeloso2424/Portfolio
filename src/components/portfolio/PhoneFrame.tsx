import Image from "next/image";
import { cn } from "@/lib/cn";

export default function PhoneFrame({
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
        "relative mx-auto aspect-[9/19.5] w-full overflow-hidden rounded-[1.9rem] border border-white/12 bg-[#0a0f18] p-1.5 shadow-[0_25px_60px_-30px_rgba(0,0,0,0.9)]",
        className,
      )}
    >
      <span
        aria-hidden
        className="absolute left-1/2 top-2.5 z-10 h-1 w-12 -translate-x-1/2 rounded-full bg-white/15"
      />
      <div className="group/shot relative h-full w-full overflow-hidden rounded-[1.55rem]">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 640px) 55vw, 220px"
          className="object-cover object-top transition-transform duration-500 ease-out motion-safe:group-hover/shot:scale-[1.03] motion-reduce:transition-none"
        />
      </div>
    </div>
  );
}
