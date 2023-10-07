import React from "react";
import "./search.css";
import PlayerButton from "../PlayerButton";
function Search() {
  return (
    <div
      style={{
        flex: "1",
        height: "80vh",
        overflowY: "auto",
        borderRadius: "6px",
        margin: "5px",
        width: "100%",
        overflowX: "hidden",

        padding: "19px 22px",
        background: "linear-gradient(to bottom,#1F1F1F,#121212)",
        //   "linear-gradient(to bottom,red,green)",
        minWidth: "",
        // backgroundColor: "red",
      }}
    >
      <header>
        <div className="angle">
          <div style={{ marginLeft: "0.8rem" }}>
            <i class="fa-solid fa-angle-left"></i>
          </div>
          <div id="angle-right">
            <i class="fa-solid fa-angle-right"></i>
          </div>
        </div>
        <div className="search-bar">
          <div>
            <i class="fa-solid fa-magnifying-glass" id="search"></i>
            <input type="text" placeholder="What do you want to listen to?" />
          </div>
        </div>
        <div className="options">
          <a href="#" id="ia">
            <i class="fa-regular fa-circle-down"></i> Install App
          </a>
          <a href="#" id="noti">
            <i class="fa-solid fa-bell"></i>
          </a>
          <a href="#" id="person">
            <i class="fa-regular fa-user"></i>
          </a>
        </div>
      </header>
      <h2>Browse All</h2>
    </div>
  );
}

export default Search;
