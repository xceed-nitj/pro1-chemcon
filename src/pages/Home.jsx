import Timeline from "../components/Timeline";
import OurEvents from "../components/OurEvents";
import HeroSection from "../components/HeroSection";
// import Speakers from "../components/SpeakerSection/Speakers";
import Footer from "../components/Footer";
import AboutNITJ from "../components/AboutNITJ";
import AboutNews from "../components/AboutNews";
import SponsorShip from "../components/Sponsorship";
import { useEffect,useRef  } from "react";
import Slider from "../components/Slider";
import SecNavbar from "../components/SecNavbar";
import Navbar from "../components/Navbar"
import Speaker from "../components/Speaker";
// import AboutNews from "./components/Dummy";
function Home(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const targetSectionRef = useRef(null);

  // Step 2: Define the scroll function
  const scrollToSection = () => {
    targetSectionRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };
  return (
    <>
    <div className="fixed top-0 w-screen z-40 ">
        <Navbar />
      </div>
      <SecNavbar />
    
      <HeroSection confid={props.confId} onClickScroll={scrollToSection} />
      <AboutNews confid={props.confId} />
      <Speaker confid={props.confId} />
      <Slider confid={props.confId} />
      <Timeline confid={props.confId} ref={targetSectionRef}  />
      {/* <Speakers /> */}
      <OurEvents confid={props.confId}  />
      <AboutNITJ confid={props.confId} />
      <SponsorShip confid={props.confId} />
      <Footer />
      
    </>
  );
}

export default Home;
