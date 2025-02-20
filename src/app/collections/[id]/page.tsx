// src/app/collections/[id]/page.tsx

"use client"; // Mark this component as a client component

import { useRouter } from 'next/navigation';

const CollectionDetailPage: React.FC = () => {
  const router = useRouter();
  const { pathname } = router;

  // Extract id from pathname
  const id = pathname?.split('/')[2];

  return (
    <div className="min-h-screen bg-white py-8 px-4">
      <h1 className="text-4xl font-bold text-gray-800">Collection {id}</h1>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg">
          <img src="/placeholder-image.jpg" alt="Product" className="w-full h-64 object-cover rounded-md" />
          <h2 className="text-xl font-semibold text-gray-800 mt-4">Product 1</h2>
          <p className="text-lg text-gray-600">$59.99</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg">
          <img src="/placeholder-image.jpg" alt="Product" className="w-full h-64 object-cover rounded-md" />
          <h2 className="text-xl font-semibold text-gray-800 mt-4">Product 2</h2>
          <p className="text-lg text-gray-600">$49.99</p>
        </div>
      </div>
    </div>
  );
};

export default CollectionDetailPage;