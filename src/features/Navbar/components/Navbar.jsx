import { PiUser } from "react-icons/pi";
import NavList from "./NavList";
import { MdOutlineBusinessCenter, MdOutlineWorkspacePremium } from "react-icons/md";

const navItems = [
  { name: "Home", href: "#home", icon: <PiUser /> },
  { name: "About", href: "#about", icon: <MdOutlineBusinessCenter /> },
  {
    name: "Experience",
    href: "#experience",
    icon: <MdOutlineWorkspacePremium />,
  },
  { name: "Skills", href: "#skills", icon: <PiUser /> },
  { name: "contact", href: "#contact", icon: <PiUser /> },
];

export default function Navbar() {
  return (
    <nav className="fixed bottom-14 w-[60%] left-1/2 right-1/2 -translate-x-1/2 rounded-4xl overflow-hidden border bg-gray-400">
      <ul className="flex">
        {navItems.map((item, index) => (
          <NavList key={index} icon={item.icon} label={item.name} />
        ))}
      </ul>
    </nav>
  );
}
