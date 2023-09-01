import React, { useEffect } from "react";
import Card from "./Card";
const Cards = (props) => {
  let courses = [];
  function getCourse() {
    if (props.data == null) return;
    Object.values(props.data.data).forEach((category) => {
      category.forEach((course) => courses.push(course));
    });
    return courses;
  }
  getCourse();
  return (
    <div className="flex max-w-[1000px] flex-wrap  mx-auto gap-10">
      {courses.map((course) => {
        return <Card key={course.id} course={course} />;
      })}
    </div>
  );
};

export default Cards;
