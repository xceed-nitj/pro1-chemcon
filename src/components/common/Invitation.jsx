import ConfettiExplosion from 'react-confetti-explosion';
//import  { useState } from 'react';

function Invitation({ show, setShow }) {
  // const [isConfettiVisible, setIsConfettiVisible] = useState(true);

  // useEffect(() => {
  //   let confettiTimeout;
  //   let hideConfettiTimeout;

  //   if (show) {
  //     // Trigger confetti after a delay
  //     confettiTimeout = setTimeout(() => {
  //       setIsConfettiVisible(true);
  //     }, 0);

  //     // Hide confetti after 5 seconds
  //     hideConfettiTimeout = setTimeout(() => {
  //       setIsConfettiVisible(false);
  //     }, 4000);
  //   }

  //   // Cleanup timeouts on unmount or when `show` changes
  //   return () => {
  //     clearTimeout(confettiTimeout);
  //     clearTimeout(hideConfettiTimeout);
  //   };
  // }, [show]);

  return (
    <>
      {show && (
        <div className="flex w-full h-screen bg-black bg-opacity-70 backdrop-blur-sm justify-center fixed top-14 z-50">
          <ConfettiExplosion zIndex={50} force={0.9} particleCount={300}  duration={5000} width={2200} />
          <button
            className="absolute top-0 right-2 bg-white text-black font-bold w-8 h-10 flex items-center justify-center hover:bg-accent-600 hover:text-white focus:outline-none"
            onClick={() => setShow(false)}
            aria-label="Close invitation"
          >
            X
          </button>
          <div>
            <img
              src="/invitation.jpeg"
              alt="Invitation"
              className="w-[80%] sm:h-[650px] sm:aspect-auto sm:w-auto mx-auto "
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Invitation;
