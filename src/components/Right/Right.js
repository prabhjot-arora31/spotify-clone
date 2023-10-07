import React, { useState } from "react";
import "./Right.css";
import PlayerButton from "../PlayerButton";
function Right(props) {
  return (
    <div
      className={props.hideMain}
      // style={{
      //   flex: "1",
      //   height: "80vh",
      //   overflowY: "auto",
      //   borderRadius: "6px",
      //   margin: "5px",
      //   width: "100%",
      //   padding: "19px 22px",
      //   overflowX: "hidden",
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
          <div>
            <i class="fa-solid fa-angle-right"></i>
          </div>
          <div
            className="hamburger"
            style={{ backgroundColor: "transparent" }}
            onClick={() => {
              props.sethideMain("right2");
              props.sethideLeft("left2");
              props.setcross("cross2");
            }}
          >
            <i class="fa-solid fa-bars"></i>
          </div>
        </div>
        <div className="options">
          <a href="#" id="ep">
            Explore Premium
          </a>
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
      <h2>Recently played</h2>
      <div className="recent-div">
        <div className="imgcontainer">
          <img
            src="https://i.scdn.co/image/ab67616d00004851fd2e3126a9d286550f9921a2"
            alt=""
          />
        </div>
        <h3 style={{ alignSelf: "flex-start", marginLeft: "0.35rem" }}>
          No Name
        </h3>
        <p
          style={{
            fontSize: "0.77rem",
            opacity: "0.7",
            fontWeight: "500",
            position: "relative",
            left: "-20px",
            top: "-20px",
          }}
        >
          Sidhu Moose Wala
        </p>
      </div>
      {/* mfu */}
      <h2 id="mfu">Made For User</h2>
      <div className="card-container">
        <div className="card">
          <div className="imgcontainer" style={{ position: "relative" }}>
            <PlayerButton />
            <img
              src="https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb920dc1f617550de8388f368e/1/en-GB/default"
              alt=""
            />
          </div>
          <h3 style={{ alignSelf: "flex-start", marginLeft: "0.35rem" }}>
            Daily Mix 1
          </h3>
          <p
            style={{
              fontSize: "0.77rem",
              opacity: "0.7",
              fontWeight: "500",
              position: "relative",
              left: "-20px",
              top: "-20px",
            }}
          >
            Imagine Dragons, <br /> Twenty One Pilots,...
          </p>
        </div>
        <div className="card">
          <div className="imgcontainer">
            <img
              src="https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb4bdf6db5203f2a0e44002620/2/en-GB/default"
              alt=""
            />
          </div>
          <h3 style={{ alignSelf: "flex-start", marginLeft: "0.35rem" }}>
            Daily Mix 2
          </h3>
          <p
            style={{
              fontSize: "0.77rem",
              opacity: "0.7",
              fontWeight: "500",
              position: "relative",
              left: "-15px",
              top: "-20px",
            }}
          >
            Wiz Khalifa, Alan <br />
            Walker, Charlie Puth...
          </p>
        </div>
      </div>

      {/* ---------------- */}
      {/* Charts */}
      <h2 id="charts">Charts</h2>
      <div className="card-container">
        <div className="card">
          <div className="imgcontainer">
            <img
              src="https://i.scdn.co/image/ab67706f00000002bf09d065964394aed625933c"
              alt=""
            />
          </div>
          <h3 style={{ alignSelf: "flex-start", marginLeft: "0.35rem" }}>
            Latest Tamil
          </h3>
          <p
            style={{
              fontSize: "0.77rem",
              opacity: "0.7",
              fontWeight: "500",
              position: "relative",
              left: "-11px",
              top: "-20px",
            }}
          >
            New Music From
            <br /> Kollywood, Cover : Leo
          </p>
        </div>
        <div className="card">
          <div className="imgcontainer">
            <img
              src="https://i.scdn.co/image/ab67706f00000002dac6b6b1722528ee7fc14424"
              alt=""
            />
          </div>
          <h3 style={{ alignSelf: "flex-start", marginLeft: "0.35rem" }}>
            Hot Hit Tamils
          </h3>
          <p
            style={{
              fontSize: "0.77rem",
              opacity: "0.7",
              fontWeight: "500",
              position: "relative",
              left: "-23px",
              top: "-20px",
            }}
          >
            Tune into the <br />
            Hottest tracks of...
          </p>
        </div>
        <div className="card">
          <div className="imgcontainer">
            <img
              src="https://i.scdn.co/image/ab67706f00000002975118eef110cf76bc26137d"
              alt=""
            />
          </div>
          <h3 style={{ alignSelf: "flex-start", marginLeft: "0.35rem" }}>
            Hot Hits Hindi
          </h3>
          <p
            style={{
              fontSize: "0.77rem",
              opacity: "0.7",
              fontWeight: "500",
              position: "relative",
              left: "-13px",
              top: "-20px",
            }}
          >
            Hottest Hindi music <br /> served here. Cover -...
          </p>
        </div>
      </div>
      {/* --------------- */}
      {/* Popular artist */}
      <h2 id="pa">Popular Artist</h2>
      {/* ------------- */}
    </div>
  );
}

export default Right;
