import { useEffect, useState } from "react";
import CountdownTimer from "./CountdownTimer";

function SecNavbar(props) {
  const [isHomePage, setIsHomePage] = useState(false);

  useEffect(() => {
    // Check if the current URL is the homepage
    if (window.location.pathname === '/') {
      setIsHomePage(true);
    } else {
      setIsHomePage(false);
    }
  }, []); // Empty dependency array ensures this runs only once on component mount

  return (
    <div className="mt-[56px] h-[50px] sm:hidden hidden lg:flex bg-accent-200 shadow z-50 px-2 sm:px-4 lg:px-8 py-3 lg:space-x-8">
      <span>
        <p className="font-bold">IIChE ChemCon 2024 | December 27-30, 2024</p>
      </span>

      {isHomePage && (
        <button onClick={props.onClickScroll}>
          <span>
            <p  className="ml-28  text-sm font-semibold rounded-full text-black bg-white px-4 py-[2px] border-radius-2"> LIST OF SPEAKERS</p>
          </span>
        </button>
      )}

      <span className="absolute right-[120px] top-[58px]">
        <CountdownTimer />
      </span>
    </div>
  );
}

export default SecNavbar;
