import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FILTER_CONFIG} from "../../common/barrel";
import InputField from './InputField'
import {toggleFilter, selectFilters} from "../../store/storeBarrel";
import "../../styles/Filters.less";

export default function Filters() {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);

  return (
    <>
      {FILTER_CONFIG.filter((f) => f.type === "checkbox").map(({ key, label }) => (
        <InputField
          key={key}
          type="checkbox"
          label={label}
          checked={filters[key]}
          onChange={() => dispatch(toggleFilter(key))}
        />
      ))}
    </>
  );
}
