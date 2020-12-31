import React from "react";
import { bool } from "prop-types";
import { StyledMenu } from "./mobile.styled";
import { NavLink } from "react-router-dom";
import "./mobile-menu.css";

const Mobile = ({ open }) => {
    return (
        <StyledMenu id="mobile-nav" className="mobile" open={open}>
            <div className="mobile-links">
                <NavLink
                    className="links"
                    activeClassName="active-mobile active-line-mobile"
                    to="/about"
                >
                    <div>About</div>
                </NavLink>
            </div>
            <div className="mobile-links">
                <NavLink
                    className="links"
                    activeClassName="active-mobile active-line-mobile"
                    to="/resume"
                >
                    <div>Resume</div>
                </NavLink>
            </div>
        </StyledMenu>
    );
};
Mobile.propTypes = {
    open: bool.isRequired,
};

export default Mobile;
