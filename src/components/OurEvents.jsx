const data = [
  {
    title: "Technical Sessions",
    content:
      "Technical Sessions will focus on the theme of the Congress and the following broad themes will covered with interaction through Plenary Sessions, Invited Lectures, Paper Presentations andPoster Sessions. There will be three best paper awards each inOral and Poster presentations in each session. Award will be given to the top two papers presented in each session in both Oral and Poster presentations. The following topics but not limited to are to be covered:- Chemical Process Safety Management,Green Technology,Novel Separation Techniques,New and Renewable Energy,Sustainable Development ,Hydrocarbon and other fossil fuels,Energy and Environmental Policy Issues" ,
    bg: "bg-accent-100",
  },
  {
    title: "Sri Dhirubhai Ambani Commemoration Day",
    content:
      "Shri Dhirubhai Ambani Commemoration day will be celebrated on December 28, 2024 as a tribute to the great visionary.",
    bg: "bg-accent-200",
  },
  {
    title: "International Symposium",
    content:
      "International Joint Symposiums related to the theme will be held as part of CHEMCON 2024",
    bg: "bg-accent-300",
  },
  {
    title: "Exhibition",
    content:
      "An exhibition of Chemical Engineering and allied businesses including safety, technology providers, consultants, institution, tour packages and communication, Equipment, Instruments, Books and Journals, etc. is proposed during CHEMCON 2024. Interested organizations will be allotted space of the following dimensions in the form of exhibition stalls with all facilities like furniture, power, etc.",
    bg: "bg-accent-400 text-white",
  },
  {
    title: "Quiz Competition",
    content:
      "Quiz Competition will be conducted for the student delegates    based on GATE 2024 syllabus. The prize will be distributed to the   winners.",
    bg: "bg-accent-500 text-white",
  },
  // {
  //   title: "Accommodation",
  //   content:
  //     "The accommodation for the delegates can be arranged in hotels (List will be available on website), guest houses and institute     hostels subject to the availability of the same on request and on  payment basis. The requirement for the preferred accommodation along with the tariff range and single/ double occupancy should be  sent to the Organizing Secretary well in advance.",
  //   bg: "bg-accent-100",
  // },
  // {
  //   title: "Souvenir",
  //   content:
  //     "An informative souvenir will be made available to all the delegates. Contributions are solicited to support this mega event, CHEMCON-2024, through advertisements",
  //   bg: "bg-accent-200",
  // },
]; // replace Array.from({ length: 12 }) with data to get layout
function OurEvents() {
  
  return (

    <div className="container space-y-8 xl:max-w-7xl mx-auto px-8 lg:px-8 ">
      <div className="text-center">
        <h2 className="text-4xl font-bold">Our Events</h2>
      </div>
      <div className="grid md:grid-rows-2 md:grid-cols-4 gap-5 md:gap-3">
        {data.map((item, index) => (
          <div
            className={`py-8 px-6 rounded-xl ${item.bg} ${
              index % 7 === 0 ? "md:col-span-2" : ""
            }`}
            key={index}
          >
            <div className="flex h-full ">
              <div>
                <h4 className="font-semibold mb-3 md:text-2xl text-xl">
                  {item.title}
                </h4>
                <p className="text-sm leading-relaxed">{item.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurEvents;
