/* @flow */
import React from "react";

type Args = {
  buttonStyle?: string,
  handleClick?: Function,
  label?: string
};

export default  ({buttonStyle, handleClick, label}: Args)=> (
  <button
        style={buttonStyle}
        onClick={handleClick}>{label}
  </button>
)
