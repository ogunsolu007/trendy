import React from "react";
import "./cart-dropdown.scss";
import Button from "../button/Button";

const Cartdropdown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items"></div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};

export default Cartdropdown;
