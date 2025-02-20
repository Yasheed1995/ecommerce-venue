// src/app/collections/page.tsx
import Link from "next/link";

const CollectionsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <h1 className="text-4xl font-bold text-gray-800">Product Collections</h1>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <Link href="/collections/1" className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800">Collection 1</h2>
        </Link>
        <Link href="/collections/2" className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800">Collection 2</h2>
        </Link>
        <Link href="/collections/3" className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800">Collection 3</h2>
        </Link>
      </div>
    </div>
  );
};

export default CollectionsPage;