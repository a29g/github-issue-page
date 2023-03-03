import React, { useCallback, useEffect, useState } from "react";
import Issue from "../Issue/Issue";
import IsssueListHeader from "../IssueListHeader/IsssueListHeader";
import "./IssueList.css";
import InfiniteScroll from "react-infinite-scroll-component";

const IssueList = () => {
  const [issues, setIssues] = useState([]);
  const [page, setPage] = useState(1);
  const [type, setType] = useState("open");
  const [loading, setloading] = useState(true);

  const getdata = useCallback(async () => {
    const url = `https://api.github.com/repos/facebook/react/issues?page=${page}&state=${type}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.length < 30) setloading(false);
      setIssues((oldData) => [...oldData, ...data]);
      setPage(page + 1);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }, [type, page]);

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
    <InfiniteScroll
      dataLength={issues}
      next={getdata}
      hasMore={loading}
      loader={
        <div className="list-width">
          <h4>Loading...</h4>
        </div>
      }
    >
      <div className="issue-list">
        <IsssueListHeader type={type} handleClick={onClickHandler} />
        {issues.map((issue) => {
          return <Issue key={issue.id} issueData={issue} />;
        })}
      </div>
    </InfiniteScroll>
  );
};

export default IssueList;
