import ProductsContainer from "../components/ProductsListing/ProductsContainer";
import SearchRefinements from "../components/SearchRefinements/SearchRefinements"
export default function ProductsPage() {
  return (
    <div className="products-page">
        <SearchRefinements/>
        <ProductsContainer/>
    </div>
  );
}