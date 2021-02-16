import React from "react";
import "./index.css";

function TestInfo(props) {
  return (
    <div className="testInfo">
      <h2 className="testInfo__title">the task</h2>
      <p className="testInfo__paragraph">
        In the test you will be requested to look for a product. The goal is to
        use the <strong>Menu</strong> and <strong>click the Category</strong>{" "}
        you expect to find the product in.
      </p>
      <p className="testInfo__paragraph">
        You will have to do this a couple of times, the menu will change during
        the different tasks. If you click the category you will continue to the
        next task.
      </p>
      <a
        href="javascript:void(0);"
        className="testInfo__cta"
        onClick={props.onClick}
      >
        Let's Start {"(:"}
      </a>
    </div>
  );
}

export default TestInfo;
