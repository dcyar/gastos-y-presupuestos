import React, { Component } from "react";

class Gasto extends Component {
    render() {
        const { cantidadGasto, nombreGasto } = this.props.gasto;
        
        return (
            <div>
                <li className="gastos">
                    <span>{ nombreGasto }</span>
                    <span className="gasto">$ { cantidadGasto }</span>
                </li>
            </div>
        );
    }
}

export default Gasto;
