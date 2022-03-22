import React from "react";

import "./Footer.styles.css";

function Footer() {
    return (
        <div
            style={{
                textAlign: "center",
                color: "white",
                borderTop: "2px solid white",
                padding: "50px",
            }}
        >
            <h5
                style={{
                    display: "inline-block",
                    fontSize: "1.2rem",
                    margin: "15px 40px",
                    fontWeight: "normal",
                }}
            >
                About
            </h5>
            <h5
                style={{
                    display: "inline-block",
                    fontSize: "1.2rem",
                    margin: "15px  40px",
                    fontWeight: "normal",
                }}
            >
                Pricing
            </h5>
            <h5
                style={{
                    display: "inline-block",
                    fontSize: "1.2rem",
                    margin: "15px 40px",
                    fontWeight: "normal",
                }}
            >
                Terms of Use
            </h5>
            <h5
                style={{
                    display: "inline-block",
                    fontSize: "1.2rem",
                    margin: "15px 40px",
                    fontWeight: "normal",
                }}
            >
                Privacy Policy
            </h5>
            <h5
                style={{
                    display: "inline-block",
                    fontSize: "1.2rem",
                    margin: "15px 40px",
                    fontWeight: "normal",
                }}
            >
                Careers
            </h5>
            <h5
                style={{
                    display: "inline-block",
                    fontSize: "1.2rem",
                    margin: "15px 40px",
                    fontWeight: "normal",
                }}
            >
                Blog
            </h5>
            <h5
                style={{
                    display: "inline-block",
                    fontSize: "1.2rem",
                    margin: "15px 40px",
                    fontWeight: "normal",
                }}
            >
                Contact Us
            </h5>

            <h2 style={{ margin: "60px auto 60px", fontSize: "2rem" }}>
                My Bank
            </h2>
            <h3 style={{ fontWeight: "normal", marginBottom: "50px" }}>
                © For: Salt.pe.
                <br />
                Coded by{" "}
                <a
                    href="https://www.siddhantkumarsingh.me/"
                    style={{ color: "white" }}
                    target="_blank"
                    rel="noreferrer"
                >
                    Siddhant Kumar Singh
                </a>
            </h3>
        </div>
    );
}

export default Footer;
