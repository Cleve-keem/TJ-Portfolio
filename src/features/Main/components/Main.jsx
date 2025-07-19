import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";
import { PiMapPinAreaThin } from "react-icons/pi";
import { TfiEmail } from "react-icons/tfi";

const socials = [
  {
    name: "tijanisalaudeen.a@gmail.com",
    ref: "tijanisalaudeen.a@gmail.com",
    icon: <TfiEmail />,
  },
  {
    name: "glitteringtjay",
    ref: "https://x.com/glitteringtjay?s=21",
    icon: <FaXTwitter />,
  },
  {
    name: "glittering_tee_jay",
    ref: "https://x.com/glitteringtjay?s=21",
    icon: <FaInstagram />,
  },
  {
    name: "Tijani (Akorede) Salaudeen",
    ref: "http://linkedin.com/in/tijani-copywriter-6bb7771ba",
    icon: <FaLinkedin />,
  },
  {
    name: "Lagos, Nigeria",
    // ref: "http://linkedin.com/in/tijani-copywriter-6bb7771ba",
    icon: <PiMapPinAreaThin />,
  },
  {
    name: "+234-702-629-2264",
    ref: "2347026292264",
    icon: <IoCallOutline />,
  },
];

export default function Main() {
  const [isBlurred, setIsBlurred] = useState(false);
  const aboutRef = useRef(null);
  const isInView = useInView(aboutRef, { margin: "-30px 0px -50% 0px" });

  useEffect(() => {
    setIsBlurred(isInView);
  }, [isInView]);

  return (
    <main className="p-7 text-white relative" id="home">
      {/* Background layer */}
      <div
        className={`fixed inset-0 bg-[url('/bg-image.jpg')] bg-cover bg-center bg-no-repeat -z-10 transition-all duration-100 md:bg-top
        }`}
        aria-hidden="true"
      />

      {/* Blur Overlay */}
      {isBlurred && (
        <div
          className="fixed inset-0 -z-10 backdrop-blur-md transition-all duration-300"
          aria-hidden="true"
        ></div>
      )}

      <section className="flex flex-col h-svh">
        <div className="flex items-center gap-2">
          <span className="block size-2 bg-green-500 rounded-full"></span>
          <p className="font-semibold">Open to work</p>
        </div>

        <section className="my-auto">
          <h1 className="text-[16px] uppercase text-amber-400 md:text-xl italic">
            Branding Storyteller & Copywriter
          </h1>

          <span className="inline-block text-5xl font-bold my-5 leading-15">
            Tijani Akorede Salaudeen
          </span>
        </section>
      </section>

      <section id="about" className="text-wrap" ref={aboutRef}>
        <ul className="grid grid-cols-1 gap-5 mb-15">
          {socials.map((item, index) => (
            <li className="flex items-center gap-3 text-[19px]" key={index}>
              <span className="block text-amber-400 text-xl">
                {item.icon}
              </span>
              <a
                href="mailTo:tijanisalaudeen.a@gmail.com"
                className="inline-block text-inherit"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        <h1 className="text-amber-400 text-4xl mb-5">About Me</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          saepe quas facere necessitatibus, autem id temporibus minima magni
          voluptates neque eius vero maiores. Hic, animi voluptates eaque
          consectetur labore blanditiis? Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Quis natus quos perferendis eligendi labore magni
          alias, aliquam minus sunt porro aliquid doloribus amet tempore?
          Adipisci reiciendis id dignissimos accusantium facere.
        </p>
      </section>
    </main>
  );
}
