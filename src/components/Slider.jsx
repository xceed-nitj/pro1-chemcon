import  { useState, useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import axios from "axios";
import getEnvironment from "../getenvironment";

function Slider(props) {
   const [apiUrl, setApiUrl] = useState(null);
    useEffect(() => {
        // Fetch the environment URL
        getEnvironment().then(url => setApiUrl(url));
    }, []);  const [slides, setSlides] = useState([]); // Initialize slides state with an empty array
  const confid = props.confid;
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (apiUrl) {
    axios.get(`${apiUrl}/conferencemodule/images/conference/${confid}`, {
      withCredentials: true
    })
      .then(res => {
        setSlides(res.data || []); // Ensure slides is initialized even if response.data is undefined
        console.log(res.data);
      })
      .catch(err => console.log(err));
  }}, [apiUrl, confid]); // Add apiUrl and confid to the dependency array

  useEffect(() => {
    // Set up an interval to call nextSlide every 15 seconds
    const intervalId = setInterval(() => {
      nextSlide();
    }, 2500);

    // Clean up the interval when the component is unmounted or on dependency change
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="bg-white container space-y-8 lg:max-w-7xl mx-auto px-8 sm:px-10 lg:px-8 md:pb-5">
      <div className='h-[420px] w-full md:h-[520px] lg:h-[680px] m-auto py-16 relative group'>
        <h2 className="text-4xl font-sans font-bold text-center text-gray-950 mb-5">Image Gallery</h2>
        {slides.length > 0 && ( // Check if slides array is not empty before accessing its properties
          <div
            style={{ backgroundImage: `url(${slides[currentIndex].imgLink})` }}
            className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
          >
            <div className="absolute text-2xl font-sans font-medium bottom-0 left-0 right-0 bg-black/50 text-white text-center p-2">
              {slides[currentIndex].name}
            </div>
          </div>
        )}
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0  left-5 text-2xl rounded-full p-2 bg-black/30 text-white hover:bg-white hover:text-black  cursor-pointer'>
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0  right-5 text-2xl rounded-full p-2 bg-black/30 text-white hover:bg-white hover:text-black  cursor-pointer'>
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
        <div className='flex top-4 justify-center py-2'>
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className={`text-3xl cursor-pointer ${
                currentIndex === slideIndex ? 'text-accent-500' : ''
              }`}
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Slider;
