export default function SectionHeader({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-4">
      <h2 className="text-2xl font-semibold tracking-tight text-slate-900">{title}</h2>
      <div className="h-px flex-1 bg-gradient-to-r from-slate-300 via-slate-200 to-transparent" />
    </div>
  );
}
