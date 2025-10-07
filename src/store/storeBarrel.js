/* Single import source for Redux Store & slices */

// -------------------- Redux Slices --------------------
export { default as filtersReducer, selectFilters,setFilter, toggleFilter } from "./filtersSlice";
export { default as searchReducer, selectSearchTerm, setSearchTerm } from "./searchSlice";
export {resetAll} from "./resetSlice";
//export {store} from "./store";

// -------------------- API --------------------
export {productsApi, useGetAllProductsQuery} from "../api/productsApi";

export {urlSyncMiddleware} from "../middleware/urlSyncMiddleware";