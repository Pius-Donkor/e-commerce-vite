// ProductsPage.jsx
const ProductsPage = () => {
  const products = [
    {
      id: 1,
      name: "Product Name 1",
      price: 100,
      image: "path-to-image-1.jpg",
    },
    {
      id: 2,
      name: "Product Name 2",
      price: 150,
      image: "path-to-image-2.jpg",
    },
    {
      id: 3,
      name: "Product Name 3",
      price: 200,
      image: "path-to-image-3.jpg",
    },
    {
      id: 4,
      name: "Product Name 4",
      price: 180,
      image: "path-to-image-4.jpg",
    },
    // Add more products as needed
  ];

  return (
    <div className="container mx-auto p-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">Products</h2>
        <div className="flex space-x-4">
          <select className="border border-gray-300 p-2 rounded-md">
            <option value="relevance">Sort by Relevance</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating">Rating</option>
          </select>
          <input
            type="text"
            placeholder="Search"
            className="border border-gray-300 p-2 rounded-md"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-600">${product.price}</p>
            <button className="bg-green-500 text-white py-2 px-4 mt-4 rounded-md">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
