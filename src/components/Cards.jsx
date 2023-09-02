import React, { useEffect, useState } from "react";
import Card from "./Card";
const Cards = (props) => {
  let courseArr = [];
  const { courses } = props;
  const [likedCourses, setLikedCourses] = useState([]);
  function getCourse() {
    if (courses?.data) {
      console.log("data array");
      Object.values(courses.data).forEach((category) => {
        category.forEach((course) => courseArr.push(course));
      });
      return courseArr;
    } else {
      console.log("simple array");
      return (courseArr = [...courses]);
    }
  }
  return (
    <div className="flex justify-center max-w-[1000px] flex-wrap  mx-auto gap-4">
      {getCourse().map((course) => {
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
