import React from "react";
import Button from "@mui/material/Button";

import video from "../../Video/video.mp4";

import "./Hero.styles.css";

function Hero() {
    return (
        <div style={{ overflow: "hidden" }}>
            <video
                autoPlay
                loop
                muted
                style={{
                    height: "100vh",
                    width: "100vw",
                    objectFit: "cover",
                    position: "absolute",
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                    zIndex: -1,
                }}
            >
                <source src={video} type="video/mp4" />
            </video>
            <h1
                style={{
                    color: "white",
                    fontWeight: "bold",
                    textAlign: "center",
                    marginTop: "30vh",
                    fontSize:
                        "calc(35px + (50 - 35) * ((100vw - 300px) / (1600 - 300)))",
                }}
            >
                Virtual Banking Made Easy
            </h1>
            <h3
                style={{
                    color: "white",
                    fontWeight: "normal",
                    textAlign: "center",
                    fontSize: "1.5rem",
                    width: "30%",
                    margin: "auto",
                }}
                className="sub-heading"
            >
                Sign up for a new account today and receive $250 in credit
                towards your next payment
            </h3>
            <Button
                variant="contained"
                style={{
                    backgroundColor: "#01bf71",
                    margin: "50px auto",
                    display: "block",
                    color: "black",
                    padding: "15px 25px",
                    borderRadius: "50px",
                }}
            >
                Get Started
            </Button>
        </div>
    );
}

export default Hero;
