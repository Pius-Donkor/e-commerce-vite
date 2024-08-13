import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CheckoutPage from "./pages/CheckoutPage";
import CartPage from "./pages/CartPage";
import ProductsPage from "./pages/ProductPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import Layout from "./ui/Layout";
import HomePage from "./pages/HomePage";
import { CartProvider } from "./context/CartContext";
import { Toaster } from "react-hot-toast";
import { FaCartArrowDown } from "react-icons/fa6";
import OrdersPage from "./pages/OrdersPage";

function App() {
  return (
    <CartProvider>
      <Toaster
        toastOptions={{
          style: {
            zIndex: 9999,
          },
          success: {
            icon: (
              <p className="p-2 bg-[#82e0c4c2] rounded-full ">
                <FaCartArrowDown className="text-2xl text-emeraldGreen " />
              </p>
            ),
          },
        }}
      />
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/orders" element={<OrdersPage />} />
            <Route path="/checkoutPage" element={<CheckoutPage />} />
            <Route path="/product/:id" element={<ProductDetailsPage />} />
            <Route path="/products" element={<ProductsPage />} />
          </Route>
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
