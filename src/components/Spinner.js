import React from "react";
import img from "../images/forkfood.gif";

export default function Spinner() {
  return (
    <div>
      <img
        className="text-center"
        src={img}
        alt="loading...."
        style={{
          width: "500px",

          paddingTop: "50px"
        }}
      />
    </div>
  );
}
