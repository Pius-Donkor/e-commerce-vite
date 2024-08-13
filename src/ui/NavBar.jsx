// src/components/Header.js
import "../customStyles/bounce.css";
const NavBar = () => {
  return (
    <nav className="bg-charcoal fixed top-0 right-0 w-full z-[999] text-softWhite flex justify-between py-1 items-center px-8 text-center">
      <div className="flex">
        <img
          src="/public/shoelogo.png"
          alt="logo"
          className="w-[10rem] h-[5rem] logo"
        />
        <h1 className="bg-[url('/public/flame-bg.jpeg')] bg-contain bg-clip-text text-[transparent]">
          Shoefly
        </h1>
      </div>

      <nav>
        <ul className="list-none p-0 m-0 flex justify-center">
          <li className="mx-4">
            <a href="/" className="text-softWhite">
              Home
            </a>
          </li>
          <li className="mx-4">
            <a href="/products" className="text-softWhite">
              Shop
            </a>
          </li>
          <li className="mx-4">
            <a href="/cart" className="text-softWhite">
              Cart
            </a>
          </li>
          <li className="mx-4">
            <a href="/orders" className="text-softWhite">
              Orders
            </a>
          </li>
        </ul>
      </nav>
    </nav>
  );
};

export default NavBar;
