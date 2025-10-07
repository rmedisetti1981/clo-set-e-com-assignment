// Single import source for Components, hooks, and utils.
//Can be used across all the componenets in the Project

// -------------------- Components --------------------
export { default as Header } from "../components/layout/Header";
export { default as Content } from "../components/layout/Content";
export { default as Footer } from "../components/layout/Footer";


// -------------------- Utilities --------------------
export {applyFilters} from "../common/utils/filterUtils";
export {getUrlParams, setUrlParams} from "../common/utils/urlUtils";

//---------------------------------------------------------
export {PricingOption, FILTER_CONFIG} from "../common/filterConfig";