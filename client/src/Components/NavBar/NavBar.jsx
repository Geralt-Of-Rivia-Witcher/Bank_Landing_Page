import React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import MenuIcon from "@mui/icons-material/Menu";

function NavBar() {
    return (
        <>
            {window.innerWidth > 770 ? (
                <div
                    style={{
                        color: "white",
                        textAlign: "center",
                        width: "100%",
                        position: "fixed",
                        top: 0,
                        backgroundColor: "black",
                        zIndex: "2",
                    }}
                >
                    <h1
                        style={{
                            display: "inline-block",
                            position: "absolute",
                            left: "20%",
                        }}
                    >
                        My Bank
                    </h1>
                    <h6
                        style={{
                            display: "inline-block",
                            fontSize: "1.3rem",
                            margin: "25px 25px",
                            fontWeight: "normal",
                        }}
                    >
                        About
                    </h6>
                    <h6
                        style={{
                            display: "inline-block",
                            fontSize: "1.3rem",
                            margin: "25px 25px",
                            fontWeight: "normal",
                        }}
                    >
                        Services
                    </h6>
                    <h6
                        style={{
                            display: "inline-block",
                            fontSize: "1.3rem",
                            margin: "25px 25px",
                            fontWeight: "normal",
                        }}
                    >
                        Discover
                    </h6>
                    <h6
                        style={{
                            display: "inline-block",
                            fontSize: "1.3rem",
                            margin: "25px 25px",
                            fontWeight: "normal",
                        }}
                    >
                        Sign Up
                    </h6>
                    <Button
                        variant="contained"
                        style={{
                            position: "absolute",
                            right: "20%",
                            top: "20%",
                            backgroundColor: "#01bf71",
                            color: "black",
                        }}
                    >
                        Sign In
                    </Button>
                </div>
            ) : (
                <div>
                    <h1
                        style={{
                            display: "inline-block",
                            position: "absolute",
                            left: "10%",
                            color: "white",
                        }}
                    >
                        My Bank
                    </h1>
                    <PopupState
                        variant="popover"
                        popupId="demo-popup-menu"
                        style={{ zIndex: 2 }}
                    >
                        {(popupState) => (
                            <React.Fragment>
                                <Button
                                    variant="contained"
                                    {...bindTrigger(popupState)}
                                    style={{
                                        position: "absolute",
                                        right: "5%",
                                        top: "3%",
                                        backgroundColor: "transparent",
                                    }}
                                >
                                    <MenuIcon />
                                </Button>
                                <Menu {...bindMenu(popupState)}>
                                    <MenuItem onClick={popupState.close}>
                                        About
                                    </MenuItem>
                                    <MenuItem onClick={popupState.close}>
                                        Services
                                    </MenuItem>
                                    <MenuItem onClick={popupState.close}>
                                        Discover
                                    </MenuItem>
                                    <MenuItem onClick={popupState.close}>
                                        Sign Up
                                    </MenuItem>
                                </Menu>
                            </React.Fragment>
                        )}
                    </PopupState>
                </div>
            )}
        </>
    );
}

export default NavBar;
