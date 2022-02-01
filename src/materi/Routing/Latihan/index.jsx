import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./About";
import Clients from "./Clients";
import Contact from "./Contact";
import Home from "./Home";
import Navigation from "./Navigator";
import Services from "./Service";

const Routing = () => {
  return (
    <div>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Routing;
