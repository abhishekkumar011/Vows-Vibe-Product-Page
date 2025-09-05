import Footer from "./Components/Footer";
import Header from "./Components/Header";
import ProductDetails from "./Components/ProductDetails";
import SimilarProducts from "./Components/SimilarProducts";
import TopPicks from "./Components/TopPicks";

function App() {
  return (
    <div className="space-y-14">
      <Header />
      <ProductDetails />
      <SimilarProducts />
      <TopPicks />
      <Footer/>
    </div>
  );
}

export default App;
