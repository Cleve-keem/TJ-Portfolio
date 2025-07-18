import { PiUser } from "react-icons/pi";
import NavList from "./NavList";
import { MdOutlineBusinessCenter, MdOutlineWorkspacePremium } from "react-icons/md";
import { FaLink } from "react-icons/fa";
import { SlFire } from "react-icons/sl";

const navItems = [
  { name: "Home", href: "#home", icon: <PiUser /> },
  { name: "About", href: "#about", icon: <MdOutlineBusinessCenter /> },
  {
    name: "Experience",
    href: "#experience",
    icon: <MdOutlineWorkspacePremium />,
  },
  { name: "Skills", href: "#skills", icon: <SlFire /> },
  { name: "Links", href: "#link", icon: <FaLink /> },
];

export default function Navbar() {
  return (
    <nav className="fixed bottom-14 w-[90%] left-1/2 right-1/2 -translate-x-1/2 rounded-full overflow-hidden backdrop-blur-lg bg-gray-950/30 shadow-sm px-2">
      <ul className="flex">
        {navItems.map((item, index) => (
          <NavList key={index} icon={item.icon} label={item.name} />
        ))}
      </ul>
    </nav>
  );
}
