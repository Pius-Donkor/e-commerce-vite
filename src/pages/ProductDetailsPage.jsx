// ProductDetailsPage.jsx

const ProductDetailsPage = () => {
  const product = {
    name: "Product Name",
    price: 150,
    description: "Detailed description of the product goes here.",
    images: [
      "path-to-image-1.jpg",
      "path-to-image-2.jpg",
      "path-to-image-3.jpg",
    ],
    relatedProducts: [
      {
        id: 1,
        name: "Related Product 1",
        price: 120,
        image: "path-to-image-4.jpg",
      },
      {
        id: 2,
        name: "Related Product 2",
        price: 180,
        image: "path-to-image-5.jpg",
      },
    ],
  };

  return (
    <div className="container mx-auto p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          {/* Image Slider */}
          <div className="slider">
            {product.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Product image ${index + 1}`}
                className="w-full h-80 object-cover rounded-lg mb-4"
              />
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
          <p className="text-2xl text-green-500 mb-4">${product.price}</p>
          <p className="text-gray-700 mb-6">{product.description}</p>
          <button className="bg-green-500 text-white py-2 px-4 rounded-md sticky top-20">
            Add to Cart
          </button>
        </div>
      </div>

      <h3 className="text-2xl font-semibold mt-8 mb-4">Related Products</h3>
      <div className="grid grid-cols-2 gap-4">
        {product.relatedProducts.map((related) => (
          <div key={related.id} className="bg-white shadow-md rounded-lg p-4">
            <img
              src={related.image}
              alt={related.name}
              className="w-full h-32 object-cover rounded-md"
            />
            <h4 className="text-lg font-semibold mt-2">{related.name}</h4>
            <p className="text-gray-600">${related.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetailsPage;
