import Timeline from "../components/Timeline";
import OurEvents from "../components/OurEvents";
import HeroSection from "../components/HeroSection";
// import Speakers from "../components/SpeakerSection/Speakers";
import Footer from "../components/Footer";
import AboutNITJ from "../components/AboutNITJ";
import AboutNews from "../components/AboutNews";
import SponsorShip from "../components/Sponsorship";
import { useEffect } from "react";
import Slider from "../components/Slider";
// import AboutNews from "./components/Dummy";
function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    
      <HeroSection />
      <AboutNews/>
      <Slider/>
      <Timeline />
      {/* <Speakers /> */}
      <OurEvents />
      <AboutNITJ/>
      <SponsorShip/>
      <Footer />
      
    </>
  );
}

export default App;
