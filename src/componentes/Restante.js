import React, { Component } from "react";

import { revisarPresupuesto } from '../helper';

class Restante extends Component {
    render() {
        const { presupuesto, restante } = this.props;
        return (
            <div className={ revisarPresupuesto(presupuesto, restante) }>
                { restante ? <span>Restante $ { restante }</span>
                    : <span>Restante $ 0</span>
                }
            </div>
        );
    }
}

export default Restante;
