import React from "react";
import { bool, func } from "prop-types";
import { StyledBurger } from "./burger.styled";
import "./burger.css";

const Burger = ({ open, setOpen }) => {
    return (
        <StyledBurger
            id="burger-nav"
            open={open}
            onClick={() => setOpen(!open)}
        >
            <div />
            <div />
            <div />
        </StyledBurger>
    );
};

Burger.propTypes = {
    open: bool.isRequired,
    setOpen: func.isRequired,
};

export default Burger;
