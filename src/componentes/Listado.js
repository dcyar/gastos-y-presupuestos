import React, { Component } from "react";

import Gasto from './Gasto';

class Listado extends Component {
    render() {
        const gastos = Object.keys( this.props.gastos );
        return(
            <div>
                <h2>Listado</h2>
                
                { gastos.map(key => (
                    <Gasto
                        key={ key }
                        gasto={ this.props.gastos[key] }
                    />
                ))}
            </div>
        );
    }
}

export default Listado;
