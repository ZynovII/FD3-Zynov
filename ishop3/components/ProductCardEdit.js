import React from 'react';
import PropTypes from 'prop-types';

import './ProductCardEdit.css';

class ProductCardEdit extends React.Component {
    static propTypes = {
        newCode: PropTypes.number,
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
        isValide: true,
    };

    changeName = (eo) => this.setState({name: eo.target.value});
    changePrice = (eo) => this.setState({cost: eo.target.value});
    changeQuantity = (eo) => this.setState({quantity: eo.target.value});
    changeURL = (eo) => this.setState({url: eo.target.value});
    
    save = () => this.props.cbSave(
        {
            ...this.props.product, 
            name: this.state.name,
            cost: this.state.cost,
            quantity: this.state.quantity,
            url: this.state.url,
        }
    );
    cancel=()=>this.props.cbCancel();
    
    validateAllFields = () => {
        let textError = 'fill the field';
        let a = (field, text=null) => {
            this.setState({field: text, isValide: false});
        }
        (this.state.name.length == 0) ? a(this.state.errorName, textError) : a(this.state.errorName);
        (this.state.cost.length == 0) ? a(this.state.errorCost, textError) : a(this.state.errorCost);
        (this.state.quantity.length == 0) ? a(this.state.errorQuantity, textError) : a(this.state.errorQuantity);
        (this.state.url.length == 0) ? a(this.state.errorURL, textError) : a(this.state.errorURL);
        if(
            this.state.errorName == null,
            this.state.errorQuantity == null,
            this.state.errorURL == null,
            this.state.errorCost == null
        ) {
            this.setState({isValide: true});
            this.save();
        }
    }

    validate=(eo)=>{
        if(eo.target.value==0) {
            this.setState({isValide: false});
            eo.target.nextElementSibling.innerHTML='fill the field';
        } else {
            this.setState({isValide: true});
        }
    };

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
                <div className='product-card_body'>
                    <div className='product-card__field'>
                        <span className='product-card__form-article'>ID:</span>{this.state.code}
                    </div>
                    <div className='product-card__field'>
                        <span className='product-card__form-article'>name:</span>
                        <input className='product-card__input' 
                            type='text' value={this.state.name} 
                            onChange={this.changeName} 
                            onBlur={this.validate}
                        />
                        <span className='product-card__error'>{this.state.errorName}</span>
                    </div>
                    <div className='product-card__field'>
                        <span className='product-card__form-article'>Price:</span>
                        <input className='product-card__input' 
                            type='text' value={this.state.cost} 
                            onChange={this.changePrice} 
                            onBlur={this.validate}
                        />
                        <span className='product-card__error'>{this.state.errorCost}</span>
                    </div>
                    <div className='product-card__field'>
                        <span className='product-card__form-article'>URL:</span>
                        <input className='product-card__input' 
                            type='text' value={this.state.url} 
                            onChange={this.changeURL} 
                            onBlur={this.validate}
                        />
                        <span className='product-card__error'>{this.state.errorURL}</span>
                    </div>
                    <div className='product-card__field'>
                        <span className='product-card__form-article'>Quantity:</span>
                        <input className='product-card__input' 
                            type='text' value={this.state.quantity} 
                            onChange={this.changeQuantity} 
                            onBlur={this.validate}
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