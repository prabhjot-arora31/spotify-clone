import React from "react";
import "./bottom.css";
function Bottom() {
  return (
    <div className="bottom">
      <div className="row1">
        <div className="first-div">
          <i
            class="fa-brands fa-playstation"
            style={{ marginRight: "1rem" }}
          ></i>
          Your Library
        </div>
        <div className="second-div">
          <i class="fa-solid fa-plus"></i>
          <i class="fa-solid fa-arrow-right" id="arrow"></i>
        </div>
      </div>
      <div className="badge">Playlists</div>
      <div className="row3">
        <i class="fa-solid fa-magnifying-glass"></i>
        <button className="recents">
          Recents
          <i
            class="fa-solid fa-sort-down"
            style={{ fontSize: "1.02rem", position: "relative", top: "-3.5px" }}
          ></i>
        </button>
      </div>
      <div className="row4">
        <img src="https://misc.scdn.co/liked-songs/liked-songs-64.png" alt="" />
        <div className="inner">
          Liked Songs
          <div className="div">
            <svg
              role="img"
              height={16}
              width={16}
              viewBox="0 0 16 16"
              style={{ backgroundColor: "transparent", color: "green" }}
            >
              <path
                fill="#1ed760"
                d="M8.822.797a2.72 2.72 0 0 1 3.847 0l2.534 2.533a2.72 2.72 0 0 1 0 3.848l-3.678 3.678-1.337 4.988-4.486-4.486L1.28 15.78a.75.75 0 0 1-1.06-1.06l4.422-4.422L.156 5.812l4.987-1.337L8.822.797z"
              ></path>
            </svg>
            Playlist{" "}
            <div
              style={{
                width: "3.2px",
                height: "3.2px",
                borderRadius: "50%",
                backgroundColor: "#fff",
                position: "relative",
                bottom: "-2.5px",
              }}
            ></div>{" "}
            Song
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bottom;
