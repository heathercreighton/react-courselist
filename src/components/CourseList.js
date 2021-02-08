import React from 'react'
import Course from './Course'
import '../styles/courselist.css'

function CourseList(props){
  const { courses } = props
 console.log("courses:", courses)
  const courseCatalog = courses.map((course) => {
    return (
      <div className="flex-container">
        <div className="course-width"><Course course={course} /></div>
      </div>
    )
  });

  return(
    <div>{courseCatalog}</div>
  );
  
}


export default CourseList;