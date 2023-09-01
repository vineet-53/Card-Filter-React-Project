import React from "react";
import { filterData } from "../data";
import Button from "./Button";
const Filter = () => {
  return (
    <div className="flex justify-center py-2">
      <ul className="flex gap-4  items-center">
        {filterData.map((data) => {
          return <Button key={data.id} {...data} />;
        })}
      </ul>
    </div>
  );
};

export default Filter;
