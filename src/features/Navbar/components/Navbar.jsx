import { PiUser } from "react-icons/pi";
import NavList from "./NavList";
import {
  MdOutlineBusinessCenter,
  MdOutlineWorkspacePremium,
} from "react-icons/md";
import { FaLink } from "react-icons/fa";
import { SlFire } from "react-icons/sl";
import { useState } from "react";

const navItems = [
  { id: 1, name: "Home", href: "#home", icon: <PiUser /> },
  { id: 2, name: "About", href: "#about", icon: <MdOutlineBusinessCenter /> },
  {
    id: 3,
    name: "Experience",
    href: "#experience",
    icon: <MdOutlineWorkspacePremium />,
  },
  { id: 4, name: "Skills", href: "#skills", icon: <SlFire /> },
  { id: 5, name: "Links", href: "#link", icon: <FaLink /> },
];

export default function Navbar() {
  const [activeLink, setActiveLink] = useState(1);
  return (
    <nav className="fixed bottom-14 w-[80%] left-1/2 right-1/2 -translate-x-1/2 rounded-full overflow-hidden backdrop-blur-lg bg-gray-950/30 shadow-sm md:w-[60%] p-2">
      <ul className="flex">
        {navItems.map((item) => (
          <NavList
            key={item.id}
            id={item.id}
            icon={item.icon}
            label={item.name}
            activeLink={activeLink}
            setActiveLink={setActiveLink}
          />
        ))}
      </ul>
    </nav>
  );
}
