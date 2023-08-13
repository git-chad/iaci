import Shape03 from "../../assets/images/Shape03.png";
import StudentGroup01 from "../../assets/images/StudentGroup01.jpg";

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
            className="max-w-full max-h-full p-8 rounded-tl-full rounded-br-full"
            src={StudentGroup01}
            alt="Student Group"
          />
        </div>

        <div className="side2 z-10 flex flex-col h-screen w-[40%] p-6 items-center justify-center">
          <h1 className="ork font-bold text-[6.3rem]">Highlights</h1>

          <p className="ppa mt-8 text-2xl leading-[1.5] text-justify">
            At IACI, we create lasting memories. Our institute is dedicated to
            fostering student{" "}
            <span className="underline">growth and development</span>,
            empowering them to reach their full potential. Explore the
            possibilities with us.
          </p>
          <div className="btn flex mt-8 py-2 px-4">
            <button className="ppa  hover:underline transition-all text-lg text-black font-bold">
              Take a look
            </button>
            <span className="material-symbols-outlined pl-2">arrow_outward</span>
          </div>
          <span className="material-symbols-outlined text-3xl text-[#7A8574] cursor-default">
            eco
          </span>
        </div>
      </div>
    </div>
  );
};

export default Highlights;
