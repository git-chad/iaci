import Shape03 from "../assets/images/Shape03.png";
import StudentGroup01 from "../assets/images/StudentGroup01.jpg";

const Highlights = () => {
  return (
    <div className="relative w-screen h-screen flex flex-row justify-center items-center bg-[#F5F5F5]">
      <img
        className="absolute right-0 top-0 z-0 opacity-50 h-full"
        src={Shape03}
        alt="Background Shape"
      />
      <div className="flex max-w-[1376px] mx-auto">
        <div className="side1 flex flex-col h-screen w-[60%] p-2 justify-center items-center">
          <img
            className="max-w-full max-h-full p-8"
            src={StudentGroup01}
            alt="Student Group"
          />
        </div>

        <div className="side2 z-10 flex flex-col h-screen w-[40%] p-6 items-center justify-center">
          <h1 className="ork text-[6.3rem]">Highlights</h1>
          <p className="ppa mt-8 text-2xl leading-[1.5] text-justify">
            At IACI, we create lasting memories. Our institute is dedicated to
            fostering student growth and development, empowering them to reach
            their full potential. Explore the possibilities with us.
          </p>
          <button className="ppa mt-8 hover:underline transition-all text-black font-bold py-2 px-4">
            Take a look
          </button>
        </div>
      </div>
    </div>
  );
};

export default Highlights;
