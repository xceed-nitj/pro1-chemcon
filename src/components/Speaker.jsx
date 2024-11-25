//import React from "react";
import  { useState, useEffect } from 'react';
import axios from "axios";
import getEnvironment from "../getenvironment";
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
    <div className="bg-white container space-y-8 lg:max-w-7xl py-16  mx-auto px-8 sm:px-10 lg:px-8 md:pb-5">
        <h2 className="text-4xl font-sans font-bold text-center text-gray-950 mb-5">Speakers</h2>
    <div className="w-full overflow-x-auto  ">

      <div className="flex justify-evenly space-x-6 py-4 px-6">
        {speakers.map((speaker) => (
          <div
          key={speaker.id}
            className="flex-shrink-0 w-48 h-64 bg-white shadow-md hover:shadow-lg hover:shadow-accent-700 rounded-lg border border-gray-200 flex flex-col items-center justify-center"
          >
            <img
              src={speaker.ImgLink}
              alt={speaker.Name}
              className="w-32 h-32 rounded-full object-cover mb-4"
            />
            <p className="  text-gray-700">{speaker.Name}</p>
            </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Speaker;