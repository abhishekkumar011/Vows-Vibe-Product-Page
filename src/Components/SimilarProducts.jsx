import ProductCard from "./ProductCard";

function SimilarProducts() {
  return (
    <div>
      <h1 className="text-4xl font-semibold text-center mb-10">
        Similar to this
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

export default SimilarProducts;
