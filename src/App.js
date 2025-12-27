import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Kits from "./pages/Kits";
import KitDetail from "./pages/KitDetail";
import Herbs from "./pages/Herbs";
import HerbDetail from "./pages/HerbDetail";
import BookPandit from "./pages/BookPandit";
import About from "./pages/About";
import Contact from "./pages/Contact";
import WhatsAppButton from "./components/WhatsAppButton";
import ScrollTopButton from "./components/ScrollTopButton";

function App() {
  return (
    <Router basename="/satvik-havan">
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/kits" element={<Kits />} />
          <Route path="/kits/:id" element={<KitDetail />} />
          <Route path="/herbs" element={<Herbs />} />
          <Route path="/herbs/:id" element={<HerbDetail />} />
          <Route path="/booking" element={<BookPandit />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <WhatsAppButton />
      <ScrollTopButton />
      <Footer />
    </Router>
  );
}

export default App;
