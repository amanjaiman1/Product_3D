import React from "react";
import construct from "../../assets/image/coming.png";
import { Link } from "react-router-dom";

const Develop = (props) => {
  return (
    <div
      className="container"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        backgroundColor: "#dbeafd",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", margin: "20px 0" }}>
        Product-3D Development
      </h1>
      <p style={{ fontSize: "1.5rem", marginBottom: 0 }}>
        This page is currently under development. Please check back later.
      </p>
      <div style={{ marginTop: "20px" }}>
        <img src={construct} alt="Under Development" style={{ maxWidth: "400px" }} />
        <Link to="/">
          <button
            style={{
              background: "blue",
              color: "white",
              padding: "10px 20px",
              fontSize: "1.2rem",
              borderRadius: "5px",
              marginTop: "10px",
              cursor: "pointer",
            }}
          >
            Go Back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Develop;
