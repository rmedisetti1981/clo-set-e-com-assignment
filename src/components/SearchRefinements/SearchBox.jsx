import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm, selectSearchTerm} from "../../store/storeBarrel";

import "../../styles/SearchBar.less";

export default function SearchBox() {
  const dispatch = useDispatch();
  const searchTerm = useSelector(selectSearchTerm);

  return (
    <div className="search-bar">
      <input
        type="text"
        className="search-box"
        placeholder="Search by title or creator..."
        value={searchTerm}
        onChange={(e) => dispatch(setSearchTerm(e.target.value))}
      />
    </div>
  );
}
