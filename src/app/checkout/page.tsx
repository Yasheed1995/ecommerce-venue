// src/app/checkout/page.tsx
const CheckoutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <h1 className="text-4xl font-bold text-gray-800">Checkout</h1>
      <div className="mt-6 max-w-xl mx-auto">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800">Order Summary</h2>
          <p className="mt-4 text-lg text-gray-700">Total: $159.99</p>
          <div className="mt-6">
            <button className="w-full bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700">
              Proceed to Payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;