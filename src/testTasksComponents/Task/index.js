import React from "react";
import "./index.css";

function Task(props) {
  return (
    <div className="task taskComponentContainer">
      <h2 className="task__title">{props.taskTitle}</h2>
      <a
        href="javascript:void(0);"
        className="task__cta"
        onClick={props.onClick}
      >
        start now
      </a>
    </div>
  );
}

export default Task;
