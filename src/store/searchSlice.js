import { createSlice } from "@reduxjs/toolkit";
import { resetAll } from "./resetSlice";
import { FILTER_CONFIG } from "../common/filterConfig";
import { getDefaultFilters } from "../common/utils/filterUtils";

const initialState = getDefaultFilters(FILTER_CONFIG,"text");

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(resetAll, () => initialState);
  }
});

export const { setSearchTerm } = searchSlice.actions;
export default searchSlice.reducer;
export const selectSearchTerm = (state) => state.search.searchTerm;
