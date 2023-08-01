import "./App.css";
import CoursesAndExams from "./pages/coursesAndExams";
import Hero from "./pages/hero";
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
        <Hero />
        <Highlights/>
        <EnglishLevelPage/>
        <CoursesAndExams />
      </div>
    </>
  );
}

export default App;
