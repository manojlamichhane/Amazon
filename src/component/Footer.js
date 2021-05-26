import React from "react";
import Button from "@material-ui/core/Button";

function Footer(props) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <Button
        style={{
          backgroundColor: "#efbd41",
          borderWidth: "1px",
          borderColor: "black",
          borderStyle: "solid",
          width: "30%",
          height: "30px",
          marginTop: "40px",
          marginBottom: "20px",
        }}
      >
        Sign in to see personalized recommendations
      </Button>

      <Button
        onClick={scrollToTop}
        style={{
          backgroundColor: "#485769",
          width: "100%",
          height: "50px",
        }}
      >
        <p style={{ color: "white" }}>Back to top</p>
      </Button>
    </div>
  );
}

export default Footer;
