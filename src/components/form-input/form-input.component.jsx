import React from "react";

import "./form-input.styles.scss";

const formInput = ({ label, inputOptions }) => {
  return (
    <div className="form-input-group">
      <input className="form-input" {...inputOptions}></input>
      {label && (
        <label
          className={`${
            inputOptions.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default formInput;
