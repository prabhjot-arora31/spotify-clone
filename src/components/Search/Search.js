import React from "react";
import "./search.css";
import PlayerButton from "../PlayerButton";
function Search(props) {
  return (
    <div
      className={props.hideSearch}
      // style={{
      //   flex: "1",
      //   height: "80vh",
      //   overflowY: "auto",
      //   borderRadius: "6px",
      //   margin: "5px",
      //   width: "100%",
      //   overflowX: "hidden",

      //   padding: "19px 22px",
      //   background: "linear-gradient(to bottom,#1F1F1F,#121212)",
      //   //   "linear-gradient(to bottom,red,green)",
      //   minWidth: "",
      //   // backgroundColor: "red",
      // }}
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
            <input type="text" placeholder="Enter Music...." />
          </div>
        </div>
        <div
          className="hamburger"
          style={{ backgroundColor: "transparent" }}
          onClick={() => {
            // props.sethideMain("right2");
            // props.sethideLeft("left2");
            // props.setcross("cross2");
            props.sethideSearch("search2");
            props.sethideLeft("left2");
            // setcross={setcross}
            props.setcross("cross2");
          }}
        >
          <i class="fa-solid fa-bars"></i>
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
      <div className="categories">
        <div style={{ backgroundColor: "#006450" }}>
          Podcasts
          <div className="imgcontainer">
            <img
              src="https://i.scdn.co/image/ab6765630000ba8a81f07e1ead0317ee3c285bfa"
              alt=""
            />
          </div>
        </div>
        <div style={{ backgroundColor: "#7358FF" }}>
          Live Events
          <div className="imgcontainer">
            <img
              src="https://concerts.spotifycdn.com/images/live-events_category-image.jpg"
              alt=""
            />
          </div>
        </div>
        <div style={{ backgroundColor: "#1E3264" }}>
          Made For You
          <div className="imgcontainer">
            <img
              src="https://t.scdn.co/images/ea364e99656e46a096ea1df50f581efe"
              alt=""
            />
          </div>
        </div>
        <div style={{ backgroundColor: "#E8115B" }}>
          New Releases
          <div className="imgcontainer">
            <img
              src="https://i.scdn.co/image/ab67706f000000027ea4d505212b9de1f72c5112"
              alt=""
            />
          </div>
        </div>{" "}
        <div style={{ backgroundColor: "#E91429" }}>
          Hindi
          <div className="imgcontainer">
            <img
              src="https://i.scdn.co/image/ab67fb8200005cafd6daeecb3d85e27295be6557"
              alt=""
            />
          </div>
        </div>{" "}
        <div style={{ backgroundColor: "#B02897" }}>
          Punjabi
          <div className="imgcontainer">
            <img
              src="https://i.scdn.co/image/ab67706f00000002461fda205f5f952eff8bae70"
              alt=""
            />
          </div>
        </div>{" "}
        <div style={{ backgroundColor: "#A56752" }}>
          Tamil
          <div className="imgcontainer">
            <img
              src="https://i.scdn.co/image/ab67fb8200005caf4b3beede484da74b233fa299"
              alt=""
            />
          </div>
        </div>{" "}
        <div style={{ backgroundColor: "#D84000" }}>
          Telugu
          <div className="imgcontainer">
            <img
              src="https://i.scdn.co/image/ab67fb8200005caf2c7a9278e6df9a35f3865cae"
              alt=""
            />
          </div>
        </div>{" "}
      </div>
    </div>
  );
}

export default Search;
