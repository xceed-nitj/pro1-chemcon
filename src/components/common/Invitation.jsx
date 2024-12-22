import Confetti from 'react-confetti';
import  { useState, useEffect } from 'react';

function Invitation({ show, setShow }) {
  const [isConfettiVisible, setIsConfettiVisible] = useState(false);

  useEffect(() => {
    let confettiTimeout;
    let hideConfettiTimeout;

    if (show) {
      // Trigger confetti after a delay
      confettiTimeout = setTimeout(() => {
        setIsConfettiVisible(true);
      }, 0);

      // Hide confetti after 5 seconds
      hideConfettiTimeout = setTimeout(() => {
        setIsConfettiVisible(false);
      }, 4000);
    }

    // Cleanup timeouts on unmount or when `show` changes
    return () => {
      clearTimeout(confettiTimeout);
      clearTimeout(hideConfettiTimeout);
    };
  }, [show]);

  return (
    <>
      {show && (
        <div className="flex w-full h-screen bg-black bg-opacity-50 backdrop-blur-sm justify-center fixed top-14 z-50">
          {isConfettiVisible && <Confetti numberOfPieces={300} gravity={0.4} />}
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
              className="h-[calc(100%-60px)] sm:h-[700px]"
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Invitation;
