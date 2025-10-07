import { setUrlParams } from "../common/utils/urlUtils";

export const urlSyncMiddleware = (storeAPI) => (next) => (action) => {
  const result = next(action);
  const state = storeAPI.getState();

  // Extract only the state you want to persist in URL
  const queryState = {
    search: state.search.searchTerm || undefined,
    free: state.filters.free || undefined,
    paid: state.filters.paid || undefined,
    viewOnly: state.filters.viewOnly || undefined,
  };

  setUrlParams(queryState);
  return result;
};
