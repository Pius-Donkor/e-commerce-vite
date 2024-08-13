/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";
import AddCartButton from "../../ui/AddCartButton";

export default function ProductCard({ product }) {
  const navigate = useNavigate();
  const cartItem = {
    name: product.name,
    price: product.price,
    quantity: 1,
    id: product.product_id,
    image: product.images[0].main_view,
  };
  return (
    <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
      <img
        src={product.images[0].main_view}
        alt={product.name}
        className="w-full h-48 object-cover rounded-md mb-4 cursor-pointer "
        onClick={() => navigate(`/product/${product.product_id}`)}
      />
      <div className="flex justify-between">
        <h3 className="text-lg font-semibold"> {product.name}</h3>
        <p className="text-right">{product.rating}⭐</p>
      </div>
      <p className="text-sunsetOrange">&#8373;{product.price}</p>
      <AddCartButton cartItem={cartItem} />
    </div>
  );
}
