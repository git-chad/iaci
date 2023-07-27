import Shape02 from "../assets/images/Shape02.png";

const Placeholder = () => {
  return (
    <div className="relative snap-child w-screen h-screen bg-[#F5F5F5]">
      <div className="opacity-60">
        <img className=" absolute top-0 left-0 h-full z-0" src={Shape02}></img>
      </div>
    </div>
  );
};

export default Placeholder;
