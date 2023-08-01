import "./App.css";
import Navbar from "./components/Navbar";
import CoursesAndExams from "./pages/coursesAndExams";
import Hero from "./pages/Hero";
import Footer from "./components/Footer";
import Lenis from "@studio-freight/lenis";
import EnglishLevelPage from './pages/TestForm'
import Highlights from "./pages/Highlights";


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
      <div className="overflow-x-hidden overflow-y-auto">
        <Navbar/>
        <Hero />
        <Highlights/>
        <EnglishLevelPage/>
        <CoursesAndExams />
        <Footer />
      </div>
    </>
  );
}

export default App;
