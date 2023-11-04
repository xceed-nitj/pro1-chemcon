const data = [
  {
    title: "Event Tittle",
    content:
      "Every year, the day of 28 December is observed as Dhirubhai Ambani Commemoration Day on the occasion of his Birth Anniversary of the late Shri Dhirubhai Ambani and the Dhirubhai Ambani Oration on varied topics is delivered by eminent personalities of the country to celebrate the occasion.",
    bg: "bg-amber-100",
  },
  {
    title: "Event Tittle",
    content:
      "Every year, the day of 28 December is observed as Dhirubhai Ambani Commemoration Day on the occasion of his Birth Anniversary of the late Shri Dhirubhai Ambani and the Dhirubhai Ambani Oration on varied topics is delivered by eminent personalities of the country to celebrate the occasion.",
    bg: "bg-amber-200",
  },
  {
    title: "Event Tittle",
    content:
      "Every year, the day of 28 December is observed as Dhirubhai Ambani Commemoration Day on the occasion of his Birth Anniversary of the late Shri Dhirubhai Ambani and the Dhirubhai Ambani Oration on varied topics is delivered by eminent personalities of the country to celebrate the occasion.",
    bg: "bg-amber-300",
  },
  {
    title: "Event Tittle",
    content:
      "Every year, the day of 28 December is observed as Dhirubhai Ambani Commemoration Day on the occasion of his Birth Anniversary of the late Shri Dhirubhai Ambani and the Dhirubhai Ambani Oration on varied topics is delivered by eminent personalities of the country to celebrate the occasion.",
    bg: "bg-amber-400",
  },
  {
    title: "Event Tittle",
    content:
      "Every year, the day of 28 December is observed as Dhirubhai Ambani Commemoration Day on the occasion of his Birth Anniversary of the late Shri Dhirubhai Ambani and the Dhirubhai Ambani Oration on varied topics is delivered by eminent personalities of the country to celebrate the occasion.",
    bg: "bg-amber-500",
  },
  {
    title: "Event Tittle",
    content:
      "Every year, the day of 28 December is observed as Dhirubhai Ambani Commemoration Day on the occasion of his Birth Anniversary of the late Shri Dhirubhai Ambani and the Dhirubhai Ambani Oration on varied topics is delivered by eminent personalities of the country to celebrate the occasion.",
    bg: "bg-amber-100",
  },
  {
    title: "Event Tittle",
    content:
      "Every year, the day of 28 December is observed as Dhirubhai Ambani Commemoration Day on the occasion of his Birth Anniversary of the late Shri Dhirubhai Ambani and the Dhirubhai Ambani Oration on varied topics is delivered by eminent personalities of the country to celebrate the occasion.",
    bg: "bg-amber-200",
  },
]; // replace Array.from({ length: 12 }) with data to get layout
function OurEvents() {
  return (
    <div className="container space-y-16 xl:max-w-7xl mx-auto px-8 py-16 lg:px-8 ">
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
