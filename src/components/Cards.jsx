import React, { useEffect } from "react";
import Card from "./Card";
const Cards = (props) => {
  let courses = [];
  function getCourse() {
    if (props.data?.data) {
      Object.values(props.data.data).forEach((category) => {
        category.forEach((course) => courses.push(course));
      });
      return courses;
    }
    courses = props.data;
  }
  getCourse();
  return (
    <div className="flex justify-center max-w-[1000px] flex-wrap  mx-auto gap-3">
      {courses.map((course) => {
        return <Card key={course.id} course={course} />;
      })}
    </div>
  );
};

export default Cards;
