import React from "react";
import IconList from "../../Utils/IconList";

const options = [
  "Author",
  "Label",
  "Projects",
  "Milestones",
  "Assignee",
  "Sort",
];
const IsssueListHeader = ({ type, handleClick }) => {
  return (
    <div className="issue-list-header">
      <div className="count">
        <div
          name="open"
          onClick={handleClick}
          className={`issues-count ${type === "closed" && "faded"}`}
        >
          <span name="open" className="icon">
            <IconList fill="black" type="open" />
          </span>
          <span name="open">928 Open</span>
        </div>
        <div
          name="closed"
          onClick={handleClick}
          className={`issues-count ${type === "open" && "faded"}`}
        >
          <span name="closed" className="icon">
            <IconList type="check" />
          </span>
          <span name="closed">11,143 Closed</span>
        </div>
      </div>
      <div className="options">
        {options.map((option) => (
          <div key={option} className="d-flex">
            <span>{option}</span>
            <span className="icon">
              <IconList type="down" />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IsssueListHeader;
