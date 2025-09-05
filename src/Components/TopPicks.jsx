import React from "react";
import ProductCard from "./ProductCard";

function TopPicks() {
  return (
    <div>
      <h1 className="text-4xl font-semibold text-center my-10">
        Top picks for you
      </h1>
      <div className="flex justify-center gap-5 md:gap-20 px-5 md:px-20 flex-wrap">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}

export default TopPicks;
