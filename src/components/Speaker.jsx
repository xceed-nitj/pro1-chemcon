//import React from "react";
import  { useState, useEffect } from 'react';
import axios from "axios";
import getEnvironment from "../getenvironment";
import {  Link } from "react-router-dom";

// const speakers = [
//   { id: 1, name: "Dr. John Doe", photo: "https://via.placeholder.com/150" },
//   { id: 2, name: "Jane Smith", photo: "https://via.placeholder.com/150" },
//   { id: 3, name: "Michael Lee", photo: "https://via.placeholder.com/150" },
//   { id: 4, name: "Emily Davis", photo: "https://via.placeholder.com/150" },
// ];

const Speaker = (props) => {
    const confid = props.confid;
    const [speakers, setSpeakers] = useState([]);
    const [apiUrl, setApiUrl] = useState(null);
    useEffect(() => {
        // Fetch the environment URL
        getEnvironment().then(url => setApiUrl(url));
    }, []);  
  useEffect(() => {
    if (apiUrl) {
    axios.get(`${apiUrl}/conferencemodule/speakers/conference/${confid}`, {
      withCredentials: true
    })
      .then(res => {
        setSpeakers(res.data || []); // Ensure slides is initialized even if response.data is undefined
        console.log(res.data);
      })
      .catch(err => console.log(err));
  }}, [apiUrl, confid]); // Add apiUrl and confid to the dependency array

  return (
//     <div className="bg-white container space-y-8 lg:max-w-7xl py-16  mx-auto px-8 sm:px-10 lg:px-8 md:pb-5">
//         <h2 className="text-4xl font-sans font-bold text-center text-gray-950 mb-5">Speakers</h2>
//     <div className="w-full overflow-x-auto  ">

//       <div className="flex justify-evenly space-x-6 py-4 px-6">

//         {speakers.map((speaker) => (
//             <Link key={speaker.id} target="_blank" rel="noopener noreferrer"
//             to={speaker.ProfileLink !== "" ? speaker.ProfileLink : "/"}  > 
//             {/* `/news/${item._id}` */}
            
//           <div
          
          
//             className="flex-shrink-0 w-48 h-64 bg-white shadow-md hover:shadow-lg hover:shadow-accent-700 rounded-lg border border-gray-200 flex flex-col items-center justify-center"
//           >
//             <img
//               src={speaker.ImgLink}
//               alt={speaker.Name}
//               className="w-32 h-32 rounded-full object-cover mb-4"
//             />
//             <p className="font-sans text-[18px] font-bold  text-gray-900">{speaker.Name}</p>
// <p className="font-sans text-[12px] font-semibold  text-gray-500">{speaker.Institute}</p>
//             </div>
//             </Link>
//         ))}
//       </div>
//     </div>
//     </div>
      <div className="bg-white container space-y-8 lg:max-w-7xl py-16 mx-auto px-8 sm:px-10 lg:px-8 md:pb-5">
  <h2 className="text-4xl font-sans font-bold text-center text-gray-950 mb-5">Speakers</h2>
  <div className="w-full">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-4 px-6">
      {speakers.map((speaker) => (
        <Link
          key={speaker.id}
          target="_blank"
          rel="noopener noreferrer"
          to={speaker.ProfileLink !== "" ? speaker.ProfileLink : "/"}
        >
          <div className="w-full bg-white shadow-md hover:shadow-lg hover:shadow-accent-700 rounded-lg border border-gray-200 flex flex-col items-center justify-center p-4">
            <img
              src={speaker.ImgLink}
              alt={speaker.Name}
              className="w-32 h-32 rounded-full object-cover mb-4"
            />
            <p className="font-sans text-[18px] font-bold text-gray-900">{speaker.Name}</p>
            <p className="font-sans text-[12px] font-semibold text-gray-500">{speaker.Institute}</p>
          </div>
        </Link>
      ))}
    </div>
  </div>
</div>

  );
};

export default Speaker;
