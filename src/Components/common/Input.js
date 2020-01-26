import React from "react";

export default function Input({ name, value, onChange }) {
  return (
    <input
      className="form-control"
      name={name}
      value={value}
      onChange={onChange}
    />
  );
}
