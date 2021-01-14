import React from 'react';
import PropTypes from 'prop-types';

import './ShopTable.css'

import Product from './Product';
import ProductCardView from './ProductCardView';
import ProductCardEdit from './ProductCardEdit';

class ShopTable extends React.Component {
    static propsTypes = {
        title: PropTypes.string,
        list: PropTypes.array,
    };
    state = {
        productList: this.props.list,
        selectedItem: 0,
        cardmode: 0, //0-none, 1-view, 2-edit, 3-new
    };

    select = (code) => this.setState( {cardmode: 1, selectedItem: code} );
    edit = (code) => this.setState({cardmode: 2, selectedItem: code});
    add = () => this.setState({cardmode: 3, selectedItem: 0});
    cancel= () => this.setState({cardmode: 0, selectedItem: 0});

    deleteProduct = (code) => {
        let newList = this.state.productList.filter(v => v.code!==code);
        this.setState( {productList: newList, selectedItem: 0, cardmode: 0} );
    };

    save = (product) => {
        let newProductList = this.state.productList.map(i => i.code == product.code ? product : i);
        if(product.code !== newProductList.length) {
            newProductList.push(product);
        }
        this.setState({productList: newProductList, cardmode: 0, selectedItem: 0});
    };
    

    render() {
        var productListArr = this.state.productList.map( v =>
                <Product key={v.code}
                    url={v.url} name={v.name}
                    cost={v.cost} quantity={v.quantity} code={v.code}
                    selectedItem={this.state.selectedItem}
                    cbDelete={this.deleteProduct} cbSelect={this.select}
                    cbEdit={this.edit}
                />
            );
        let selectedProduct = this.state.productList.find( i => i.code == this.state.selectedItem)
        || {code: this.state.productList.length + 1, name: '', url: '', cost: '', quantity: ''};

        return (
            <div className='ProductListTable'>
                <div className='Title'>
                    {this.props.title}
                </div>
                <table className='List'>
                    <tbody>
                        <tr>
                            <td>image</td>
                            <td>name</td>
                            <td>quantity</td>
                            <td>cost</td>
                            <td>control</td>
                        </tr>
                        {productListArr}
                    </tbody>
                </table>
                <input type='button' value='add new' onClick={this.add}/>
                {
                    (this.state.cardmode == 1) &&
                    <ProductCardView
                        key={selectedProduct.code} 
                        product={selectedProduct} 
                        cbCancel={this.cancel}/>
                }
                {
                    (this.state.cardmode >= 2) &&
                    <ProductCardEdit 
                        key={selectedProduct.code}
                        product={selectedProduct}
                        cardmode={this.state.cardmode}
                        cbSave={this.save}
                        cbAdd={this.add}
                        cbCancel={this.cancel}
                      />
                }
            </div>
        );
    };
}

export default ShopTable;