import Navbar from "./Navbar";

function HeroSection() {
  return (
    <>
      <Navbar />

      <div className="grid grid-cols-2 text-center lg:text-left items-center max-w-7xl mx-auto lg:px-8 px-4">
        <div className="flex flex-col justify-center py-10 gap-3">
          <header className="flex gap-4 items-center">
            <img src="/logo.png" className="w-20" alt="" />
            <h2 className="uppercase font-bold text-xl">
              Dr. B R Ambedkar National Institute of Technology Jalandhar
            </h2>
          </header>
          <section className="mt-14 text-stone-900">
            <h1 className="lg:text-5xl text-4xl font-bold">
              IIChE ChemCon 2024
            </h1>
            <div className="space-y-4 mt-10">
              <p className="lg:text-xl font-medium">
                An International Conference
              </p>
              <p className="lg:text-6xl leading-none tracking-tight font-bold text-accent-500">
                Energy Transition: Challenges and Opportunities
              </p>
            </div>

            <a
              href="#"
              className="mt-16 flex items-center justify-center whitespace-nowrap rounded-md border w-fit border-transparent bg-accent-500 px-6 py-2 text-base font-semibold text-white shadow-sm hover:bg-accent-700"
            >
              Register
            </a>
          </section>
        </div>
        <div className="grid grid-cols-2 grid-rows-3 gap-5 w-full h-full">
          <div className="relative">
            <div className="absolute w-full h-full bg-accent-500 z-10 mix-blend-color" />
            <img
              src="/side-1.jpg"
              className="bg-black object-cover h-full w-full "
              alt=""
            />
          </div>
          <div className="relative row-span-3">
            <div className="absolute w-full h-full bg-gradient-to-b from-stone-900 to-accent-500 z-10 mix-blend-color" />
            <img
              src="/main.jpg"
              className="bg-black  object-cover h-full object-left"
              alt=""
            />
          </div>
          <div className="relative">
            <div className="absolute w-full h-full bg-yellow-500 z-10 mix-blend-color" />
            <img
              src="/side-2.jpg"
              className="bg-black object-cover h-full w-full"
              alt=""
            />
          </div>
          <div className="relative">
            <div className="absolute w-full h-full bg-cyan-500 z-10 mix-blend-color" />
            <img
              src="/side-3.jpg"
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
