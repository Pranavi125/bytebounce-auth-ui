import AuthDecorations from "./AuthDecorations";

export default function AuthBackground({ children }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-auth">
      {/* GRID */}
      <div className="absolute inset-0 auth-grid" />

      {/* FLOATING ICONS */}
      <AuthDecorations />

      {/* PAGE CONTENT */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
