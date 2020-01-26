import React, { useState } from "react";
import Titulo from "./Titulo";
import Button from "./common/Button";

function ClickCounter() {
  let [contador, setContador] = useState(0);
  let [loading, setLoading] = useState(false);
  //   state = { contador: 0, loading: false };

  let aumentarContador = function() {
    setLoading(true);

    // let { contador } = this.state;
    contador++;

    setTimeout(() => {
      setLoading(false);
      setContador(contador);
    }, 2000);
  };

  return (
    <div>
      {/* <h1>{this.state.contador}</h1> */}
      {contador == 0 ? (
        <Titulo titulo="El contador no esta inicializado" />
      ) : (
        <Titulo titulo={contador} />
      )}

      {/* <button onClick={this.aumentarContador}>Aumentar</button> */}
      <Button onClick={aumentarContador} text="Aumentar" loading={loading} />
    </div>
  );
}

export default ClickCounter;
