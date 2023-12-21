import { useState } from "react";
import Separator from "./common/Separator";

function AboutNews() {
  const [isMouseOver, setIsMouseOver] = useState(false);

  const dummyData = [
    {
      id: 1,
      title1: "Call for Papers ",
      description:
        "The authors are requested to submit abstract not exceeding 300 words of the original research work or the critical reviews for  presentation and publication typed in “Times New Roman” with  “1.5” line spacing and 10 font size to the Organizing Secretary, CHEMCON 2024. Camera-ready full paper as soft copy through  email/Google form will be required to be submitted after  acceptance of the abstract of the paper. IIChE reserves the right  to publish abstracts and full papers submitted for CHEMCON  2024",
    },
    {
      id: 2,
      title1: "Call for Sponsors ",
      description:
        "The sponsors are entitled to nominate two complimentary   delegates along with availing of local hospitality during the  congress. They are also entitled to put hoardings/ Banners at the  suitable locations provided by the organizers",
    },

  ];

  return (
    <div className="flex flex-col items-center lg:flex-row lg:justify-evenly lg:items-start max-w-7xl mx-auto px-4 py-20">
      <div className="w-full  md:w-[700px] lg:w-3/5 lg:max-w-full">
        <h2 className="text-4xl font-sans font-bold text-gray-950  ">
        CHEMCON 2024
        </h2>
        <Separator />
        <p className="text-base text-justify font-sans font-base text-gray-800">
          CHEMCON 2024, the 77th Annual Session of the Indian Institute of
          Chemical Engineers will be held during December 27-30, 2024 at
          NIT Jalandhar.
          The annual technical jamboree of IIChE, CHEMCON, continues
          to encourage academic activities to help students as well as
          teachers to continuously develop their skills to meet the demands
          of the present society. CHEMCON 2024 also brings together
          stakeholders of Chemical Engineering profession, researchers
          and industrialists to discuss current trends and future
          developments in the field of Chemical Engineering. The theme of
          CHEMCON 2024 is “Role of Chemical Engineering towards
          sustainable development and Atmanirbhar bharat”
        </p>
        <h2 className="text-4xl font-sans font-bold mt-4 text-gray-950  ">
          About IICHE
        </h2>
        <Separator />
        <p className="text-base text-justify font-sans font-base text-gray-800">
          The Indian Institute of Chemical Engineers (IIChE) is the apex
          professional body of Chemical Engineers in the country instituted
          in the year 1947 and presently has more than 25,000 corporate
          members on its roll. The activities of the Institute are spread
          across the country through its 47 Regional Centres and 186
          Student Chapters, apart from the HQ located at the Jadavpur
          University Campus, Kolkata
          The IIChE has been conducting the Associate Membership
          Examination since 1960 and publishes an esteemed quarterly
          Journal “The Indian Chemical Engineer” since 1959..
        </p>
      </div>
      <div className="sm:w-full md:w-[500px] lg:w-2/5 max-w-[500px] h-96 mt-10 lg:mt-0 ml-5 md:mx-auto lg:px-5  ">
        <h2 className="text-4xl font-sans font-bold text-gray-950 mb-3 lg:mb-4">News</h2>

        <Separator />
        <div
          id="news"
          className="h-[400px]  overflow-auto bg-amber-100 rounded-xl p-4"
        >
          <div
            className={`space-y-4 ${isMouseOver ? "animate-none" : "animate-wiggle"
              }`}
            onMouseOver={() => setIsMouseOver(true)}
            onMouseOut={() => setIsMouseOver(false)}
          // className="flex flex-col  animate-wiggle"
          >
            {dummyData.map((item) => (
              <div key={item.id} className="p-4 rounded-xl hover:shadow-lg hover:shadow-accent-600  bg-white space-y-4">
                <p className="text-base font-medium ">{item.title1}</p>
                <p className="text-sm font-sans   ">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutNews;
