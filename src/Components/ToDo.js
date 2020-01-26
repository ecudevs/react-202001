import React, { Component } from "react";
import Button from "./common/Button";
import Input from "./common/Input";

export default class ToDo extends Component {
  state = {
    tarea: { descripcion: "", hora: "10:00" },
    tareas: []
  };

  changeInput(event) {
    let { tarea } = this.state;
    tarea[event.target.name] = event.target.value;
    this.setState({ tarea });
  }

  agregarTarea() {
    let { tarea, tareas } = this.state;

    if (tarea.index == undefined) {
      tareas.push(tarea);
      this.setState({
        tareas,
        tarea: { descripcion: "", hora: "" }
      });
    } else {
      tareas[tarea.index] = tarea;
      this.setState({
        tareas,
        tarea: { descripcion: "", hora: "" }
      });
    }
  }

  editarTarea(index) {
    let { tarea, tareas } = this.state;
    tarea = tareas[index];
    this.setState({ tarea: { ...tarea, index } });
  }

  eliminarTarea(index) {
    let { tareas } = this.state;
    tareas.splice(index, 1);
    this.setState({ tareas });
  }

  render() {
    const { tarea, tareas } = this.state;

    return (
      <div className="container">
        <div className="row">
          <div className="col">
            {/* <label htmlFor="tarea">Tarea</label> */}
            <Input
              name="descripcion"
              value={tarea.descripcion}
              onChange={event => this.changeInput(event)}
            />
          </div>
          <div className="col">
            <Input
              name="hora"
              value={tarea.hora}
              onChange={event => this.changeInput(event)}
            />
          </div>
          <div className="col">
            <Button
              onClick={() => this.agregarTarea()}
              text={tarea.index !== undefined ? "Editar" : "Agregar"}
              //   loading={this.state.loading}
            />
          </div>
        </div>

        <ol>
          {tareas.map((value, index) => {
            return (
              <li key={value.descripcion}>
                {value.descripcion + " - " + value.hora}
                <Button
                  onClick={() => this.editarTarea(index)}
                  text="Editar"
                  //   loading={this.state.loading}
                />
                <Button
                  onClick={() => this.eliminarTarea(index)}
                  text="Eliminar"
                  //   loading={this.state.loading}
                />
              </li>
            );
          })}
        </ol>
      </div>
    );
  }
}
