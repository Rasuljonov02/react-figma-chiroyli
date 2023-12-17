import React from "react";
import odsm from "../../img/ByeWind.png";

function Rightt() {

  return (
    <div className=" ">

      <span className="flex gap-2 items-center">
        <img src={odsm} className="w-[30px] " alt="" />
        <p>ByeWind</p>
      </span>
      <div className="flex  flex-col gap-3">
        <span className="flex gap-3 mt-4 items-center">
          <h2>Favorites</h2>
          <h2>Recently</h2>
        </span>
        <p className="pl-3">Overview</p>
        <p className="pl-3">Projects</p>
      </div>
    </div>
  );
}

export default Rightt;
