import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Course from "./components/Course";

const App = () => {
  const courses = [
    {
      name: "Half Stack application development",
      id: 1,
      parts: [
        {
          name: "Fundamentals of React",
          exercises: 22,
          id: 1,
        },
        {
          name: "Using props to pass data",
          exercises: 3,
          id: 2,
        },
        {
          name: "State of a component",
          exercises: 23,
          id: 3,
        },
        {
          name: "Redux",
          exercises: 34,
          id: 4,
        },
      ],
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 9,
          id: 1,
        },
        {
          name: "Middlewares",
          exercises: 2,
          id: 2,
        },
      ],
    },
  ];

  const courseList = courses.map((course) => {
    return <Course key={course.id} course={course} />;
  });

  return <div>{courseList}</div>;
};

ReactDOM.render(<App />, document.getElementById("root"));