import { createSlice } from "@reduxjs/toolkit";
import { resetAll } from "./resetSlice";
import { FILTER_CONFIG } from "../common/filterConfig";
import { getDefaultFilters } from "../common/utils/filterUtils";

const initialState = getDefaultFilters(FILTER_CONFIG,"checkbox");

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    toggleFilter: (state, action) => {
      state[action.payload] = !state[action.payload];
    },
    setFilter: (state, action) => {
      const { key, value } = action.payload;
      if (key in state) state[key] = value === "true" || value === true;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(resetAll, () => initialState);
  }
});

export const { setFilter, toggleFilter } = filtersSlice.actions;
export default filtersSlice.reducer;
export const selectFilters = (state) => state.filters;