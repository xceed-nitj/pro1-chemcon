
function Invitation({ show, setShow }) {
 

  return (
    <>
      {show && (
        <div className="flex w-full h-screen bg-black bg-opacity-50 backdrop-blur-sm justify-center fixed top-14 z-50">
          <button
            className="absolute top-0 right-2 bg-white text-black font-bold w-8 h-10 flex items-center justify-center hover:bg-accent-600 hover:text-white focus:outline-none"
            onClick={() => setShow(false)}
          >
            X
          </button>

          <div>
            <img
              src="/invitation.jpeg"
              alt="Image"
              className="h-[400px] sm:h-[680px]" //w-[507px] h-[800px]
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Invitation;
