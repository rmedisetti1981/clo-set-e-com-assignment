import React from 'react'
import {SearchBox, Filters, ResetAllButton} from "../../common/searchRefinementBarrel";
export default function SearchRefinements() {
  return (
    <>
        <SearchBox/>
        <div className="filters-row">
          <div className="checkbox-group">
            <Filters/>
          </div>
          <div className="reset-btn">
            <ResetAllButton/>
          </div>
        </div>
    </>
  )
}
