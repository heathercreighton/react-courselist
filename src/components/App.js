import React from "react";
import "../styles/style.css";
import CourseList from './CourseList';

export default function App() {
const courses = [
  {
  title: "Introduction to JavaScript",
  description: "Learn to write client and server applications in JavaScript.", 
  instructors: ["Brendan Eich", "Douglas Crockford"],
  topics: ["variables", "expressions", "control flow", "functions"]
  },
  {
  title: "Introduction to Go",
  description: "Learn to write client and server applications in Go.", 
  instructors: ["Heather Creighton", "Erin Cook"],
  topics: ["variables", "expressions", "control flow", "functions"]
  },
  {
  title: "Introduction to Python",
  description: "Learn to write client and server applications in Python", 
  instructors: ["Elizabeth Harris", "Erin Cook"],
  topics: ["variables", "expressions", "control flow", "functions"]
  },
  {
  title: "Introduction to Ruby on Rails",
  description: "Learn to write client and server applications in Ruby using the framework Rails.", 
  instructors: ["Heather Creighton", "Lori Culberson"],
  topics: ["variables", "expressions", "control flow", "functions"]
  }
]

// console.log(courses)
  return (

    <div>
    <h2> Welcome To Our Course Catalog</h2>
      <CourseList courses={courses} />
    </div>
  );
}
