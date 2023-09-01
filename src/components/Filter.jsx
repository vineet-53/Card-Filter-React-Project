import React from "react";
import { filterData } from "../data";
const Filter = (props) => {
  const { data } = props;

  function handleFilterClick(event) {
    const filterValue = event.target.innerText;
    const category = data.data[filterValue];
    props.setFilteredData(category);
  }
  return (
    <div className="flex justify-center py-2 ">
      <ul className="flex gap-4  items-center my-7">
        {filterData.map((data) => {
          return (
            <button
              key={data.id}
              onClick={handleFilterClick}
              className="px-2 text-white border-2 border-indigo-950 bg-slate-600 focus:border-slate-100 rounded-md"
            >
              {data.title}
            </button>
          );
        })}
      </ul>
    </div>
  );
};

export default Filter;
