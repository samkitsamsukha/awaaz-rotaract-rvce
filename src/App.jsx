import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Terms from "./components/Terms";
import Navbar from "./components/Navbar";
import Construction from "./components/Construction";
import AudioBooks from "./components/AudioBooks";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="pt-20">{/* Offset for fixed navbar */}
        <Construction />
        <Routes>
          <Route path="/about" element={<AboutUs />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/" element={<AudioBooks />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}