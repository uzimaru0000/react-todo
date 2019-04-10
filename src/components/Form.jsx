import React from "react";
import "../style/Form.css";

export default ({ value, onChange, onEnter }) => {
  return (
    <div className="Form">
      <input
        type="text"
        value={value}
        onChange={onChange}
        onKeyDown={onEnter}
      />
    </div>
  );
};
