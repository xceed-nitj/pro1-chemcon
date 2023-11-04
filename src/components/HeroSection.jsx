import Navbar from "./Navbar";

function HeroSection() {
  return (
    <section className="relative isolate bg-amber-800 lg:bg-gradient-to-tr from-amber-600 to-amber-400">
      <Navbar />
      <div
        className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-gradient-to-br from-gray-800 to-gray-950 shadow-xl shadow-amber-900/10 sm:-mr-80 lg:-mr-96"
        aria-hidden="true"
      />
      <div className="flex flex-col-reverse lg:flex-row text-center lg:text-left items-center lg:justify-between gap-10 max-w-7xl mx-auto px-4 py-20">
        <div className="flex flex-col items-center lg:items-start justify-center md:pt-12 py-2 px-4 md:gap-10 gap-3 text-white">
          <h1 className="lg:text-5xl text-4xl font-bold">IIChE ChemCon 2024</h1>
          <div className="space-y-4">
            <p className="lg:text-xl">An International Conference</p>
            <p className="lg:text-4xl font-bold text-amber-500">
              Energy Transition: Challenges and Opportunities
            </p>
          </div>
          <p className="lg:text-2xl font-semibold">January 27-30, 2024</p>
          <a
            href="#"
            className="flex items-center justify-center whitespace-nowrap rounded-md border w-fit border-transparent bg-amber-500 px-6 py-2 text-base font-medium text-white shadow-sm hover:bg-amber-700"
          >
            Register
          </a>
        </div>
        <img
          src="/hero-img.png"
          className="rounded-full ring-2 lg:ring-8 ring-amber-500 max-h-60 lg:max-h-[500px] max-w-[500px]"
        />
      </div>
    </section>
  );
}

export default HeroSection;
