import { useEffect, useState } from "react";
import gsap from "gsap";
import axios from "axios";
import formatDate from "../utility/formatDate";
import getEnvironment from "../getenvironment";

function HeroSection(props) {
  const confid = props.confid;
  const [data, setData] = useState(null);

  const apiUrl = getEnvironment();

  useEffect(() => {
    const animation = () => {
      let tl = gsap.timeline();
      let tl2 = gsap.timeline();
      let tl3 = gsap.timeline();
      let tl4 = gsap.timeline();
      let tl5 = gsap.timeline();
      let tween = tl.fromTo(
        ".main",
        {
          x: 600,
          y: 600,
    
        },
        {
          x: 0,
          y: 0,
        
          duration: 3.5,
          stagger: 7,
          opacity: 1,
          ease: "sine.out",
        }
      );

      let tween2 = tl2.fromTo(
        ".main",
        { x: 0, y: 0, zIndex: -1 },
        {
          x: -600,
          y: -600,
          duration: 3.5,
          stagger: 7,
          opacity: 0,
          delay: 7,
          ease: "sine.out",
        }
      );

      let tween3 = tl3.fromTo(
        ".main2",
        {
          opacity: 0,
          x: 600,
          y: 600,
         
        },
        {
          x: 0,
          y: 0,
          duration: 3.5,
          stagger: 7,
          opacity: 1,
          ease: "sine.out",
          delay: 21,
         
        }
      );

      let tween4 = tl4.to(".main2", {
        x: -600,
        y: -600,
        duration: 3.5,
        stagger: 7,
        opacity: 1,
        delay: 28,
        ease: "sine.out",
      });

      let tween5 = tl5.to("main", { opacity: 0, duration: 0.5 });

      tween.seek(0);
      tween2.seek(0);
      tween5.play();
      tween3.seek(0);
      tween4.seek(0);
    };

    animation();
    setInterval(() => {
      animation();
    }, 49000);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);

    axios
      .get(`${apiUrl}/conferencemodule/home/conf/${confid}`, {
        withCredentials: true,
      })
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, [apiUrl, confid]);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center max-w-7xl mx-auto lg:px-8 px-3 mt-[58px] lg:mt-[2px]">
        <div className="flex flex-col items-center md:items-start justify-center py-5 gap-8 ">
          <p className="lg:text-4xl md:text-4xl text-4xl leading-tight lg:leading-none tracking-wide font-bold text-accent-500 text-center  ">
            {data ? data.confName : " "}{" "}
          </p>

          <p className="lg:text-3xl md:text-3xl text-3xl leading-tight lg:leading-none tracking-wide font-bold text-accent-400 text-center my-3 mx-auto">
            {data ? data.shortName : " "}{" "}
          </p>

          <h3 className=" mx-auto font-bold text-center tracking-wide  lg:text-xl">
            Role of Chemical Engineering towards Sustainable Development and
            Atmanirbhar bharat
          </h3>

          <h4 className="text-accent-500 mx-auto font-bold text-center md:text-left text-md ">
            {" "}
            {data
              ? formatDate(data.confStartDate) +
                " to " +
                formatDate(data.confEndDate)
              : " "}
          </h4>
          <p className=" mx-auto">
            <p className=" mx-auto font-semibold text-center  ">Organized by</p>
            <h4 className=" mx-auto font-bold  text-xl text-center md:text-center ">
              <p> Indian Institute of Chemical Engineers</p>
              <p> Doaba Regional Centre</p> <p>NIT Jalandhar</p>
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

        <div className="relative h-full w-full p-[0%] min-h-[20rem] overflow-hidden ">
          <div className="h-full w-full relative">
            <div className="opacity-0 absolute main  grid grid-cols-4 grid-rows-4 gap-2 md:gap-5 w-full h-full ">
              <div className="relative col-span-4 row-span-3 flex justify-center rounded-lg">
                <div className="absolute w-full h-full   z-30  rounded-lg" />
                <img
                  src="/main.webp"
                  className={`bg-black  object-cover h-full object-left lg:rounded-xl rounded-lg`}
                  alt=""
                />
              </div>
            </div>
            <div className="opacity-0 absolute main  grid grid-cols-4 grid-rows-4 gap-2 md:gap-5 w-full h-full ">
              <div className="  relative col-span-4 row-span-3 flex justify-center rounded-lg">
                <div className="absolute w-full h-full   z-20  rounded-lg" />
                <img
                  src="/side-1.webp"
                  className={`bg-black  object-cover h-full object-left lg:rounded-xl rounded-lg`}
                  alt=""
                />
              </div>
            </div>

            <div className="opacity-0 absolute main  grid grid-cols-4 grid-rows-4 gap-2 md:gap-5 w-full h-full ">
              <div className="  relative col-span-4 row-span-3 flex justify-center rounded-lg">
                <div className="absolute w-full h-full  z-10  rounded-lg" />
                <img
                  src="/side-2.webp"
                  className={`bg-black  object-cover h-full object-left lg:rounded-xl rounded-lg`}
                  alt=""
                />
              </div>
            </div>

            <div className="opacity-0 absolute main  grid grid-cols-4 grid-rows-4 gap-2 md:gap-5 w-full h-full ">
              <div className="  relative col-span-4 row-span-3 flex justify-center rounded-lg">
                <div className="absolute w-full h-full  z-10  rounded-lg" />
                <img
                  src="/side-3.webp"
                  className={`bg-black  object-cover h-full object-left lg:rounded-xl rounded-lg`}
                  alt=""
                />
              </div>
            </div>
            <div className="opacity-0 absolute main2 grid grid-cols-4 grid-rows-4 gap-2 md:gap-5 w-full h-full ">
              <div className="relative col-span-4 row-span-3 flex justify-center rounded-lg">
                <div className="absolute w-full h-full   z-30  rounded-lg" />
                <img
                  src="/main.webp"
                  className={`bg-black  object-cover h-full object-left lg:rounded-xl rounded-lg`}
                  alt=""
                />
              </div>
            </div>
            <div className="opacity-0 absolute main2  grid grid-cols-4 grid-rows-4 gap-2 md:gap-5 w-full h-full ">
              <div className="  relative col-span-4 row-span-3 flex justify-center rounded-lg">
                <div className="absolute w-full h-full   z-20  rounded-lg" />
                <img
                  src="/side-1.webp"
                  className={`bg-black  object-cover h-full object-left lg:rounded-xl rounded-lg`}
                  alt=""
                />
              </div>
            </div>

            <div className="opacity-0 absolute main2  grid grid-cols-4 grid-rows-4 gap-2 md:gap-5 w-full h-full ">
              <div className="  relative col-span-4 row-span-3 flex justify-center rounded-lg">
                <div className="absolute w-full h-full   z-10  rounded-lg" />
                <img
                  src="/side-2.webp"
                  className={`bg-black  object-cover h-full object-left lg:rounded-xl rounded-lg `}
                  alt=""
                />
              </div>
            </div>

            <div className="opacity-0 absolute main2  grid grid-cols-4 grid-rows-4 gap-2 md:gap-5 w-full h-full ">
              <div className="  relative col-span-4 row-span-3 flex justify-center rounded-lg">
                <div className="absolute w-full h-full  z-10  rounded-lg" />
                <img
                  src="/side-3.webp"
                  className={`bg-black  object-cover h-full object-left lg:rounded-xl rounded-lg`}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;