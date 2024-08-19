// src/components/Header.js
import { useCart } from "../context/CartContext";
import "../customStyles/bounce.css";
import LogoutButton from "../features/Authentication/Logout";
import { useIsAuthenticated } from "../context/AuthContext";
import AuthButtons from "./AuthButtons";
import { useState } from "react";
// import { useGetOrders } from "../Hooks/useGetOrders";
const NavBar = () => {
  const { isAuthenticated } = useIsAuthenticated();
  const { cartItems } = useCart();
  const [currentPage, setCurrentPage] = useState(location.pathname.slice(1));

  function handleCurrentPage(pageName) {
    return currentPage === pageName;
  }

  const linkStyles = `  after:absolute after:content-['']  after:bg-emeraldGreen after:h-[2.5px] after:bottom-[-0.5rem] after:left-0 after:transition-all after:duration-300 `;
  // const userOrderData = useGetOrders();

  return (
    <nav className="bg-charcoal fixed top-0 right-0 w-full z-[999] text-softWhite flex justify-between py-1 items-center px-8 text-center">
      <div className="flex">
        <img
          src="/shoelogo.png"
          alt="logo"
          className="w-[10rem] h-[5rem] logo"
        />
        <h1 className="bg-[url('/flame-bg.jpeg')] bg-contain bg-clip-text text-[transparent]">
          Shoefly
        </h1>
      </div>
      {isAuthenticated ? <LogoutButton /> : <AuthButtons />}
      <nav>
        <ul className="list-none p-0 m-0 flex justify-center">
          <li className="mx-4 ">
            <a
              href="/"
              className={`text-softWhite relative ${linkStyles} ${
                handleCurrentPage("")
                  ? "after:w-full"
                  : "hover:after:w-full after:w-0"
              }`}
            >
              Home
            </a>
          </li>
          <li className="mx-4">
            <a
              href="/products"
              className={`text-softWhite relative ${linkStyles} ${
                handleCurrentPage("products")
                  ? "after:w-full"
                  : "hover:after:w-full after:w-0"
              }`}
            >
              Shop
            </a>
          </li>
          <li className="mx-4 ">
            <a
              href="/cart"
              className={`text-softWhite relative ${linkStyles} ${
                handleCurrentPage("cart")
                  ? "after:w-full"
                  : "hover:after:w-full after:w-0"
              }`}
            >
              Cart
              <span className="absolute top-[-1.3rem] right-[-1rem] py-[1px] px-2 z-10  rounded-full bg-sunsetOrange text-softWhite ">
                {cartItems.length}
              </span>
            </a>
          </li>
          <li className="mx-4">
            <a
              href="/orders"
              className={`text-softWhite relative ${linkStyles} ${
                handleCurrentPage("orders")
                  ? "after:w-full"
                  : "hover:after:w-full after:w-0"
              }`}
            >
              Orders
              {/* <span className="absolute top-[-1.3rem] right-[-1rem] py-[1px] px-2 z-10  rounded-full bg-sunsetOrange text-softWhite ">
                {userOrderData.length}
              </span> */}
            </a>
          </li>
        </ul>
      </nav>
    </nav>
  );
};

export default NavBar;
