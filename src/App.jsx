import AboutNews from "./components/AboutNews";
import Timeline from "./components/Timeline";
import OurEvents from "./components/OurEvents";
import HeroSection from "./components/HeroSection";
import Speakers from "./components/SpeakerSection/Speakers";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <HeroSection />
      <AboutNews />
      <Timeline />
      <Speakers />
      <OurEvents />
      <Footer />
    </>
  );
}

export default App;
