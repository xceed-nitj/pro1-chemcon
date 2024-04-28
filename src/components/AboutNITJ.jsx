import Separator from "./common/Separator";

function AboutNITJ() {



    return (
        <div className=" bg-white container flex flex-col items-center lg:flex-row lg:justify-between lg:items-start max-w-7xl  px-4 sm:px-10  lg:px-8 mx-auto pt-20">
            <div className="w-full md:w-[700px] px-4 lg:w-3/5 lg:max-w-full">
                <h2 className="text-4xl font-sans font-bold text-gray-950  ">
                    About NITJ        </h2>
                <Separator />
                <p className="text-base text-justify font-sans font-base min-h-[216px] text-gray-800">
                    Dr. B. R. Ambedkar NIT Jalandhar was established in the year
                    1987 as erstwhile Regional Engineering College and was given
                    the status of NIT Jalandhar by the Ministry of Human Resource
                    Development, Government of India, New Delhi on October 17,
                    2002 under the Act of Parliament-2007.As an Institute of National importance, NIT Jalandhar
                    comprehends its responsibility of providing high quality education
                    in Engineering and Technology to produce competent technical
                    manpower for the country. The Institute offers UG, PG and
                    research programmes with latest research infrastructure in all
                    disciplines. Institute holds 46th NIRF ranking and within a ranking
                    band of 651-700 amongst Asian Universities.
                </p>

            </div>
            <div className="w-full md:w-[700px] lg:w-2/5 lg:max-w-[450px] px-4 mt-10 lg:mt-0 mx-auto lg:px-5 ">
            
                <h2 className="text-4xl font-sans font-bold  text-gray-950  ">
                    About the Department
                </h2>
                <Separator />
                <p className="text-base  text-justify font-sans font-base text-gray-800">
                    The Department (FIST Sponsored) was established in 1990 and
                    has been playing a vital role in the development of Chemical
                    Engineering education and research by offering B. Tech, M. Tech
                    and PhD programmes. Its Alumni are occupying eminent positions
                    in chemical industries, research and academic institutions in India
                    and abroad. The Department has established state of the art
                    laboratories with sophisticated equipment for undergraduate
                    courses and research work.
                </p>
            </div>
        </div>
    );
}

export default AboutNITJ;
