// ./components/FormInput.js
import React, { useState } from "react";

function TextInput(props) {
  const [inputType] = useState(props.typi);
  const [inputValue, setInputValue] = useState("");

  function handleChange(event) {
    setInputValue(event.target.value);
    if (props.onChange) props.onChange(inputValue);
  }
  return (
    <>
      <input
        type={inputType}
        placeholder={inputType}
        value={inputValue}
        name="input-form"
        onChange={handleChange}
        className="inputclass"
      />
    </>
  );
}
export default TextInput;
