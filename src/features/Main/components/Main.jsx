export default function Main() {
  return (
    <main className="p-7 text-white" id="home">
      {/* Background layer */}
      <div
        className="fixed inset-0 bg-[url('/bg-image.jpg')] bg-cover bg-center bg-no-repeat -z-10 transition-all duration-500 ease-in-out"
        aria-hidden="true"
      />

      <section className="flex flex-col h-svh">
        <div className="flex items-center gap-2">
          <span className="block size-2 bg-green-500 rounded-full"></span>
          <p className="font-semibold">Open to work</p>
        </div>

        <section className="my-auto">
          <h1 className="uppercase text-[16px] text-amber-400 font-semibold md:text-3xl italic">
            Branding Storytelling & Copywriter
          </h1>

          <span className="inline-block text-5xl font-bold my-5 leading-15">
            Tijani Akorede Salaudeen
          </span>
        </section>
      </section>

      <section id="about" className="">
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
