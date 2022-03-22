import React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

import image from "../../Images/svg-2.svg";

function SecondInfoBlock() {
    return (
        <div
            style={{
                color: "white",
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                backgroundColor: "white",
            }}
        >
            <Grid
                container
                style={{ width: "60%", margin: "auto" }}
                className="main-content-container"
            >
                <Grid item xs={12} md={6} className="page-image">
                    <img
                        src={image}
                        alt="car"
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "contain",
                        }}
                        className="page-image"
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <h3 style={{ color: "#01BF83" }}>UNLIMITED ACCESS</h3>
                    <h1
                        style={{
                            color: "black",
                            fontSize: "3.5rem",
                            margin: "0",
                        }}
                        className="page-heading"
                    >
                        Login to your account at any time
                    </h1>
                    <p style={{ fontSize: "1.3rem", color: "black" }}>
                        We have covered no matter where you are located. All you
                        need is an internet connection and a phone or computer
                    </p>
                    <Button
                        variant="contained"
                        style={{
                            backgroundColor: "#010101",
                            display: "block",
                            color: "white",
                            padding: "15px 25px",
                            borderRadius: "50px",
                        }}
                    >
                        Learn More
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
}

export default SecondInfoBlock;
