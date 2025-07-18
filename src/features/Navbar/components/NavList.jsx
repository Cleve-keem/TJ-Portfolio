import { NavLink } from "react-router-dom";

export default function NavList({ icon, label }) {
  return (
    <li className="flex-1">
      <NavLink
        to="#home"
        className="flex items-center justify-center gap-1 p-2 rounded-4xl"
      >
        <div className="text-xl">{icon}</div>
        <span>{label}</span>
      </NavLink>
    </li>
  );
}
