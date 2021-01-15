import React from 'react';
import PropTypes from 'prop-types';

import './Product.css';


class Product extends React.Component {

    static propTypes = {
        code: PropTypes.number,
        url: PropTypes.string,
        name: PropTypes.string,
        quantity: PropTypes.number,
        cost: PropTypes.number,
        selectedItem: PropTypes.number,
        isAvailable: PropTypes.bool,
        cbSelect: PropTypes.func,
        cbDelete: PropTypes.func,
        cbEdit: PropTypes.func,
    };

    delete = (eo) => {
        this.props.cbDelete(this.props.code);
        eo.stopPropagation();
    }
    select = () => {
        if(this.props.isAvailable){
            this.props.cbSelect(this.props.code);
        }
    }
    edit = (eo) => {
        this.props.cbEdit(this.props.code);
        eo.stopPropagation();
    }

    render() {
        return(
            <tr style= { {background: (this.props.selectedItem == this.props.code) &&
                'rgba(0,0,200,0.4)'} }
                className="Product-table__row"
                onClick={this.select}
            >
                <td>
                    <img src={this.props.url}/>
                </td>
                <td>{this.props.name}</td>
                <td>{this.props.quantity} left</td>
                <td>{this.props.cost} eurodollars</td>
                <td>
                    <input type='button' 
                        disabled={!this.props.isAvailable} 
                        value='EDIT' onClick={this.edit}
                    />
                    <input type='button' 
                        disabled={!this.props.isAvailable} 
                        value='DELETE' onClick={this.delete}
                    />
                </td>
            </tr>
        );
    }
}

export default Product;