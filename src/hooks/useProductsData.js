import { useState, useMemo } from "react";
import { useSelector } from "react-redux";
import {applyFilters,
   PricingOption
} from "../common/barrel";

import {useGetAllProductsQuery,
   selectFilters,
   selectSearchTerm,
} from "../store/storeBarrel";

//all business logic (data fetching, filtering, pagination) is placed inside this custom hook
const  useProductsData = () => {

  // Fetch all products (RTK Query)
  const { data: allProducts = [], isLoading, isError, error } = useGetAllProductsQuery();

  // Get filters and search term from Redux
  const filters = useSelector(selectFilters);
  const searchTerm = useSelector(selectSearchTerm);

  // No Of Items to display per scroll
  const [visibleCount, setVisibleCount] = useState(12);

  // Apply filters/search
  const filteredProducts = useMemo(() => {
    return applyFilters(allProducts, filters, PricingOption, searchTerm);
  }, [allProducts, filters, searchTerm]);

  const visibleProducts = filteredProducts.slice(0, visibleCount);

  // Handler to load more
  const fetchMore = () => setVisibleCount((prev) => prev + 12);

  return {
    isLoading,
    isError,
    error,
    filteredProducts,
    visibleProducts,
    fetchMore,
    hasMore: visibleProducts.length < filteredProducts.length,
  };
};

export default useProductsData;