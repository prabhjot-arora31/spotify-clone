import React from "react";
import "./Top.css";
import { Link } from "react-router-dom";
function Top(props) {
  return (
    <div>
      <div className="home">
        <div
          className="row"
          onClick={() => {
            props.setcross("cross");
            props.sethideLeft("left");
            props.sethideMain("right");
          }}
        >
          <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
            <i class="fa-solid fa-house"></i>
            Home
          </Link>
          <div
            className={props.cross}
            onClick={() => {
              props.sethideMain("right");
              props.sethideLeft("left");
              props.setcross("cross");
              props.sethideSearch("search");
            }}
          >
            <i class="fa-solid fa-xmark"></i>
          </div>
        </div>
        <div
          className="row"
          onClick={() => {
            props.setcross("cross");
            props.sethideLeft("left");
            props.sethideSearch("search");
          }}
        >
          <Link to="search" style={{ textDecoration: "none", color: "#fff" }}>
            <i class="fa-solid fa-magnifying-glass" id="search"></i>
            Search
          </Link>
        </div>
      </div>
      <div className="library"></div>
    </div>
  );
}

export default Top;
