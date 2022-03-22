import React from "react";
import Grid from "@mui/material/Grid";

import image1 from "../../Images/svg-4.svg";
import image2 from "../../Images/svg-5.svg";
import image3 from "../../Images/svg-6.svg";

import "./ThirdInfoBlock.jsx.styles.css";

function ThirdInfoBlock() {
    return (
        <div
            style={{
                color: "white",
                height: "100vh",
                textAlign: "center",
            }}
            className="services-container"
        >
            <h1
                style={{
                    display: "inline-block",
                    margin: "10% auto 50px",
                    fontSize: "3rem",
                }}
                className="page-heading"
            >
                Our Services
            </h1>
            <Grid
                container
                spacing={window.innerWidth > 900 ? 6 : 0}
                alignItems="center"
                justifyContent="center"
                style={{ width: "60%", margin: "auto" }}
                className="services-grid"
            >
                <Grid item xs={12} md={4}>
                    <div
                        style={{
                            backgroundColor: "white",
                            padding: "15% 0 2%",
                            textAlign: "center",
                            borderRadius: "2rem",
                        }}
                        className="service-block"
                    >
                        <img
                            src={image1}
                            alt="first"
                            style={{
                                width: "50%",
                                height: "50%",
                                margin: "auto",
                                display: "block",
                            }}
                        />
                        <h3
                            style={{
                                color: "black",
                            }}
                        >
                            Reduce Expenses
                        </h3>
                        <p style={{ color: "black", fontSize: "1.1rem" }}>
                            We help reduce our fees and
                            <br /> increase your overal revenue
                        </p>
                    </div>
                </Grid>
                <Grid item xs={12} md={4}>
                    <div
                        style={{
                            backgroundColor: "white",
                            padding: "15% 0 2%",
                            textAlign: "center",
                            borderRadius: "2rem",
                        }}
                        className="service-block"
                    >
                        <img
                            src={image2}
                            alt="first"
                            style={{
                                width: "50%",
                                height: "50%",
                                margin: "15px auto",
                                display: "block",
                            }}
                        />
                        <h3
                            style={{
                                color: "black",
                            }}
                        >
                            Virtual Offices
                        </h3>
                        <p style={{ color: "black", fontSize: "1.1rem" }}>
                            You can acces our platform
                            <br /> online anywhere in the world
                        </p>
                    </div>
                </Grid>
                <Grid item xs={12} md={4}>
                    <div
                        style={{
                            backgroundColor: "white",
                            padding: "15% 0 2%",
                            textAlign: "center",
                            borderRadius: "2rem",
                        }}
                        className="last-service-block"
                    >
                        <img
                            src={image3}
                            alt="first"
                            style={{
                                width: "50%",
                                height: "50%",
                                margin: "auto",
                                display: "block",
                            }}
                        />
                        <h3
                            style={{
                                color: "black",
                            }}
                        >
                            Premium Benefits
                        </h3>
                        <p style={{ color: "black", fontSize: "1.1rem" }}>
                            Unlock our special membership
                            <br /> card that returns 5% cash back
                        </p>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default ThirdInfoBlock;
