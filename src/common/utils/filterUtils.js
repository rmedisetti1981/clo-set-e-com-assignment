/**
 * Filters products based on selected filters and search term
 *  products - Array of product objects
 * filters - { free: boolean, paid: boolean, viewOnly: boolean }
 * searchTerm - Search term string
 * returns Array of Filtered products
 */
export const applyFilters = (products, filters, PricingOption, searchTerm) => {
  
  if (!products) return [];

  return products
    .filter((p) => {
      //Includes the elements which are selected
      if (filters.free && p.pricingOption === PricingOption.FREE) return true;
      if (filters.paid && p.pricingOption === PricingOption.PAID) return true;
      if (filters.viewOnly && p.pricingOption === PricingOption.VIEW_ONLY) return true;

      // If no filter is selected, include all
      if (!filters.free && !filters.paid && !filters.viewOnly) return true;

      return false;
    })
    .filter((p) =>
      searchTerm
        ? p.title.toLowerCase().includes(searchTerm.toLowerCase())
        : true
    );
};

export const getDefaultFilters = (FILTER_CONFIG=[],filterType) =>
  FILTER_CONFIG
    .filter((f) => !filterType || f.type === filterType)
    .reduce((acc, cur) => {
      acc[cur.key] = cur.default;
      return acc;
}, {});