import React from 'react'
import Course from './Course'
import '../styles/courselist.css'

function CourseList(props){
  const { courses } = props

  for (let c of courses){
    console.log(c)
  }

  return(
    <>
    <div className="flex-container">
      <div className="course-width"><Course courses={courses[0]} /></div>
      <div className="course-width"><Course courses={courses[1]} /></div>
    </div>
    <div className="flex-container">
      <div className="course-width"><Course courses={courses[2]} /></div>
      <div className="course-width"><Course courses={courses[3]} /></div>
     </div>
    </>
  )
}


export default CourseList;