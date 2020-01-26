import React from "react";

export default function Titulo(props) {
  return (
    <h1 style={{ color: "red", width: "100", borderRadius: ".5" }}>
      {props.titulo}
    </h1>
  );
}
