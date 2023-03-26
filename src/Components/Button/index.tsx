import React from "react";
import "./button.scss";

interface IButton {
  children?: React.ReactNode;
}

const Button: React.FC<IButton> = ({ children }) => {
  return (
    <button type="submit" className="search_button">
      {children}
    </button>
  );
};

export { Button };
