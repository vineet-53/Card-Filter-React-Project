import React from "react";
import { filterData } from "../data";
const Filter = (props) => {
  const { setCategory } = props;
  function handleFilterClick(title) {
    setCategory(title);
  }
  return (
    <div className="flex justify-center py-2 ">
      <ul className="flex gap-4  items-center my-5">
        {filterData.map((data) => {
          return (
            <button
              key={data.id}
              onClick={() => {
                handleFilterClick(data.title);
              }}
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
