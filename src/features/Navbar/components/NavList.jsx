export default function NavList({ icon, label }) {
  return (
    <li className="flex-1">
      <a
        href="#home"
        className="flex items-center justify-center gap-1 py-4 rounded-4xl text-white text-[14px]"
      >
        <div className="text-inherit">{icon}</div>
        <span>{label}</span>
      </a>
    </li>
  );
}
