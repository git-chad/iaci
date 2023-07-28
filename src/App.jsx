import "./App.css";
import CoursesAndExams from "./pages/coursesAndExams";
import Hero from "./pages/hero";
import Lenis from "@studio-freight/lenis";

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
        <CoursesAndExams />
      </div>
    </>
  );
}

export default App;
