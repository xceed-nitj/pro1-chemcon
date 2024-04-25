import { useState, useEffect } from "react";
import Separator from "./common/Separator";
import { Link } from "react-router-dom";
import axios from "axios";
import getEnvironment from "../getenvironment";

function AboutNews(props) {
  const apiUrl = getEnvironment();

  const [isMouseOver, setIsMouseOver] = useState(false);
  const confid = props.confid;
  const [data, setData] = useState(null)

  useEffect(() => {
    axios.get(`${apiUrl}/conferencemodule/home/conf/${confid}`, {
      withCredentials: true

    })
      .then(res => {
        setData(res.data);
        console.log(res.data);

      })
      .catch(err => console.log(err))

  }, []);
  const [newsData, setNewsData] = useState([]);
  useEffect(() => {
    axios.get(`${apiUrl}/conferencemodule/announcements/conf/${confid}`, {
      withCredentials: true

    })
      .then(res => {
        setNewsData(res.data);
        console.log(res.data);

      })
      .catch(err => console.log(err))

  }, []);


  return (
    <div className=" container max-w-7xl flex flex-col items-center lg:flex-row lg:justify-evenly lg:items-start  mx-auto px-5 sm:px-10  lg:px-8 py-20">
      <div className="w-full  md:w-[700px]  s px-4 lg:w-3/5 ">
        <h2 className="text-4xl   font-sans font-bold text-gray-950  ">
          CHEMCON 2024
        </h2>
        <Separator />
        <p className="text-base text-justify font-sans font-base text-gray-800">
          {data ? <div className="min-h-[216px]" dangerouslySetInnerHTML={{ __html: data.aboutConf }} /> : <div className="min-h-[216px]"></div>}

        </p>
        <h2 className="text-4xl font-sans font-bold mt-4 text-gray-950  ">
          About IICHE
        </h2>
        <Separator />
        <p className="text-base text-justify font-sans font-base text-gray-800">
          {data ? <div dangerouslySetInnerHTML={{ __html: data.aboutIns }} /> : " "}
        </p>
      </div>
      <div className="sm:w-full md:w-[700px] sm:pr-6 lg:w-2/5 lg:ml-4 max-w-[700px] h-96 mt-10 sm:px-2 lg:mt-0 ml-5 md:mx-auto lg:px-5  ">
        <h2 className="text-4xl font-sans font-bold text-gray-950 mb-3 lg:mb-4">News</h2>

        <Separator />
        <div
          id="news"
          className="h-[400px]   overflow-auto bg-amber-100  rounded-xl p-4 "
        >
          <div
            className={`space-y-4  ${isMouseOver ? "animate-none cursor-default" : "animate-wiggle"
              }`}
            onMouseOver={() => setIsMouseOver(true)}
            onMouseOut={() => setIsMouseOver(false)}
          // className="flex flex-col  animate-wiggle"
          >

            {newsData.map((item) => (
              <Link key={item._id} to={`/news/${item._id}`}>

                <div className="relative p-4 my-4 rounded-xl hover:shadow-md hover:shadow-accent-600/50  bg-white space-y-4    border-solid border-2 border-amber-400">
                  <div className="w-2 h-2  animate-ping bg-accent-600 absolute  -left-1 -top-1 rounded-full"></div>
                  <p className="text-base font-medium   text-accent-600">{item.title}</p>
                  <p className="text-sm font-sans  border-solid border-l-4 border-amber-400 pl-4  ">
                    {item.metaDescription}
                  </p>


                </div>
              </Link>

            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutNews;