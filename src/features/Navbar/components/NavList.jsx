export default function NavList({ icon, label }) {
  return (
    <li className="flex-1 rounded-4xl p-2">
      <a href="#home" className="flex items-center justify-center gap-1 h-full">
        <div className="size-5">{icon}</div>
        <span>{label}</span>
      </a>
    </li>
  );
}
