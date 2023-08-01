
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-wrap justify-between ppa">
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <h3 className="text-lg font-bold mb-2">Contacto:</h3>
          <p>info@iaciweb.com.ar</p>
          <p>+5411 4256-9819</p>
          <p>Calle 149 No1354, (1884) Berazategui, Buenos Aires - Argentina</p>
        </div>
        <div className="w-full md:w-1/3 mb-6 md:mb-0 flex justify-center ppa">
          <ul className="list-none">
            <li><a href="#">Courses</a></li>
            <li><a href="#">Exams</a></li>
            <li><a href="#">Travel</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="w-full md:w-1/3 flex justify-end ppa">
          <a href="#" className="mr-4">Facebook</a>
          <a href="#" className="mr-4">Instagram</a>
          <a href="#" className="mr-4">WhatsApp</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

