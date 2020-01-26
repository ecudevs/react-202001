import React from "react";
import "./App.css";
import ClickCounter from "./Components/ClickCounter";
import ToDo from "./Components/ToDo";

function App() {
  let mensaje = "Hola mundo!";

  return (
    <div className="App">
      <ClickCounter />
      <hr></hr>
      <ToDo />
    </div>
  );
}

export default App;
