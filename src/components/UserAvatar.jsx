export default function UserAvatar() {
  const name = localStorage.getItem("userName");

  if (!name) return null;

  const firstLetter = name.charAt(0).toUpperCase();

  // 🎨 Color based on name (always same for same user)
  const colors = [
    "bg-teal-500",
    "bg-indigo-500",
    "bg-pink-500",
    "bg-purple-500",
    "bg-orange-500",
    "bg-green-500",
  ];

  const colorIndex = name.charCodeAt(0) % colors.length;
  const bgColor = colors[colorIndex];

  return (
    <div
      className={`w-9 h-9 ${bgColor} text-white rounded-full flex items-center justify-center font-semibold`}
      title={name}
    >
      {firstLetter}
    </div>
  );
}
