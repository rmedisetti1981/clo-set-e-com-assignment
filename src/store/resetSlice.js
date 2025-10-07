import { createAction } from "@reduxjs/toolkit";

// Global reset. 
// This can be used to reset both filters & Search as well.
//  In future, it can be used to reset sorting and pricerange also.
export const resetAll = createAction("reset/all");
