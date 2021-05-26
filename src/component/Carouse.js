import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Carouse = (props) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
  };
  return (
    <Carousel responsive={responsive} infinite={true}>
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
            "https://images.ctfassets.net/e595vagizapi/3o5BbVKETr0U3ufoJeK4wU/fd95920c381ed81ccb99491db8495e7e/ecommerce-business-blog-1.jpg"
          }
        />
      </div>
      <div style={{ width: "1360px", height: "650px" }}>
        <img
          alt="im3"
          style={{ width: "100%", height: "100%" }}
          src={
            "https://cdn.searchenginejournal.com/wp-content/uploads/2018/04/e-commerce-store-1520x800.png"
          }
        />
      </div>
      <div style={{ width: "1360px", height: "650px" }}>
        <img
          alt="im4"
          style={{ width: "100%", height: "100%" }}
          src={
            "https://www.softwaresuggest.com/blog/wp-content/uploads/2018/10/ecommerce-FB.png"
          }
        />
      </div>
    </Carousel>
  );
};

export default Carouse;
