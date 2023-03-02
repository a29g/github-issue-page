import React, { useCallback, useEffect, useState } from "react";
import Issue from "../Issue/Issue";
import IsssueListHeader from "../IssueListHeader/IsssueListHeader";
import "./IssueList.css";

const IssueList = () => {
  const [issues, setIssues] = useState([]);
  const [page, setPage] = useState(1);
  const [type, setType] = useState("open");

  const getdata = useCallback(() => {
    const url = `https://api.github.com/repos/facebook/react/issues?page=${page}&state=${type}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setIssues(data);
        setPage(page + 1);
      });
  }, [page, type]);

  useEffect(() => {
    getdata();
  }, [type]);

  function onClickHandler(e) {
    if (e.target.value === "type") {
      return;
    }

    setType(e.target.getAttribute("name"));
    setIssues([]);
    setPage(1);
  }

  return (
    <div className="issue-list">
      <IsssueListHeader type={type} handleClick={onClickHandler} />
      {issues.map((issue) => {
        return <Issue key={issue.id} issueData={issue} />;
      })}
    </div>
  );
};

export default IssueList;
