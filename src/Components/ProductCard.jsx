import { Heart } from "lucide-react";
import React from "react";

function ProductCard() {
  return (
    <div className="w-full md:w-64">
      <div className="flex justify-between items-center mb-4">
        <h4 className="bg-accent rounded-r-2xl px-8 py-0.5 text-white">
          BestSeller
        </h4>
        <Heart strokeWidth={1} />
      </div>

      <div className="w-full md:w-64 h-60 bg-red-300 rounded-lg overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1601121141418-c1caa10a2a0b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="h-full w-full object-cover"
          alt="necklace"
        />
      </div>

      <div className="space-y-2 mt-2">
        <h4 className="font-medium">Rose Gold Earrings with alloy</h4>
        <div className="flex gap-4 items-center">
          <h3 className="text-xl font-semibold">₹ 1999</h3>
          <h5 className="line-through font-medium text-gray-500">₹ 2999</h5>
        </div>
      </div>

      <button className="bg-secondary w-full py-2 text-lg text-white font-medium mt-5">
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
