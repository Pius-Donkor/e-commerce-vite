// ProductDetailsPage.jsx

import { useParams } from "react-router-dom";
import { productsData } from "../data";
import Products from "../features/Products/Products";
import AddCartButton from "../ui/AddCartButton";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const [product] = productsData.filter((product) => product.product_id === id);
  const relatedProducts = productsData.filter(
    (productItem) =>
      productItem.category[1] === product.category[1] &&
      productItem.product_id !== product.product_id
  );
  return (
    <div className="container mx-auto p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          {/* Image Slider */}
          <div className="slider">
            <img
              className="h-[40rem]"
              src={product.images[0].main_view}
              alt=""
            />
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
          <p className="text-2xl text-green-500 mb-4">${product.price}</p>
          <p className="text-gray-700 mb-6">{product.description}</p>
          <AddCartButton cartItem={product} />
        </div>
      </div>

      <h3 className="text-2xl font-semibold mt-8 mb-4">Related Products</h3>

      <Products products={relatedProducts} />
    </div>
  );
};

export default ProductDetailsPage;
