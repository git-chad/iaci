import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Lenis from "@studio-freight/lenis";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import HighlightsPage from "./pages/highlightsPage/Highlights";


function App() {
  const lenis = new Lenis();

  lenis.on("scroll", (e) => {
    console.log(e);
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Highlights" element={<HighlightsPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
