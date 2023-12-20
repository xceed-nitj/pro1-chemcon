import Timeline from "../components/Timeline";
import OurEvents from "../components/OurEvents";
import HeroSection from "../components/HeroSection";
// import Speakers from "../components/SpeakerSection/Speakers";
import Footer from "../components/Footer";
import AboutNITJ from "../components/AboutNITJ";
import AboutNews from "../components/AboutNews";
import SponsorShip from "../components/Sponsorship";
// import AboutNews from "./components/Dummy";
function App() {
  return (
    <>
    
      <HeroSection />
      <AboutNews/>
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