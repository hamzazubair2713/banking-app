import React, { useState } from "react";

const Button = ({ styles }) => {
  const [value, setvalue] = useState("Get Started");

  const changeValue = () => {
    setvalue("Confirm");
  };

  return (
    <button
      onClick={changeValue}
      type="button"
      className={`px-6 py-4 bg-blue-gradient font-poppins font-medium text-[18px] rounded-[10px] ${styles}`}
    >
      {value}
    </button>
  );
};

export default Button;
