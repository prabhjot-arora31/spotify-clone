import React, { useState } from "react";
import Top from "./Top/Top";
import Bottom from "./Bottom/Bottom";

function Left(props) {
  return (
    <div className={props.hideLeft}>
      <Top
        sethideLeft={props.sethideLeft}
        sethideMain={props.sethideMain}
        cross={props.cross}
        setcross={props.setcross}
        sethideSearch={props.sethideSearch}
      />
      <Bottom />
    </div>
  );
}

export default Left;
