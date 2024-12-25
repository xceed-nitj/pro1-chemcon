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
  const ourSpeakersRef = useRef(null);
  const invitedSpeakersRef = useRef(null);

  // Step 2: Define the scroll function
  const scrollToSection = (section) => {
    console.log("Scrolling to:", section);

    if (section === 'ourSpeakers') {
      ourSpeakersRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    } else if (section === 'invitedSpeakers') {
      invitedSpeakersRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };
  return (
    <>
    <div className="fixed top-0 w-screen z-40 ">
        <Navbar />
      </div>
      <SecNavbar onClickScroll={scrollToSection}/>
    
      <HeroSection confid={props.confId}  />
      <AboutNews confid={props.confId} />
      <Speaker confid={props.confId}  ourSpeakersRef={ourSpeakersRef} invitedSpeakersRef={invitedSpeakersRef}  />
      <Slider confid={props.confId} />
      <Timeline confid={props.confId}  />
      {/* <Speakers /> */}
      <OurEvents confid={props.confId}  />
      <AboutNITJ confid={props.confId} />
      <SponsorShip confid={props.confId} />
      <Footer />
      
    </>
  );
}

export default Home;
