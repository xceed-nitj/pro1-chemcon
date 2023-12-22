import { useEffect } from 'react';
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import SecNavbar from '../components/SecNavbar';
function Location() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <><div className="fixed top-0 w-screen z-40 "> 
        <Navbar />      
        </div>
        <SecNavbar />
            <div className="mx-5 sm:mx-14  lg:mx-28  mt-[58px] lg:mt-[10px] min-h-[300px]">
                <div className="m-5">
                    <p className="text-2xl font-sans font-bold mb-5  text-gray-950 underline ">
                        How to Reach NITJ
                    </p>
                    <p className="text-base  text-justify font-sans font-base text-gray-800">

                        The Institute is located on G. T. Road, Amritsar bypass, 12 km
                        from Jalandhar Bus Stand, 11 km from Jalandhar City Railway
                        Station and 16 km from Jalandhar Cantt. Railway Station. It is
                        around 70 km away from Raja Sansi International Airport,
                        Amritsar, 150 km from Chandigarh Airport and 390 km from Indira
                        Gandhi International Airport, New Delhi. It is connected to New
                        Delhi by rail through Shatabdi Express and other super fast trains
                        as well as through AC buses round the clock. The city is
                        surrounded by famous rivers Sutlej and Beas and is
                        internationally famous for agricultural products, textiles, leather
                        goods, wood products, and sports goods. The nearby site seeing
                        includes Golden Temple, Jallianwala Bagh, Wagah Border,
                        Science City, war memorial, etc. The weather during December is
                        very cold with a température of about 10-20 <sup>o</sup>C and night
                        temperature of as low as 2-4<sup>o</sup>C.
                    </p>

                </div>
            </div>
            <Footer />

        </>
    )
}

export default Location
