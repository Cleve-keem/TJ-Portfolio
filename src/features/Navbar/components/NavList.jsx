export default function NavList({
  icon,
  label,
  href,
  id,
  activeLink,
  setActiveLink,
}) {
  function handleNextLink(id) {
    setActiveLink(id);
  }

  return (
    <li className="flex-1">
      <a
        onClick={() => handleNextLink(id)}
        href={href}
        className={`flex items-center justify-center gap-1 py-4 rounded-full text-white text-[14px] ${
          activeLink === id ? "active" : ""
        } transition-all duration-500 ease-in-out`}
      >
        <div className="text-2xl md:text-inherit">{icon}</div>
        <span className="hidden md:block">{label}</span>
      </a>
    </li>
  );
}
