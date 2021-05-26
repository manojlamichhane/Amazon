import React from "react";

function CategoryCard(props) {
  return (
    <div style={{ padding: "20px", backgroundColor: "white", width: "280px" }}>
      <p style={{ margin: "0px", fontSize: "20px", fontWeight: "bold" }}>
        {props.title}
      </p>
      <img
        alt="cardimage"
        style={{
          marginTop: "20px",
          width: "270px",
          height: "350px",
          marginBottom: "30px",
        }}
        src={props.image}
      />
      <a style={{ marginBottom: "20px" }} href={props.link}>
        More
      </a>
    </div>
  );
}

export default CategoryCard;
