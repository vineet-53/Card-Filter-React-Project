import React, { useEffect, useState } from "react";
import Card from "./Card";
const Cards = (props) => {
  let courses = [];
  const [likedCourses, setLikedCourses] = useState([]);
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
    <div className="flex justify-center max-w-[1000px] flex-wrap  mx-auto gap-4">
      {courses.map((course) => {
        return (
          <Card
            key={course.id}
            course={course}
            setLikedCourses={setLikedCourses}
            likedCourses={likedCourses}
          />
        );
      })}
    </div>
  );
};

export default Cards;
