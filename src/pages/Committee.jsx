import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import SecNavbar from '../components/SecNavbar'

function Committee() {
    return (
        <>
            <div className="fixed top-0 w-screen z-40 "> 
      <Navbar />      
      </div>
      <SecNavbar/>
            <div className="font-sans  mx-5 sm:mx-14 lg:mx-28   mt-[58px] lg:mt-[10px] min-h-[300px]">
                <div className="m-5">
                    <p className="text-xl font-sans font-bold  text-gray-950 underline ">
                        NATIONAL ORGANISING COMMITTEE
                    </p>
                    <div className="text-base   text-justify font-sans font-base text-gray-800">
                        <div className='m-5'><p className='font-semibold'>Patron</p>
                            <p>Prof. Binod Kumar Kanaujia</p>
                            <p>Director, National Institute of Technology Jalandhar</p></div>
                        <div className='m-5'><p className='font-semibold'>Chairman</p>
                            <p>Mr. Biswanath Chattopadhyay</p>
                            <p>CEO, IVL Dhunseri, Petrochem Industries Ltd, Kolkata</p></div>

                    </div>
                </div>
                <div className="m-5">
                    <p className="text-xl font-sans font-bold  text-gray-950 underline ">
                    LOCAL ORGANISING COMMITTEE 
                    </p>
                    <div className="text-base   text-justify font-sans font-base text-gray-800">
                        <div className='m-5'>
                            <p className='font-semibold'>Prof. M. K. Jha</p>
                            <p>Chairman Chemcon 2024 and Ex. President IICHE</p>
                            <p> National Institute of Technology Jalandhar</p></div>
                        <div className='m-5'><p className='font-semibold'>Prof. Ajay Bansal</p>
                            <p>Vice Chairman Chemcon 2024 & National Council member</p>
                            <p> National Institute of Technology Jalandhar</p></div>
                            <div className='m-5'><p className='font-semibold'>Prof. S. Bajpai</p>
                            <p>Organizing Secretary Chemcon 2024 & Secretary DRC, IICHE</p>
                            <p> National Institute of Technology Jalandhar</p></div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Committee



