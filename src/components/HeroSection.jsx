import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import SecNavbar from "./SecNavbar";

function HeroSection() {
  const [imageIndex, setImageIndex] = useState(0);

  const images = [
    {
      url: '/side-1.webp',
      style: "absolute w-full h-full  bg-gradient-to-b from-accent-400 z-10 mix-blend-color "
    },
    {
      url: '/side-2.webp',
      style: "absolute w-full h-full  bg-gradient-to-b from-yellow-400 z-10 mix-blend-color"

    },
    {
      url: '/side-3.webp',
      style: "absolute w-full h-full  bg-gradient-to-b from-cyan-400 z-10 mix-blend-color"

    }

  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 700);

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount

  }, []); //
  return (
    <>
      <div className="fixed top-0 w-screen z-40 ">
        <Navbar />
      </div>
      <SecNavbar />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center max-w-7xl mx-auto lg:px-8 px-3 mt-[58px] lg:mt-[2px]">

        <div className="flex flex-col items-center md:items-start justify-center py-5 gap-8 ">
          <p className="lg:text-4xl md:text-4xl text-4xl leading-tight lg:leading-none tracking-wide font-bold text-accent-500 text-center  ">
            Indian Chemical Engineering Congress
          </p>

          <p className="lg:text-3xl md:text-3xl text-3xl leading-tight lg:leading-none tracking-wide font-bold text-accent-400 text-center my-3 mx-auto">
            CHEMCON 2024
          </p>

          <h3 className=" mx-auto font-bold text-center tracking-wide  lg:text-xl">
            Role of Chemical Engineering towards Sustainable
            Development and Atmanirbhar bharat
          </h3>

          <h4 className="text-accent-500 mx-auto font-bold text-center md:text-left text-md ">December 27-30, 2024
          </h4>
          <p className=" mx-auto">
            <p className=" mx-auto font-semibold text-center  ">Organized by

            </p>
            <h4 className=" mx-auto font-bold  text-xl text-center md:text-center ">
              <p>            Indian Institute of Chemical Engineers</p>
              <p>            Doaba Regional Centre</p>          <p>NIT Jalandhar</p>

            </h4>
          </p>
          <div className="flex flex-col md:flex-row   gap-4 items-center">
            <div className="flex flex-col justify-center items-center max-w-[300px]">
              <p className="  font-semibold text-center md:text-left ">
                77<sup>th </sup>Annual Session

              </p>
              <img src="/logo77th.jpg" className=" w-16 md:w-20 " alt="" />

              <p className=" font-bold text-center ">
                Indian Institute Of Chemical Engineers

              </p>
            </div>
            <div className="flex flex-col justify-center  max-w-[300px] items-center">
              <p className=" font-semibold text-center md:text-left ">
                Organized At
              </p>
              <img src="/logo.png" className=" w-16 md:w-20 " alt="" />

              <p className=" font-bold text-center ">
                Dr. B R Ambedkar National Institute of Technology, Jalandhar
              </p>
            </div>

          </div>
          {/* <section className="mt-8 lg:mt-14 text-stone-900 text-center md:text-left">
            <h1 className="lg:text-5xl text-3xl  font-bold">
              IIChE ChemCon 2024
            </h1>
            <div className="space-y-4 mt-6 lg:mt-10">
              <p className="lg:text-xl text-lg font-medium">


              </p>

            </div>
          </section> */}
          <a
            href="#"
            className="mt-3 mx-auto flex items-center justify-center whitespace-nowrap rounded-md border w-fit border-transparent bg-accent-500 px-6 py-2 text-base font-semibold text-white shadow-sm hover:bg-accent-700"
          >
            Register
          </a>
        </div>
        <div className="grid grid-cols-2 grid-rows-3 gap-3 md:gap-5 w-full h-full">
          <div className="relative">
            <div className="absolute w-full h-full bg-accent-500 z-10 mix-blend-color" />
            <img
              src={images[imageIndex].url}
              className="bg-black object-cover h-full w-full "
              alt=""
            />
          </div>
          <div className="relative row-span-3">
            <div className={images[imageIndex].style} />
            <img
              src='/main.webp'
              className="bg-black  object-cover h-full object-left"
              alt=""
            />
          </div>
          <div className="relative">
            <div className="absolute w-full h-full bg-yellow-500 z-10 mix-blend-color" />
            <img
              src={images[(imageIndex + 1) % 3].url}
              className="bg-black object-cover h-full w-full"
              alt=""
            />
          </div>
          <div className="relative">
            <div className="absolute w-full h-full bg-cyan-500 z-10 mix-blend-color" />
            <img
              src={images[(imageIndex + 2) % 3].url}
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
