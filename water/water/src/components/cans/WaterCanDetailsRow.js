import React from 'react';
import PropTypes from 'prop-types';

export default class WaterCanDetailsRow extends React.Component {

    static propTypes = {
        columns: PropTypes.arrayOf(PropTypes.shape({
            datafield: PropTypes.string.isRequired
        })),
        item: PropTypes.object,
        price: PropTypes.number,
        quantity: PropTypes.number,
        setQuantity: PropTypes.func.isRequired
    };

    static defaultProps = {
        price: 0,
        quantity: 0
    };

    constructor(props, ...args) {
        super(props, ...args);
        this.state = {};
    }

    render() {
        const {
            columns,
            item,
            price,
            quantity
        } = this.props;
        return (<tr>
            {columns.map((column, i) => {
                return (
                    <td key={i}>
                        {item[column.datafield]}
                    </td>
                );
            })}
            <td>
                <button onClick={this.decrement} disabled={!quantity}>-</button>
                    {quantity}
                <button onClick={this.increment}>+</button>
            </td>
            <td>
                {price * quantity}
            </td>
        </tr>);
    }

    increment = () => {
        const {
            quantity
        }  = this.props;
        this.props.setQuantity(quantity + 1);
    }

    decrement = () => {
        const {
            quantity
        }  = this.props;
        this.props.setQuantity(quantity - 1);
    }
}