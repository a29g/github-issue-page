import React from "react";
import { TabsIcons } from "../../Utils/IconList";
import "./Header.css";

const navTabs = [
  {
    icon: "code",
    name: "Code",
    count: 0,
  },
  {
    icon: "issues",
    name: "Issues",
    count: 928,
  },
  {
    icon: "pullRequests",
    name: "Pull requests",
    count: 257,
  },
  {
    icon: "actions",
    name: "Actions",
    count: 0,
  },
  {
    icon: "projects",
    name: "Projects",
    count: 0,
  },
  {
    icon: "wiki",
    name: "Wiki",
    count: 0,
  },
  {
    icon: "security",
    name: "Security",
    count: 0,
  },
  {
    icon: "insights",
    name: "Insights",
    count: 0,
  },
];

const Header = () => {
  return (
    <>
      <div className="headerContainer">
        <div className="firstLine">
          <div className="repoNameContainer">
            <TabsIcons type="repo" />
            <span className="repoName">facebook</span>
            <span> / </span>
            <span className="projectName">react</span>
            <span className="repoType">public</span>
          </div>
          <ul>
            <li>
              <TabsIcons type="notifications" />
              <span>Notifications</span>
            </li>
            <li>
              <span>
                <TabsIcons type="star" />
                <span>Star</span>
              </span>
              <span> | </span>
              <span>203k</span>
            </li>
            <li>
              <span>
                <TabsIcons type="fork" />
                <span>Fork</span>
              </span>
              <span> | </span>
              <span>42.2k</span>
            </li>
          </ul>
        </div>
        <ul className="secondLine">
          {navTabs.map((val, index) => (
            <li key={index}>
              <TabsIcons type={val.icon} />
              <span>{val.name}</span>
              {val.count > 0 && <span>{val.count}</span>}
              {index === 1 && <hr />}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Header;
