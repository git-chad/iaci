

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-transparent p-8 z-50">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <h1 className="text-xl font-bold">IACI hehe</h1>
        <ul className="flex space-x-10 text-2xl">
          <li>Courses</li>
          <li>Exams</li>
          <li>Travel</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
