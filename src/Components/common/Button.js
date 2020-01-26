import React from "react";

export default function Button({ loading, text, onClick }) {
  return (
    <>
      {!loading ? (
        <button style={{ background: "red", color: "black" }} onClick={onClick}>
          {text}
        </button>
      ) : (
        <div>Cargando...</div>
      )}
    </>
  );
}
