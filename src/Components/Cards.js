import React, { useEffect, useState } from "react";
import Card from "./Card";

function Cards({ courses, category }) {
  const [like, setLike] = useState([]);
  const [allCourses, setAllCourses] = useState([]);

  console.log(like);
  useEffect(()=>{
    let allCourses = [];
    if (category === "All") {
    let temp = [];
    Object.values(courses).forEach((courseCategory) => {
      courseCategory.forEach((courseInfo) => {
        temp.push(courseInfo);
        allCourses = [...temp];
      });
    });
  } else {
    let temp = [];
    if (courses[category]) {
      temp = [...courses[category]];
    }
    allCourses = [...temp];
  }
  setAllCourses([...allCourses]);
},[courses,category]);



  return (
    <>
      <div
        className=" w-[1080px] mx-auto  flex flex-wrap
       content-center "
      >
        {allCourses.map((course) => {
          return (
            <Card
              eachCourse={course}
              key={course.id}
              like={like}
              setLike={setLike}
            />
          );
        })}
      </div>
    </>
  );
}

export default Cards;
