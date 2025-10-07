import { getUrlParams } from "./common/utils/urlUtils";
import { setSearchTerm } from "./store/searchSlice";
import { setFilter } from "./store/filtersSlice";

export const initializeStateFromUrl = (store) => {
  const params = getUrlParams();

  if (params.search) store.dispatch(setSearchTerm(params.search));
  if (params.free) store.dispatch(setFilter({ key: "free", value: params.free }));
  if (params.paid) store.dispatch(setFilter({ key: "paid", value: params.paid }));
  if (params.viewOnly) store.dispatch(setFilter({ key: "viewOnly", value: params.viewOnly }));
};
