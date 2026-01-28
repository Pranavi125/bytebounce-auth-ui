export default function AuthDecorations() {
  return (
    <>
      {/* ---------------- LEFT SIDE ---------------- */}
      <div className="auth-icon top-24 left-28 bg-teal-100 text-teal-600">
        📊
      </div>

      <div className="auth-icon top-1/2 left-20 bg-teal-50 text-teal-700">
        🎯
      </div>

      <div className="auth-icon bottom-40 left-36 bg-teal-100 text-teal-600">
        🚀
      </div>

      {/* ---------------- CENTER TOP ---------------- */}
      <div className="auth-icon top-24 left-1/2 -translate-x-1/2 bg-teal-50 text-teal-700">
        ⚡
      </div>

      {/* ---------------- RIGHT SIDE (SPREAD OUT) ---------------- */}

      {/* TOP RIGHT */}
      <div className="auth-icon top-20 right-40 bg-green-100 text-green-600">
        ✔
      </div>

      {/* MID RIGHT */}
      <div className="auth-icon top-[38%] right-24 bg-purple-100 text-purple-600">
        ⚙
      </div>

      {/* LOWER MID RIGHT */}
      <div className="auth-icon top-[62%] right-48 bg-orange-100 text-orange-500">
        🔒
      </div>

      {/* BOTTOM RIGHT */}
      <div className="auth-icon bottom-24 right-32 bg-yellow-100 text-yellow-600">
        ✨
      </div>
    </>
  );
}
