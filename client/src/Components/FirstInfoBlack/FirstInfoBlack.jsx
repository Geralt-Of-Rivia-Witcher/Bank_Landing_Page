import React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

import image from "../../Images/svg-1.svg";

import "./FirstInfoBlack.styles.css";

function FirstInfoBlack() {
    return (
        <div
            style={{
                marginTop: "40vh",
                color: "white",
                height: "100vh",
                display: "flex",
                justifyContent: "center",
            }}
        >
            <Grid
                container
                style={{ width: "60%", margin: "auto" }}
                className="main-content-container first-block-container"
            >
                <Grid item xs={12} md={6}>
                    <h3 style={{ color: "#01BF83" }}>PREMIUM BANK</h3>
                    <h1
                        style={{
                            color: "white",
                            fontSize: "3.5rem",
                            margin: "0",
                        }}
                        className="page-heading"
                    >
                        Unlimited Transactions with zero fees
                    </h1>
                    <p style={{ fontSize: "1.3rem" }}>
                        Get access to our exclusive app that allows you to send
                        unlimited transactions without getting charged any fees.
                    </p>
                    <Button
                        variant="contained"
                        style={{
                            backgroundColor: "#01bf71",
                            display: "block",
                            color: "black",
                            padding: "15px 25px",
                            borderRadius: "50px",
                        }}
                    >
                        Get Started
                    </Button>
                </Grid>
                <Grid item xs={12} md={6} className="page-image">
                    <img
                        src={image}
                        alt="car"
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "contain",
                        }}
                    />
                </Grid>
            </Grid>
        </div>
    );
}

export default FirstInfoBlack;
