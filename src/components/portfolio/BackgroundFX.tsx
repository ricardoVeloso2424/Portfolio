export default function BackgroundFX() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[#04070d]" />

      <div className="aurora-a absolute -top-[22%] -left-[12%] h-[42rem] w-[42rem] rounded-full bg-cyan-500/[0.07] blur-[120px]" />
      <div className="aurora-b absolute top-[12%] -right-[14%] h-[38rem] w-[38rem] rounded-full bg-emerald-500/[0.06] blur-[120px]" />
      <div className="absolute bottom-[-18%] left-[22%] h-[34rem] w-[34rem] rounded-full bg-indigo-500/[0.05] blur-[130px]" />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.05)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_28%,black_30%,transparent_78%)]" />

      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

      <div className="noise absolute inset-0 opacity-[0.04]" />
    </div>
  );
}
