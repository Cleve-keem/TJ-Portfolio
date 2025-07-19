import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

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
          className="fixed inset-1 -z-10 backdrop-blur-md transition-all duration-300"
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
            Branding Storytelling & Copywriter
          </h1>

          <span className="inline-block text-5xl font-bold my-5 leading-15">
            Tijani Akorede Salaudeen
          </span>
        </section>
      </section>

      <section id="about" className="text-wrap" ref={aboutRef}>
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
