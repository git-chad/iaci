import "./App.css";
import Placeholder from "./pages/Placeholder";
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
      <div className="overflow-x-auto overflow-y-auto overflow-scroll">
        <Hero />
        <Placeholder />
      </div>
    </>
  );
}

export default App;
