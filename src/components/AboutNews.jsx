import { React, useState } from "react";

function AboutNews() {
  const [isMouseOver, setIsMouseOver] = useState(false);

  const dummyData = [
    {
      id: 1,
      title1: "Tentative Presentation Slot",
      description:
        "A Tentative Presentation Slot for the Technical Sessions is published under 'Technical Sessions' for future reference.",
    },
    {
      id: 2,
      title1: "Full Paper Template",
      description:
        "The Full Paper Template is available now on the website under the abstract menu. The Full paper submission link is open.",
    },
    {
      id: 3,
      title1: "Registration Process",
      description:
        "All presenting authors need to register individually for a single paper.",
    },
    {
      id: 4,
      title1: "Book Volume: IIChE-CHEMCON 2023",
      description:
        "Following are the details of the book volume, to be published by IIChE. Book Name: Energy Transition: Challenges & Opportunities, CHEMCON 2023 ISBN Number: 978-93-100-0071-9",
    },
    {
      id: 5,
      title1: "Announcement: Changes in Important Dates",
      description:
        "The last date for abstract submission has been extended to September 30, 2023. The acceptance Notification date has been extended to October 5, 2023. The last date for full-paper submission has been extended to October 20, 2023. The last date for registration has been changed to October 15, 2023.",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row lg:justify-evenly max-w-7xl mx-auto py-20">
      <div className="w-full lg:w-3/5 lg:px-5 max-w-[450px] max-h-[400px] lg:max-w-full mx-auto ">
        <h2 className="text-4xl font-bold text-gray-950 mb-3 lg:mb-5 ">
          About
        </h2>
        <hr className="mb-4 bg-amber-400 h-1 rounded-full max-w-xs" />
        <p className="text-base font-medium text-gray-800">
          Indian Institute of Chemical Engineers (IIChE) is a national body of
          professional chemical engineers with 32000 members across the country
          with 46 Regional Centres as well as 182 Student Chapters, began its
          journey on May 18, 1947 under the great visionary, nationalist and
          pioneer of Chemical Engineering Education in India, Dr H L Roy. We
          have around 46 Life Organizational Members in industries and 48 Life
          Organizational Members in academics and R&D Institutes as well. Lorem
          ipsum dolor sit amet, consectetur adipisicing elit. Et dolorum porro
          amet nostrum cum explicabo cumque, dolores aspernatur quo fuga facere
          praesentium impedit ullam neque tempora deserunt quibusdam facilis
          magni. Voluptatibus facilis quasi quos facere sapiente. Nisi deserunt
          voluptatem quos officiis excepturi perferendis, ut nihil! Minus
          doloribus nam quia dicta molestias asperiores ut ex doloremque quidem
          aperiam officiis nostrum rem mollitia, quibusdam dignissimos molestiae
          unde totam possimus nobis voluptatum esse vel adipisci similique!
          Doloribus dolores, illum laboriosam eligendi magni doloremque. Ad
          velit ut, laudantium consectetur aliquam officiis assumenda odio
          laborum enim nisi quo omnis. Quis odit nostrum temporibus dicta magni.
        </p>
      </div>
      <div className="w-full lg:w-2/5 max-w-[450px] h-96 mt-10 lg:mt-0 mx-auto lg:px-5 ">
        <h2 className="text-4xl font-bold text-gray-950 mb-3 lg:mb-5">News</h2>

        <hr className="mb-4 bg-amber-400 h-1 rounded-full max-w-xs" />
        <div
          id="news"
          //   className={`h-[360px] ${
          //     isMouseOver ? " overflow-auto " : "overflow-hidden"
          //   }`}
          className="h-[400px] overflow-auto bg-amber-100 rounded-xl p-4"
        >
          <div
            className={`space-y-4 ${
              isMouseOver ? "animate-none" : "animate-wiggle"
            }`}
            onMouseOver={() => setIsMouseOver(true)}
            onMouseOut={() => setIsMouseOver(false)}
            // className="flex flex-col  animate-wiggle"
          >
            {dummyData.map((item) => (
              <div key={item.id} className="p-4 rounded-xl bg-white space-y-4">
                <p className="text-base font-medium ">{item.title1}</p>
                <p className="text-sm text-gray-600 line-clamp-2 ">
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
