import React from 'react';
import PropTypes from 'prop-types';

import './ProductCardEdit.css';

class ProductCardEdit extends React.Component {
    static propTypes = {
        product: PropTypes.object,
        cardmode: PropTypes.number.isRequired,
        cbSave: PropTypes.func.isRequired,
        cbCancel: PropTypes.func.isRequired,
    };
    state = {
        name: this.props.product.name,
        url: this.props.product.url,
        quantity: this.props.product.quantity,
        cost: this.props.product.cost,
        code: this.props.product.code,
        errorName: null,
        errorQuantity: null,
        errorCost: null,
        errorURL: null,
        isValide: this.props.cardmode == 2 ? true : false,
    };

    changeName = (eo) => this.setState({name: eo.target.value});
    changePrice = (eo) => this.setState({cost: eo.target.value});
    changeQuantity = (eo) => this.setState({quantity: eo.target.value});
    changeURL = (eo) => this.setState({url: eo.target.value});
    validateName = () => {
        if(this.state.name.length == 0) {
            this.setState({errorName: 'fill the field', isValide: false});
        } else {
            this.setState({errorName: ''})
        }
        if(
            !this.state.errorName,
            !this.state.errorQuantity,
            !this.state.errorURL,
            !this.state.errorCost
        ) {
            this.setState({isValide: true});
        }
    }
    validatePrice = () => {
        if(this.state.cost.length == 0) {
            this.setState({errorCost: 'fill the field', isValide: false});
        } else {
            this.setState({errorCost: ''})
        }
        if(
            !this.state.errorName,
            !this.state.errorQuantity,
            !this.state.errorURL,
            !this.state.errorCost
        ) {
            this.setState({isValide: true});
        }
    }
    validateQuantity = () => {
        if(this.state.quantity.length == 0) {
            this.setState({errorQuantity: 'fill the field', isValide: false});
        } else {
            this.setState({errorQuantity: ''})
        }
        if(
            !this.state.errorName,
            !this.state.errorQuantity,
            !this.state.errorURL,
            !this.state.errorCost
        ) {
            this.setState({isValide: true});
        }
    }
    validateURL = () => {
        if(this.state.url.length == 0) {
            this.setState({errorURL: 'fill the field', isValide: false});
        } else {
            this.setState({errorURL: ''})
        }
        if(
            !this.state.errorName,
            !this.state.errorQuantity,
            !this.state.errorURL,
            !this.state.errorCost
        ) {
            this.setState({isValide: true});
        }
    }

    save = () => this.props.cbSave(
        {
            ...this.props.product,
            code: this.state.code, 
            name: this.state.name,
            cost: this.state.cost,
            quantity: this.state.quantity,
            url: this.state.url,
        }
    );
    cancel=()=>this.props.cbCancel();
    
    validateAllFields = () => {
        let textError = 'fill the field';
        (this.state.name.length == 0) 
        ? this.setState({errorName: textError, isValide: false}) 
        : this.setState({errorName: ''});
        (this.state.cost.length == 0) 
        ? this.setState({errorCost: textError, isValide: false}) 
        : this.setState({errorCost: ''});
        (this.state.quantity.length == 0) 
        ? this.setState({errorQuantity: textError, isValide: false}) 
        : this.setState({errorQuantity: ''});
        (this.state.url.length == 0) 
        ? this.setState({errorURL: textError, isValide: false}) 
        : this.setState({errorURL: ''});
        if(
            !this.state.errorName,
            !this.state.errorQuantity,
            !this.state.errorURL,
            !this.state.errorCost
        ) {
            this.setState({isValide: true});
            this.save();
        }
    }

    render() {
        return (
            <div className='product-card'>
                <div className='product-card__title'>
                    {
                        (this.props.cardmode == 2) 
                        ?'Edit existed product'
                        :'Create new product'
                    }
                </div>
                <div className='product-card__body'>
                    <div className='product-card__field'>
                        <span className='product-card__form-article'>ID:</span>{this.state.code}
                    </div>
                    <div className='product-card__field'>
                        <span className='product-card__form-article'>name:</span>
                        <input className='product-card__input' 
                            type='text' value={this.state.name} 
                            onChange={this.changeName} 
                            onBlur={this.validateName}
                        />
                        <span className='product-card__error'>{this.state.errorName}</span>
                    </div>
                    <div className='product-card__field'>
                        <span className='product-card__form-article'>Price:</span>
                        <input className='product-card__input' 
                            type='text' value={this.state.cost} 
                            onChange={this.changePrice} 
                            onBlur={this.validatePrice}
                        />
                        <span className='product-card__error'>{this.state.errorCost}</span>
                    </div>
                    <div className='product-card__field'>
                        <span className='product-card__form-article'>URL:</span>
                        <input className='product-card__input' 
                            type='text' value={this.state.url} 
                            onChange={this.changeURL} 
                            onBlur={this.validateURL}
                        />
                        <span className='product-card__error'>{this.state.errorURL}</span>
                    </div>
                    <div className='product-card__field'>
                        <span className='product-card__form-article'>Quantity:</span>
                        <input className='product-card__input' 
                            type='text' value={this.state.quantity} 
                            onChange={this.changeQuantity} 
                            onBlur={this.validateQuantity}
                        />
                        <span className='product-card__error'>{this.state.errorQuantity}</span>
                    </div>
                    <div className='product-card__field'>
                        <input type='button' value='Save' 
                            disabled={!this.state.isValide} 
                            onClick={this.validateAllFields}
                        />
                        <input type='button' value='Cancel' onClick={this.cancel}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductCardEdit;