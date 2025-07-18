import { PiUser } from "react-icons/pi";

const navItems = [
  { name: "Home", href: "#home", icon: <PiUser /> },
  { name: "About", href: "#about", icon: <PiUser /> },
  { name: "Experience", href: "#experience", icon: <PiUser /> },
  { name: "Skills", href: "#skills", icon: <PiUser /> },
  { name: "contact", href: "#contact", icon: <PiUser /> },
];

export default function Navbar() {
  return (
    <nav>
      <ul className="flex w-[60%] mx-auto border rounded-4xl overflow-hidden"></ul>
    </nav>
  );
}
