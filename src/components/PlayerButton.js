import React from "react";
import "./PlayerButton.css";
function PlayerButton() {
  return (
    <div style={{ position: "absolute" }}>
      <div
        className="player"
        style={{
          backgroundColor: "green",
          width: "30px",
          height: "30px",
          padding: "0.45rem",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKLu-ifbtesvS_h-47wIiXcgNAxYow8M_M6A&usqp=CAU"
          alt=""
          srcset=""
        />
      </div>
    </div>
  );
}

export default PlayerButton;
