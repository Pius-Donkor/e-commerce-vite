// src/components/Header.js

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4 text-center">
      <h1>Welcome to Shoeify Store</h1>
      <nav>
        <ul className="list-none p-0 m-0 flex justify-center">
          <li className="mx-4">
            <a href="/" className="text-white">
              Home
            </a>
          </li>
          <li className="mx-4">
            <a href="/products" className="text-white">
              Shop
            </a>
          </li>
          <li className="mx-4">
            <a href="/cart" className="text-white">
              Cart
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
