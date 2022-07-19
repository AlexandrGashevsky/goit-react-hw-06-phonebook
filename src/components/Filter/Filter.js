import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "../../redux/actions";
import filterStyles from "./Filter.module.css";
export default function Filter() {
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const handleChangeFilter = (e) => dispatch(changeFilter(e.target.value));

  return (
    <label className={filterStyles.label} name="filter" htmlFor="filter" value={filter}>
      Find contacts by name
      <input
        className={filterStyles.inputFilter}
        type="text"
        id="filter"
        onChange={handleChangeFilter}
      />
    </label>
  );
}


