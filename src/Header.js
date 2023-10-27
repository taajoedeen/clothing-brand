// src/components/Header.js
import React from "react";

const Header = ({ isLoggedIn }) => {
  return (
    <header className="header">
      <div className="logo">Clothing Brand</div>
      <div className="welcome">
        {isLoggedIn ? "Welcome, User!" : "Please Sign In"}
      </div>
    </header>
  );
};

export default Header;
