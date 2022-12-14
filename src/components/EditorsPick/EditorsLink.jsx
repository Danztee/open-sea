import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./EditorsLink.module.css";

const filterDetails = [
  {
    link: "art",
    to: "/",
  },
  {
    link: "music",
    to: "/music",
  },
  {
    link: "video",
    to: "/video",
  },
  {
    link: "cartoon",
    to: "/cartoon",
  },
  {
    link: "craft",
    to: "/craft",
  },
  {
    link: "token",
    to: "/token",
  },
];

const EditorsLink = () => {
  return (
    <div className="mt-4" id={classes.editorsLink}>
      {filterDetails.map((filter, index) => (
        <NavLink
          to={filter.to}
          className={({ isActive }) => (isActive ? classes.activeLink : "")}
          key={index}
          id={classes.link}
        >
          {filter.link}
        </NavLink>
      ))}
    </div>
  );
};

export default EditorsLink;
