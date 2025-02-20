// src/app/page.tsx
import React from "react";

// 這是你的首頁頁面
const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-blue-600">Welcome to My E-commerce</h1>
        <p className="mt-4 text-lg text-gray-700">Browse products and enjoy shopping!</p>
      </div>
    </div>
  );
};

export default HomePage;