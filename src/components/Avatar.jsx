export default function Avatar({ name, size = 40, onClick }) {
  const letter =
    name && String(name).trim().length > 0
      ? String(name).trim().charAt(0).toUpperCase()
      : "U";

  const colors = [
    "#14b8a6",
    "#3b82f6",
    "#8b5cf6",
    "#ec4899",
    "#f97316",
    "#22c55e",
  ];

  let hash = 0;
  if (name) {
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
  }

  const bg = colors[Math.abs(hash) % colors.length];

  return (
    <div
      onClick={onClick}
      title={name}
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        background: bg,
        color: "#fff",
        fontWeight: 700,
        fontSize: size / 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        userSelect: "none",
        cursor: onClick ? "pointer" : "default",
      }}
    >
      {letter}
    </div>
  );
}
