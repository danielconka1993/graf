import React from "react";
import "./css/InputBox/InputBox.css";

const InputBox = ({
  onInputChange,
  value,
  placeholder,
  name,
  title,
  regex,
}) => {
  const handleChange = (e) => {
    const { name, value } = e.target;

    // only numbers_dot_commas
    if (regex === "numbers_dot_commas") {
      const regex = /^[0-9,.]*$/;
      if (!regex.test(value)) {
        return;
      }
    }

    onInputChange(name, value);
  };

  return (
    <div className="inputBox">
      <p>{title}</p>
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        autoComplete="off"
      />
    </div>
  );
};

export default InputBox;
