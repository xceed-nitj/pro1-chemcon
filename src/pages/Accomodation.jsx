import { useEffect } from 'react';
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import SecNavbar from '../components/SecNavbar';
function Accommodation() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <>
           <div className="fixed top-0 w-screen z-40 "> 
      <Navbar />      
      </div>
      <SecNavbar />

            <div className="  lg:px-8 px-3 mt-[58px] lg:mt-[2px] min-h-[300px]">
                <div className="m-5">
                    <p className="text-2xl font-sans font-bold mb-5 text-gray-950 underline ">
                        Accomodation                    </p>
                    <p className="text-base  text-justify font-sans font-base text-gray-800">

                        The accommodation for the delegates can be arranged in hotels
                        (List will be available on website), guest houses and institute
                        hostels subject to the availability of the same on request and on
                        payment basis. The requirement for the preferred accommodation
                        along with the tariff range and single/ double occupancy should be
                        sent to the Organizing Secretary well in advance.
                    </p>
               </div>
            </div>
            <Footer />
        </>
    )
}

export default Accommodation
