import React, { Component } from "react";

class FormularioPresupuesto extends Component {
    // Obtener presupuesto
    presupuestoRef = React.createRef();

    obtenerPresupuesto = (e) => {
        e.preventDefault();

        const presupuesto = this.presupuestoRef.current.value;

        this.props.obtenerPresupuesto(presupuesto);

        e.currentTarget.reset();
    }

    render() {
        return (
            <div>
                <h2>Ingrese un Presupuesto</h2>
                <form onSubmit={ this.obtenerPresupuesto }>
                    <input ref={ this.presupuestoRef }
                        type="text" name="presupuesto"
                        className="input"
                        placeholder="Ingrese un presupuesto mayor a 0" />
                    <input
                        className="button-primary u-full-width input"
                        type="submit"
                        value="Agregar"
                    />
                </form>
            </div>
        );
    }
}

export default FormularioPresupuesto;
