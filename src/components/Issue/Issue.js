import React from "react";
import TimeConverter from "../../Utils/TimeConverter";
import Label from "../Label/Label";
import "./Issue.css";
import IconList from "../../Utils/IconList";

const Issue = ({ issueData }) => {
  const time =
    issueData.state === "open"
      ? TimeConverter(new Date(issueData.created_at))
      : TimeConverter(new Date(issueData.closed_at));
  return (
    <div className="issue">
      <div className="issue-icon">
        <IconList type={issueData.state} />
      </div>
      <div className="issue-details">
        <span className="issue-title">{issueData.title}</span>
        <span className="issue-labels">
          {issueData.labels.map((label) => (
            <Label key={label.id} label={label} />
          ))}
        </span>
      </div>
      <div className="issue-meta-data">
        #{issueData.number} {issueData.state === "open" ? "opened" : "closed"}{" "}
        {time} by{" "}
        <a className="issue-user" href={issueData.user.url}>
          {issueData.user.login}
        </a>
      </div>
      <div className="issue-other-details">
        <div className="issue-details-col">
          {issueData.pull_request && (
            <a
              className="issue-extra-link"
              href={issueData.pull_request.html_url}
            >
              <IconList type={"pull-request"} />1
            </a>
          )}
        </div>
        <div className="issue-details-col">
          {issueData.assignees.length > 0 &&
            issueData.assignees.map((assignee) => (
              <a
                className="issue-extra-link"
                key={assignee.id}
                href={assignee.html_url}
              >
                <img
                  className="issue-assignee-img"
                  src={assignee.avatar_url}
                  alt={assignee.login}
                />
              </a>
            ))}
        </div>
        <div className="issue-details-col">
          {issueData.comments > 0 && (
            <a className="issue-extra-link" href={issueData.comments_url}>
              <IconList type="comment" /> {issueData.comments}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Issue;
