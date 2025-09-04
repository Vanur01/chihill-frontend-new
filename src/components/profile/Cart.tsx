import React from "react";
import { ShoppingCart } from "lucide-react";

export default function Cart() {
  return (
    <div className="text-center py-12">
      <ShoppingCart className="w-12 h-12 text-gray-400 mx-auto mb-4" />
      <h3 className="text-lg font-medium text-gray-900 mb-2">
        Your cart is empty
      </h3>
      <p className="text-gray-500 mb-6">Add some items to get started</p>
      <button 
            className="px-6 py-2 bg-primary1 text-white hover:bg-primary2 transition-colors duration-200 cursor-pointer ">
        Continue Shopping
      </button>
    </div>
  );
}
