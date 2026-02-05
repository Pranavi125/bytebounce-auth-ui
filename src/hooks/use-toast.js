export function toast({ title, description }) {
  if (title) {
    alert(
      `${title}${description ? "\n\n" + description : ""}`
    );
  }
}
