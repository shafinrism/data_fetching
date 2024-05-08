import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div className="py-6 bg-black">
      <div className="container mx-auto flex justify-between items-center">
          <div><h1 className="text-white">Navbar</h1></div>
          <div>
            <ul className="flex gap-6">
              <li className="text-white"><Link to='/products'>Products</Link></li>
              <li className="text-white"><Link to='/service'>Service</Link></li>
              <li className="text-white"><Link to='/about'>About</Link></li>
            </ul>
          </div>
      </div>
    </div>
  );
};

export default Navbar;