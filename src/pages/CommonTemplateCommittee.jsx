import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import SecNavbar from '../components/SecNavbar';
import getEnvironment from '../getenvironment';
import axios from 'axios';

function CommontemplateCommittee(props) {
    const pageid = props.pageid;
    const [apiUrl, setApiUrl] = useState(null);
    const [data, setData] = useState("");
    const location = useLocation(); // Get the current location

    useEffect(() => {
        // Fetch the environment URL
        getEnvironment().then(url => setApiUrl(url));
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
        if (apiUrl) {
            axios.get(`${apiUrl}/conferencemodule/committee/${pageid}`, {
                withCredentials: true
            })
                .then(res => {
                    setData(res.data);
                    console.log(res.data);
                })
                .catch(err => console.log(err));
        }
    }, [apiUrl, location]); // Re-fetch data when apiUrl or location changes

    return (
        <>
            <div className="fixed top-0 w-screen z-40">
                <Navbar />
            </div>
            <SecNavbar />

            <div className="bg-white container max-w-7xl mx-auto px-5 sm:px-10 lg:px-8 mt-[58px] lg:mt-[10px] min-h-[300px] pb-5">
                <div className="w-full mx-auto md:w-[700px] px-4 lg:w-full">
                    <p className="text-2xl font-sans font-bold mb-5 text-gray-950 underline">
                        {data.type}
                    </p>
                    <div className="text-base text-justify font-sans font-base text-gray-800">
                        <div dangerouslySetInnerHTML={{ __html: data.description }} />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default CommontemplateCommittee;
