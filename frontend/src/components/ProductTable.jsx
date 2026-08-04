import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

//used tailwind table template

const ProductTable = () => {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("");

  const fetchProducts = async () => {
    try {
      const res = await api.get("/");
      setProducts(res.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };
  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.category.toLowerCase().includes(search.toLowerCase()),
  );
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "quantity-low":
        return a.quantity - b.quantity;
      case "quantity-high":
        return b.quantity - a.quantity;
      case "name":
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?",
    );

    if (!confirmDelete) return;

    try {
      await api.delete(`/${id}`);
      fetchProducts();
    } catch (error) {
      console.error("Delete failed:", error);
    }
  };

  if (loading) {
    return (
      <div className="bg-white rounded-xl shadow-md p-8 text-center text-gray-500">
        Loading products...
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-6 border-b">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">
            Product Inventory
          </h2>

          <p className="text-gray-500 text-sm">
            Total Products: {filteredProducts.length}
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-3">
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border rounded-lg px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">Sort By</option>
            <option value="name">Name (A-Z)</option>
            <option value="price-low">Price: Low → High</option>
            <option value="price-high">Price: High → Low</option>
            <option value="quantity-low">Quantity: Low → High</option>
            <option value="quantity-high">Quantity: High → Low</option>
          </select>

          <button
            onClick={() => navigate("/products/new")}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg transition"
          >
            + Add Product
          </button>
        </div>
      </div>

      {/* Table */}

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-slate-100 text-slate-700">
            <tr>
              <th className="px-6 py-4 text-left">Product</th>

              <th className="px-6 py-4 text-left">Category</th>

              <th className="px-6 py-4 text-left">Price</th>

              <th className="px-6 py-4 text-left">Quantity</th>

              <th className="px-6 py-4 text-left">Status</th>

              <th className="px-6 py-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {sortedProducts.length > 0 ? (
              sortedProducts.map((product) => (
                <tr
                  key={product._id}
                  className="border-b hover:bg-slate-50 transition"
                >
                  <td className="px-6 py-4 font-medium">{product.name}</td>

                  <td className="px-6 py-4">{product.category}</td>

                  <td className="px-6 py-4">₹{product.price}</td>

                  <td className="px-6 py-4">{product.quantity}</td>

                  <td className="px-6 py-4">
                    {product.quantity <= 5 ? (
                      <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-medium">
                        Low Stock
                      </span>
                    ) : (
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                        In Stock
                      </span>
                    )}
                  </td>

                  <td className="px-6 py-4">
                    <div className="flex justify-center gap-2">
                      <button
                        onClick={() =>
                          navigate(`/products/edit/${product._id}`)
                        }
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm transition"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() => handleDelete(product._id)}
                        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm transition"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="text-center py-12 text-gray-500">
                  No products found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductTable;
