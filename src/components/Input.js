import React from "react";

function Input({ type, onKeyDown, placeholder }, ref) {
  return (
    <input
      ref={ref}
      type={type}
      onKeyDown={onKeyDown}
      placeholder={placeholder}
    />
  );
}

const forwaredInput = React.forwardRef(Input);

export default forwaredInput;
