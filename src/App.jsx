import Home from "./pages/Home";
import Events from "./pages/Events";
import Accommodation from "./pages/Accomodation";
import Location from "./pages/Location";
import Registration from "./pages/Registration";
import Souvenir from "./pages/Souvenir";
import Sponsors from "./pages/Sponsors";
import { Route, Routes } from "react-router-dom";
import Committee from "./components/Committee";

function App() {
  return (
    <>

      < Routes >
        <Route path="/" element={<Home />} />
        <Route path="sponsorship" element={<Sponsors />} />
        <Route path="events" element={<Events />} />
        <Route path="location" element={<Location />} />
        <Route path="accommodation" element={<Accommodation />} />
        <Route path="souvenir" element={<Souvenir />} />
        <Route path="registration" element={<Registration />} />
        <Route path="committee" element={<Committee />} />


      </Routes >
    </>
  );
}

export default App;
