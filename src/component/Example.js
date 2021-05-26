import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Example = (props) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
  };
  return (
    <Carousel responsive={responsive}>
      <div style={{ width: "1360px", height: "650px" }}>
        <img
          alt="im1"
          style={{ width: "100%", height: "100%" }}
          src={
            "https://theannapurnaexpress.com/uploads/media/Bhojuimage_20200903112214.png"
          }
        />
      </div>
      <div style={{ width: "1360px", height: "650px" }}>
        <img
          alt="im2"
          style={{ width: "100%", height: "100%" }}
          src={
            "https://theannapurnaexpress.com/uploads/media/Bhojuimage_20200903112214.png"
          }
        />
      </div>
      <div style={{ width: "1360px", height: "650px" }}>
        <img
          alt="im3"
          style={{ width: "100%", height: "100%" }}
          src={
            "https://theannapurnaexpress.com/uploads/media/Bhojuimage_20200903112214.png"
          }
        />
      </div>
      <div style={{ width: "1360px", height: "650px" }}>
        <img
          alt="im4"
          style={{ width: "100%", height: "100%" }}
          src={
            "https://theannapurnaexpress.com/uploads/media/Bhojuimage_20200903112214.png"
          }
        />
      </div>
    </Carousel>
  );
};

export default Example;
