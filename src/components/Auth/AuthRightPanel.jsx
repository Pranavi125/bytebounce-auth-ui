export default function AuthRightPanel({ title, description }) {
  return (
    <div className="relative hidden md:flex flex-1 items-center justify-center overflow-hidden bg-[#0D868C]/10">
      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 auth-grid" />

      {/* GRADIENT OVERLAY */}
      <div className="absolute inset-0 auth-gradient" />

      {/* FLOATING ICONS – RIGHT */}
      <div className="absolute top-24 right-28 text-4xl animate-float">✅</div>
      <div className="absolute top-48 right-16 text-3xl animate-float-slow">⚙️</div>
      <div className="absolute bottom-40 right-24 text-4xl animate-float">🔒</div>
      <div className="absolute bottom-24 right-14 text-3xl animate-float-slow">✨</div>

      {/* FLOATING ICONS – LEFT (NEW) */}
      <div className="absolute top-28 left-24 text-4xl animate-float">📊</div>
      <div className="absolute bottom-32 left-20 text-3xl animate-float-slow">🚀</div>

      {/* CENTER TEXT */}
      <div className="relative z-10 max-w-md text-center px-6">
        <h2 className="text-4xl font-bold text-slate-900">{title}</h2>
        <p className="mt-4 text-lg text-slate-600">{description}</p>
      </div>
    </div>
  );
}
