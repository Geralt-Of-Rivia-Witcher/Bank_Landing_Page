import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import axios from "axios";

import "./ConversionBlock.styles.css";

function ConversionBlock() {
    const backendUrl =
        process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";
    const [amount, setAmount] = useState("");
    const [from, setFrom] = useState("default");
    const [to, setTo] = useState("default");
    const [convertedAmount, setConvertedAmount] = useState("");

    function convert() {
        axios
            .get(`${backendUrl}/convert?from=${from}&to=${to}`)
            .then((response) => {
                var curr = "";
                for (var key in response.data.data.results) {
                    curr = key;
                }
                setConvertedAmount(
                    amount * response.data.data.results[curr].val
                );
            })
            .catch();
    }

    return (
        <div
            style={{
                color: "white",
                height: "100vh",
                textAlign: "center",
                backgroundColor: "white",
            }}
        >
            <h1
                style={{
                    display: "inline-block",
                    margin: "10% auto 50px",
                    fontSize: "3rem",
                    color: "black",
                }}
                className="page-heading"
            >
                Currency Converter
            </h1>
            <Grid
                container
                spacing={window.innerWidth > 770 ? 2 : 0}
                alignItems="center"
                justifyContent="center"
                style={{ width: "60%", margin: "auto" }}
                className="main-content-container"
            >
                <Grid item xs={12} md={4} style={{ textAlign: "left" }}>
                    <h3 style={{ color: "black" }}>Amount</h3>
                    <TextField
                        fullWidth
                        type="number"
                        value={amount}
                        required
                        placeholder="Enter amount"
                        onChange={(event) => {
                            setAmount(event.target.value);
                        }}
                    />
                </Grid>
                <Grid item xs={12} md={4} style={{ textAlign: "left" }}>
                    <h3 style={{ color: "black" }}>From</h3>
                    <Select
                        style={{ width: "100%", color: "black" }}
                        value={from}
                        onChange={(event) => {
                            setFrom(event.target.value);
                        }}
                    >
                        <MenuItem value="default">
                            <em>Select Source Currency</em>
                        </MenuItem>
                        <MenuItem value="AUD">AUD</MenuItem>
                        <MenuItem value="CNY">CNY</MenuItem>
                        <MenuItem value="EUR">EUR</MenuItem>
                        <MenuItem value="INR">INR</MenuItem>
                        <MenuItem value="JPY">JPY</MenuItem>
                        <MenuItem value="NZD">NZD</MenuItem>
                        <MenuItem value="RSD">RSD</MenuItem>
                        <MenuItem value="USD">USD</MenuItem>
                    </Select>
                </Grid>

                <Grid item xs={12} md={4} style={{ textAlign: "left" }}>
                    <div>
                        <h3 style={{ color: "black" }}>To</h3>
                        <Select
                            defaultValue="default"
                            style={{ width: "100%", color: "black" }}
                            value={to}
                            onChange={(event) => {
                                setTo(event.target.value);
                            }}
                        >
                            <MenuItem value="default">
                                <em>Select Target Currency</em>
                            </MenuItem>
                            <MenuItem value="AUD">AUD</MenuItem>
                            <MenuItem value="CNY">CNY</MenuItem>
                            <MenuItem value="EUR">EUR</MenuItem>
                            <MenuItem value="INR">INR</MenuItem>
                            <MenuItem value="JPY">JPY</MenuItem>
                            <MenuItem value="NZD">NZD</MenuItem>
                            <MenuItem value="RSD">RSD</MenuItem>
                            <MenuItem value="USD">USD</MenuItem>
                        </Select>
                    </div>
                </Grid>
            </Grid>
            <TextField
                type="number"
                value={convertedAmount}
                placeholder="Converted Amount"
                style={{
                    margin: "3% auto",
                    maxWidth: "100%",
                    width: "15%",
                    color: "black",
                }}
                className="converted-amount-text-field"
            />
            <Button
                variant="contained"
                style={{
                    backgroundColor: "#010101",
                    display: "block",
                    color: "white",
                    padding: "15px 45px",
                    borderRadius: "50px",
                    margin: "0% auto",
                }}
                className="convert-button"
                onClick={convert}
            >
                Convert
            </Button>
        </div>
    );
}

export default ConversionBlock;
