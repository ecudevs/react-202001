import React from "react";
import Titulo from "./Titulo";
import Button from "./common/Button";

class ClickCounter extends React.Component {
  state = { contador: 0, loading: false };

  constructor(props) {
    super(props);

    this.aumentarContador = this.aumentarContador.bind(this);
  }

  aumentarContador() {
    this.setState({ loading: true });

    let { contador } = this.state;
    contador++;

    setTimeout(() => {
      this.setState({ loading: false });
      this.setState({ contador });
    }, 2000);
  }

  render() {
    return (
      <div>
        {/* <h1>{this.state.contador}</h1> */}
        {this.state.contador == 0 ? (
          <Titulo titulo="El contador no esta inicializado" />
        ) : (
          <Titulo titulo={this.state.contador} />
        )}

        {/* <button onClick={this.aumentarContador}>Aumentar</button> */}
        <Button
          onClick={this.aumentarContador}
          text="Aumentar"
          loading={this.state.loading}
        />
      </div>
    );
  }
}

export default ClickCounter;
