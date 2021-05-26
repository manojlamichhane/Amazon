import React from "react";
import CategoryCard from "./CategoryCard";
import Button from "@material-ui/core/Button";

function Categories(props) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "20px",
        backgroundColor: "#eaeded",
      }}
    >
      <CategoryCard
        title="AmazonBasics"
        image="https://media.karousell.com/media/photos/products/2020/8/1/amazon_basics_wireless_vertica_1596297068_b634a70a_progressive.jpg"
        link="https://www.google.com/"
      />
      <CategoryCard
        title="Computer & Accesories"
        image="https://eshoppingnepal.com/uploads/products/product1610427472.jpeg"
        link="https://eshoppingnepal.com/category/computer-accessories"
      />
      <CategoryCard
        title="Beauty picks"
        image="https://cdn.cliqueinc.com/posts/281511/best-holy-grail-makeup-products-281511-1589389394534-promo.700x0c.jpg"
        link="https://www.whowhatwear.com/best-holy-grail-makeup-products"
      />
      <div style={{ backgroundColor: "#eaeded", width: "280px" }}>
        <div
          style={{
            padding: "20px",
            backgroundColor: "white",
            height: "100px",
          }}
        >
          <p style={{ fontSize: "20px", margin: "0px" }}>
            Sign in for the best experience
          </p>
          <Button
            style={{
              marginTop: "10px",
              marginBottom: "10px",
              width: "100%",
              backgroundColor: "#f2cd70",
              borderWidth: "1px",
              borderColor: "black",
              borderStyle: "solid",
              height: "30px",
            }}
          >
            Sign in securely
          </Button>
        </div>
        <div
          style={{
            width: "280px",
            height: "340px",
            backgroundImage: `url("https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZHVjdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80")`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div
            style={{
              padding: "15px",
              fontWeight: "bold",
              fontSize: "18px",
              width: "140px",
            }}
          >
            We ship over 45 million products around the world
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
