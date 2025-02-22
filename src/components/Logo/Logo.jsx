import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="brand-text">
      <div className="brand-name">
        <span className="rudresh">RUDRESH</span>
      </div>
    </Link>
  );
};

export default Logo;
