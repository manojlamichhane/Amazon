import React from "react";

function Tab(props) {
  return (
    <div>
      <p
        style={{
          margin: "0px",
          fontSize: "12px",
          color: "white",
        }}
      >
        {props.title}
      </p>
      <p
        style={{
          margin: "0px",
          fontSize: "16px",
          fontWeight: "bold",
          color: "white",
        }}
      >
        {props.subtitle}
      </p>
    </div>
  );
}

export default Tab;
