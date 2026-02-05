export function Button({
  children,
  className = "",
  ...props
}) {
  return (
    <button
      className={`bg-brand hover:bg-brand-dark text-white px-4 py-2 rounded-md text-sm transition-colors ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
