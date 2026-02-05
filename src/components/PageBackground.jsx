const PageBackground = ({ children }) => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#fafaf7]">
      {/* Grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0,0,0,0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
        }}
      />

      {/* Soft gradient glow */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-emerald-50/60 via-transparent to-orange-50/40" />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default PageBackground;
