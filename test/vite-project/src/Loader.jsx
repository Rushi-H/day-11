import React from "react";

export default function Loader({ text = "⏳ Loading..." }) {
  return (
    <div className="loader-wrap">
      <div className="spinner" aria-hidden="true"></div>
      <div className="loader-text">{text}</div>
    </div>
  );
}
