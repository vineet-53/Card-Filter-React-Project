import React from "react";

const Button = (props) => {
  const { title } = props;
  return (
    <button className="px-2 text-white border-2 bg-slate-600 border-white rounded-md">
      {title}
    </button>
  );
};

export default Button;
