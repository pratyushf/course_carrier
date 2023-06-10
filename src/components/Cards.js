import React, { useState } from 'react';
import Card from './Card';

export default function Cards({ courses , category}) {
  const[likedCourses,setLikedCourses] = useState([]);


  function getCourses() {
    if(category==="All"){
    let allCourses = [];
    Object.values(courses).forEach(array => {
      array.forEach(courseData => {
        allCourses.push(courseData);
      })
    })
    return allCourses;
  }
  else{
    return courses[category]
  }
}

  return (
    <div>
      
      {/* ======================= */}
      <style>
        {`
          .cards-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            background-color: #1e1e2f;
            height :100%
          }
        `}
      </style>
      {/* ======================= */}

      <div className="cards-container">
        {getCourses().map((course) => {

          return <Card key={course.id} 
          course={course} 
          likedCourses = {likedCourses}
          setLikedCourses = {setLikedCourses}
          />;
        })}
      </div>
    </div>
  );
}
