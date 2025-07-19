import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";
import { PiMapPinAreaThin } from "react-icons/pi";
import { TfiEmail } from "react-icons/tfi";
import ScrollToView from "../../../ui/ScrollToView";
import { motion } from "framer-motion";

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
    <main className="p-7 text-white relative overflow-x-hidden" id="home">
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

        <motion.section
          className="my-auto"
          variants={{
            hidden: { opacity: 0, x: "-100vw" },
            visible: { opacity: 1, x: "0" },
          }}
          initial="hidden"
          animate="visible"
          transition={{
            duration: 1,
            delay: 0.3,
            type: "spring",
            stiffness: 150,
            when: "beforeChildren",
          }}
        >
          <h1 className="text-[16px] uppercase text-amber-400 md:text-xl italic">
            Branding Storyteller & Copywriter
          </h1>

          <motion.span
            className="inline-block text-5xl font-bold my-5 leading-15"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            transition={{ duration: 2, delay: 0.2 }}
          >
            Tijani Akorede Salaudeen
          </motion.span>
        </motion.section>
      </section>

      <section className="text-wrap">
        <ul className="grid grid-cols-1 gap-5 mb-15">
          {socials.map((item, index) => (
            <ScrollToView>
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
            </ScrollToView>
          ))}
        </ul>
        <div id="about" ref={aboutRef}>
          <ScrollToView>
            <h1 className="text-amber-400 text-4xl mb-5">About Me</h1>
          </ScrollToView>
          <ScrollToView>
            <p className="text-[18px] mb-5">
              Brand Storytelling & Direct Response Copywriter | I help brands &
              creators craft story-driven copy that stops the scroll and sparks
              ‘I need this’ moments | Law Grad – My native tongue? Persuasion.
            </p>
            <p className="text-[18px] mb-5">
              I am a copywriter and branding storyteller with a passion for
              crafting compelling narratives that resonate with audiences. My
              expertise lies in creating engaging content that not only informs
              but also inspires action.
            </p>
          </ScrollToView>
        </div>
      </section>
    </main>
  );
}
