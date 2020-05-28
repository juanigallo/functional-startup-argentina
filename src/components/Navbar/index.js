import React from "react";
import "./style.scss";

function Navbar(props) {
  const { canSearch, handleChange } = props;
  return (
    <nav>
      {canSearch && (
        <div>
          <span>Buscar</span>
          <input
            className="search"
            onChange={(e) => handleChange(e.target.value)}
            type="text"
          />
        </div>
      )}
    </nav>
  );
}

export default Navbar;
