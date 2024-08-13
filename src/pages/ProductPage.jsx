import { useState } from "react";
import { productsData } from "../data";
import Products from "../features/Products/Products";
import Button from "../ui/Button";
import HomeBack from "../ui/HomeBack";

const ProductsPage = () => {
  // State for search query, sorting option, current page, and items per page
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("relevance");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Function to handle search input change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
    setCurrentPage(1); // Reset to the first page when searching
  };

  // Function to handle sorting option change
  const handleSortChange = (event) => {
    setSortOption(event.target.value);
    setCurrentPage(1); // Reset to the first page when sorting
  };

  // Filter and sort products based on search and sort options
  const filteredAndSortedProducts = productsData
    .filter(
      (product) =>
        product.name.toLowerCase().includes(searchQuery) ||
        product.description.toLowerCase().includes(searchQuery)
    )
    .sort((a, b) => {
      switch (sortOption) {
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        case "rating":
          return b.rating - a.rating;
        default:
          return 0; // Default to no sorting
      }
    });

  // Calculate pagination variables
  const totalPages = Math.ceil(filteredAndSortedProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = filteredAndSortedProducts.slice(startIndex, endIndex);

  // Function to handle page change
  const handlePageChange = (direction) => {
    if (direction === "next" && currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    } else if (direction === "prev" && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="container mx-auto p-8">
      <div className="flex justify-between items-center mb-6">
        <HomeBack buttonColor="orange" textColor="white" />
        <h2 className="text-3xl font-bold">Products</h2>
        <div className="flex space-x-4">
          <select
            value={sortOption}
            onChange={handleSortChange}
            className="border border-gray-300 p-2 rounded-md"
          >
            <option value="relevance">Sort by Relevance</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating">Rating</option>
          </select>
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search"
            className="border border-gray-300 p-2 rounded-md"
          />
        </div>
      </div>

      {/* Display products */}
      <Products products={currentProducts} />

      {/* Pagination controls */}
      <div className="flex justify-between items-center mt-6">
        <Button
          textColor="darkGray"
          onClick={() => handlePageChange("prev")}
          disabled={currentPage === 1}
        >
          {"<"}Prev
        </Button>
        <span className="text-gray-600">
          Page {currentPage} of {totalPages}
        </span>
        <Button
          textColor="darkGray"
          onClick={() => handlePageChange("next")}
          disabled={currentPage === totalPages}
        >
          Next{">"}
        </Button>
      </div>
    </div>
  );
};

export default ProductsPage;
