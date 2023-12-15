import Navbar from "./Navbar";

function HeroSection() {
  return (
    <>
      <Navbar />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center max-w-7xl mx-auto lg:px-8 px-4">
        <div className="flex flex-col items-center md:items-start justify-center py-10 gap-3">
          <header className="flex flex-col md:flex-row gap-4 items-center">
            <img src="/logo.png" className=" w-16 md:w-20" alt="" />
            <h2 className="uppercase font-bold text-center md:text-left lg:text-xl">
              Dr. B R Ambedkar National Institute of Technology, Jalandhar
            </h2>
          </header>
          <section className="mt-8 lg:mt-14 text-stone-900 text-center md:text-left">
            <h1 className="lg:text-5xl text-3xl  font-bold">
              IIChE ChemCon 2024
            </h1>
            <div className="space-y-4 mt-6 lg:mt-10">
              <p className="lg:text-xl text-lg font-medium">
                An International Conference
              </p>
              <p className="lg:text-6xl md:text-4.5xl text-4xl leading-tight lg:leading-none tracking-tight font-bold text-accent-500">
                Energy Transition: Challenges and Opportunities
              </p>
            </div>
          </section>
          <a
            href="#"
            className="mt-8 lg:mt-16 flex items-center justify-center whitespace-nowrap rounded-md border w-fit border-transparent bg-accent-500 px-6 py-2 text-base font-semibold text-white shadow-sm hover:bg-accent-700"
          >
            Register
          </a>
        </div>
        <div className="grid grid-cols-2 grid-rows-3 gap-3 md:gap-5 w-full h-full">
          <div className="relative">
            <div className="absolute w-full h-full bg-accent-500 z-10 mix-blend-color" />
            <img
              src="/side-1.webp"
              className="bg-black object-cover h-full w-full "
              alt=""
            />
          </div>
          <div className="relative row-span-3">
            <div className="absolute w-full h-full bg-gradient-to-b from-stone-900 to-accent-500 z-10 mix-blend-color" />
            <img
              src="/main.webp"
              className="bg-black  object-cover h-full object-left"
              alt=""
            />
          </div>
          <div className="relative">
            <div className="absolute w-full h-full bg-yellow-500 z-10 mix-blend-color" />
            <img
              src="/side-2.webp"
              className="bg-black object-cover h-full w-full"
              alt=""
            />
          </div>
          <div className="relative">
            <div className="absolute w-full h-full bg-cyan-500 z-10 mix-blend-color" />
            <img
              src="/side-3.webp"
              className="bg-black object-cover h-full w-full"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
