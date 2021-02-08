import React from 'react';
import '../styles/course.css'

function Course(props) {
  console.log(props)
let { title, description, instructors, topics } = props.courses;
const instructorList = instructors.join(", ")
const topicList = topics.join(", ");
  return(
    <div className="course">
      <div className="title">
        <h2>{title}</h2>
      </div>
      <div className="details">
        <p><span className="detail-titles">Description: </span>{description}</p>
        <p><span className="detail-titles">Instructors: </span> {instructorList}</p>
        <p><span className="detail-titles">Topics: </span>{topicList}</p>
      </div>
    </div>
  )

}

export default Course;