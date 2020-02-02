import React from "react";

export default function Button({ type, loading, text, onClick }) {
  return (
    <>
      {!loading ? (
        <button
          type={type || "button"}
          className="btn btn-default"
          style={{ background: "red", color: "black" }}
          onClick={onClick}
        >
          {text}
        </button>
      ) : (
        <div>Cargando...</div>
      )}
    </>
  );
}
