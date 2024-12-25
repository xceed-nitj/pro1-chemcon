//import React from "react";
import  { useState, useEffect, forwardRef } from 'react';
import axios from "axios";
import getEnvironment from "../getenvironment";
import {  Link } from "react-router-dom";

// const speakers = [
//   { id: 1, name: "Dr. John Doe", photo: "https://via.placeholder.com/150" },
//   { id: 2, name: "Jane Smith", photo: "https://via.placeholder.com/150" },
//   { id: 3, name: "Michael Lee", photo: "https://via.placeholder.com/150" },
//   { id: 4, name: "Emily Davis", photo: "https://via.placeholder.com/150" },
// ];

const Speaker  = forwardRef((props, ref) =>{
    const confid = props.confid;
    const [speakers, setSpeakers] = useState([]);
    const [speakersType1, setSpeakersType1] = useState([]);
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
        const sortedSpeakers = (res.data || []).filter(speaker => speaker.talkType !== 1).sort((a, b) => a.sequence - b.sequence);
        setSpeakers(sortedSpeakers);        console.log(res.data);
        const sortedSpeakers = (res.data || []).filter(speaker => speaker.talkType == 1).sort((a, b) => a.sequence - b.sequence);
        setSpeakersType1(sortedSpeakers);        console.log(res.data);
      })
      .catch(err => console.log(err));
  }}, [apiUrl, confid]); // Add apiUrl and confid to the dependency array

  return (
    <div ref={ref} className="bg-white container space-y-8 lg:max-w-7xl py-16 mx-auto px-8 sm:px-10 lg:px-8 md:pb-5">
      <h2 className="text-4xl font-sans font-bold text-center text-gray-950 mb-5">Our Speakers</h2>
      <div className="w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-4 px-6">
          {speakers.map((speaker) => (
            <Link
              key={speaker.id}
              target="_blank"
              rel="noopener noreferrer"
              to={speaker.ProfileLink !== "" ? speaker.ProfileLink : "/"}
            >
              <div className="w-full bg-white shadow-md hover:shadow-xl hover:shadow-accent-700 rounded-lg border border-gray-200 flex flex-col items-center justify-center p-4 min-h-[287px]">
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
 <h2 className="text-4xl font-sans font-bold text-center text-gray-950 mb-5">Invited Speakers</h2>
      <div className="w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-4 px-6">
          {speakersTpe1.map((speaker) => (
            <Link
              key={speaker.id}
              target="_blank"
              rel="noopener noreferrer"
              to={speaker.ProfileLink !== "" ? speaker.ProfileLink : "/"}
            >
              <div className="w-full bg-white shadow-md hover:shadow-xl hover:shadow-accent-700 rounded-lg border border-gray-200 flex flex-col items-center justify-center p-4 min-h-[287px]">
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
});
// Set a display name for the component
Speaker.displayName = 'Speaker';
export default Speaker;
