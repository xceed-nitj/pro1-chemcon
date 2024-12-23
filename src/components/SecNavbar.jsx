import { useEffect, useState } from "react";
import CountdownTimer from "./CountdownTimer";
import { Link } from "react-router-dom";
import Invitation from './common/Invitation';

function SecNavbar(props) {
  const [isHomePage, setIsHomePage] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Check if the current URL is the homepage
    const isHome = window.location.pathname === '/';
    setIsHomePage(isHome);

    // Show invitation only on the first visit to the homepage in the current session
    if (isHome && !sessionStorage.getItem('invitationShown')) {
      setShow(true);
      sessionStorage.setItem('invitationShown', 'true');
    }
  }, []); // Empty dependency array ensures this runs only once on component mount

  return (
    <>
      <div className="mt-[56px] h-[50px] sm:hidden hidden lg:flex bg-accent-200 shadow z-50 px-2 sm:px-4 lg:px-8 py-3 lg:space-x-8">
        <span>
          <p className="font-bold">IIChE ChemCon 2024 | December 27-30, 2024</p>
        </span>

        {isHomePage ? (
          <>
            <button
              onClick={props.onClickScroll}
              className="group relative transition-all duration-300 ease-in-out hover:scale-105"
            >
              <span>
                <p className="ml-28 text-sm font-semibold rounded-full text-black bg-white px-4 py-[2px] border-radius-2 shadow-lg group-hover:bg-green-500 group-hover:text-white">
                  LIST OF SPEAKERS
                </p>
              </span>
            </button>
          </>
        ) : (
          <Link to="/speakers">
            <button className="group relative transition-all duration-300 ease-in-out hover:scale-105">
              <span>
                <p className="ml-28 text-sm font-semibold rounded-full text-black bg-white px-4 py-[2px] border-radius-2 shadow-lg group-hover:bg-green-500 group-hover:text-white">
                  LIST OF SPEAKERS
                </p>
              </span>
            </button>
          </Link>
        )}

        <button
          onClick={() => setShow(true)}
          className="group relative transition-all duration-300 ease-in-out hover:scale-105"
        >
          <span>
            <p className="text-sm font-semibold rounded-full text-black bg-white px-4 py-[2px] border-radius-2 shadow-lg group-hover:bg-violet-500 group-hover:text-white">
              INAUGURAL INVITATION
            </p>
          </span>
        </button>

        <span className="absolute right-[120px] top-[58px]">
          <CountdownTimer />
        </span>
      </div>
      { <Invitation show={show} setShow={setShow} />}
    </>
  );
}

export default SecNavbar;
