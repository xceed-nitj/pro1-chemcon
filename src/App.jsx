import Home from "./pages/Home";
import Events from "./pages/Events";
import Accommodation from "./pages/Accomodation";
import Location from "./pages/Location";
import Registration from "./pages/Registration";
import Souvenir from "./pages/Souvenir";
import Sponsors from "./pages/Sponsors";
import { Route, Routes } from "react-router-dom";
//import Committee from "./pages/Committee";
import CommonNews from "./pages/CommonNews";
import ParticlesComponent from "./components/Particle";
import './App.css'
import CommontemplateCommittee from "./pages/CommonTemplateCommittee";
function App() {
   const confid="65fed89def981d3a955ddd9f";
  return (
    <>
    <ParticlesComponent id="particle" />

<div id="content ">
      < Routes >
        <Route path="/" element={<Home confId={confid} />} />
        <Route path="sponsorship" element={<Sponsors />} />
        <Route path="events" element={<Events />} />
        <Route path="location" element={<Location confid={confid}  />} />
        <Route path="accommodation" element={<Accommodation />} />
        <Route path="souvenir" element={<Souvenir />} />
        <Route path="registration" element={<Registration />} />
        <Route path="nationalcommittee" element={<CommontemplateCommittee pageid="66c174259ae6dc5828c2cd9c" />} />
        <Route path="localcommittee" element={<CommontemplateCommittee pageid="66c216e058052e22419a27aa" />} />
        <Route path="news/:newsid" element={<CommonNews /> } />



      </Routes >
      </div>
    </>
  );
}

export default App;


