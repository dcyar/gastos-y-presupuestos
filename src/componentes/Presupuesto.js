import React, { Component } from "react";

class Presupuesto extends Component {
    render() {
        const { presupuesto } = this.props;
        return (
            <div className="alert alert-primary">
                { presupuesto ? <span>Presupuesto $ { presupuesto }</span>
                    : <span>Presupuesto $ 0</span>
                }
            </div>
        );
    }
}

export default Presupuesto;
