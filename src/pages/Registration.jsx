import { useEffect } from 'react';
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import SecNavbar from '../components/SecNavbar';



function Registration() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    const data = [
        { title: 'Academic Personnel including faculty and scientists', price: '5000 (IICHE Member) / 6200 (Non-IICHE Member)' },
        { title: 'Research Scholars', price: '4500 (IICHE Member) / 5000 (Non-IICHE Member)' },
        { title: 'Industrial Personnel ', price: '6500 (IICHE Member) / 7800 (Non-IICHE Member)' },
        { title: 'Senior IICHE Member over 65 years', price: 'NIL (IICHE Member) / 3200 (Non-IICHE Member)' },
        { title: 'Post Graduate Students', price: '3200 (IICHE Member) / 3700 (Non-IICHE Member)' },
        { title: 'Under Graduate Students', price: '2500 (IICHE Member) / 3200 (Non-IICHE Member)' },   
        { title: 'Spouse Accompanying Indian Delegate (All categories)', price: '2000 (IICHE Member) / 2500 (Non-IICHE Member)' },
        { title: 'Others', price: '3200 (IICHE Member) / 3700 (Non-IICHE Member)' },
        { title: 'Foreign Delegates', price: 'USD 250 (IICHE Member) / USD 250 (Non-IICHE Member)' },
        { title: 'Accompanying Spouse (Foreign Delegates)', price: 'USD 250 (IICHE Member) / USD 250 (Non-IICHE Member)' },
    ];



    return (
        <>
            <div className="fixed top-0 w-screen z-40 "> 
      <Navbar />      
      </div>
      <SecNavbar />
      <div className="bg-white container max-w-7xl mx-auto px-5 sm:px-10  lg:px-8 pt-[58px] lg:pt-[10px] pb-5">
                <div className="w-full mx-auto  md:w-[700px] px-4 lg:w-full" >
                    <p className="text-2xl font-sans font-bold mb-5   text-gray-950 underline ">
                    Registration Fee

                    </p>
                    <p className="text-xs md:text-base   text-justify font-sans  text-gray-800">
                    
                        <table className="mt-3 border-collapse box-border min-w-full">
                            <thead>
                                <tr className="border-[2px] bg-accent-100  border-accent-500">
                                    <th className="p-1 pl-4 text-left">Categories of Membership</th>
                                    <th className="p-1 pl-4 text-left">Amount in INR (Including Taxes)</th>

                                </tr>
                            </thead>
                            <tbody>
                                {data.length > 0 ? data.map((item, index) => (
                                    <tr key={index} className="border-[1px] font-serif border-accent-500">
                                        <td className="p-1 pl-4 text-left">{item.title}</td>
                                        <td className="p-1 pl-4 text-left">{item.price}</td>

                                    </tr>
                                )) : (
                                    <tr>
                                        <td colSpan="2" className="p-1 text-center">No data available</td>
                                    </tr>

                                )}
                            </tbody>
                        </table>
                        includes fees towards life membership of IIChE subject to the 
production of proof of eligibility.
                    </p>

                </div>
            </div>
            <Footer />

        </>
    )
}

export default Registration
