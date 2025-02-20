import Link from "next/link";

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold text-blue-600">Welcome to My E-commerce</h1>
      <p className="mt-4 text-lg text-gray-700">Browse products and enjoy shopping!</p>
      
      <div className="mt-6">
        <Link href="/products" className="text-xl text-blue-500 hover:text-blue-700">
          View Products
        </Link>
      </div>
      
      <div className="mt-4">
        <Link href="/collections" className="text-xl text-blue-500 hover:text-blue-700">
          View Collections
        </Link>
      </div>
    </div>
  );
};

export default HomePage;// src/app/page.tsx