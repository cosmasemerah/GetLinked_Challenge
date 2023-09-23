import React from "react";

const CustomButton = ({ title, customStyles }) => {
  return (
    <button className={`bg-primary rounded p-3.5 ${customStyles}`}>
      {title}
    </button>
  );
};

export default CustomButton;
