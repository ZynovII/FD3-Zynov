import React from 'react';
import PropTypes from 'prop-types';

import './ProductCardView.css';

class ProductCardView extends React.Component {
    static propTypes = {
        product: PropTypes.object.isRequired,
        cbCancel: PropTypes.func.isRequired,
    };
    state = {
        title: this.props.product.name,
        img: this.props.product.url,
        quantity: this.props.product.quantity,
        price: this.props.product.cost,
        code: this.props.product.code,
    };
    cancel = () => this.props.cbCancel();

    render() {
        return (
            <div className='product-card'>
                <div className='product-card__title'>{this.state.title}</div>
                <div className='product-card__body'>
                    <div>{this.state.code}</div>
                    <img src={this.state.img} className='product-card__img'/>
                    <div>In stock: <span>{this.state.quantity}</span></div>
                    <div>Price: <span>{this.state.price}</span></div>
                    <input type='button' value='Cancel' onClick={this.cancel}/>
                </div>
            </div>
        );
    }
}

export default ProductCardView;