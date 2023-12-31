
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-wrap justify-between">
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <h3 className="text-lg font-bold mb-2">Contact</h3>
          <p>AGREGAR EMAIL</p>
          <p>+5411 4256-9819</p>
          <p>Calle 149 No1354, (1884) Berazategui, Buenos Aires - Argentina</p>
        </div>
        <div className="w-full md:w-1/3 mb-6 md:mb-0 flex justify-center">
          <ul className="list-none">
            <li><a href="#">Courses</a></li>
            <li><a href="#">Exams</a></li>
            <li><a href="#">Travel</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="w-full md:w-1/3 flex justify-end justify-center items-center">
          <a href="#" className="mr-4 text-3xl hover:hover:text-blue-300 transition-colors">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="mr-4 text-3xl hover:text-red-300 transition-colors">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="mr-4 text-3xl hover:text-green-200 transition-colors">
            <i className="fab fa-whatsapp"></i>
          </a>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-auto py-auto text-center text-gray-400">
        <p className="text-sm">© 2023 IACI. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

