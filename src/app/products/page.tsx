// src/app/products/page.tsx
import Link from "next/link";

const ProductsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white py-8 px-4">
      <h1 className="text-4xl font-bold text-gray-800">Products</h1>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg">
          <img src="/placeholder-image.jpg" alt="Product" className="w-full h-64 object-cover rounded-md" />
          <h2 className="text-xl font-semibold text-gray-800 mt-4">Product 1</h2>
          <p className="text-lg text-gray-600">$99.99</p>
          <Link href="/products/1" className="text-blue-500 hover:text-blue-700">View Details</Link>
        </div>
        {/* Add more products here */}
      </div>
    </div>
  );
};

export default ProductsPage;