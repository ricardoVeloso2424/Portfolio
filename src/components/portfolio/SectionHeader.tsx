export default function SectionHeader({ index, title }: { index: string; title: string }) {
  return (
    <div className="mb-8 flex items-center gap-4 sm:mb-10">
      <span aria-hidden className="font-mono text-sm tracking-[0.2em] text-cyan-400/80">
        {index}
      </span>
      <h2 className="text-2xl font-semibold tracking-tight text-slate-100 sm:text-3xl">{title}</h2>
      <div aria-hidden className="h-px flex-1 bg-gradient-to-r from-white/20 via-white/[0.07] to-transparent" />
    </div>
  );
}
