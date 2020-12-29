var ProductListTable = React.createClass({

    displayName: 'ProductListTable',

    propTypes: {
        title: React.PropTypes.string,
        list: React.PropTypes.array,
    },

    getInitialState: function() {
        return {
            productList: this.props.list,
            selectedItem: 0,
        }
    },

    deleteProduct: function(code) {
        let newList = this.state.productList.filter(v => v.code!==code);
        this.setState( {productList: newList} );
    },

    select: function(code) {
        this.setState( {selectedItem: code} );
    },
  
    render: function() {

        var productListArr = this.state.productList.map( v =>
            React.createElement(Product, {
                key: v.code,url: v.url, name: v.name,
                cost: v.cost, quantity: v.quantity, code: v.code,
                selectedItem: this.state.selectedItem,
                cbDelete: this.deleteProduct, cbSelect: this.select
            })
        );

        return React.DOM.div( {className:'ProductListTable'}, 
                React.DOM.div( {className:'Title'}, this.props.title ),
                React.DOM.table( {className:'List'}, 
                    React.DOM.tbody(null,
                        React.DOM.tr( {className: 'Product-table__row'},
                            React.DOM.td({className: 'Product-table__img'}, 'image'),
                            React.DOM.td({className: 'Product-table__name'}, 'name'),
                            React.DOM.td({className: 'Product-table__quantity'}, 'quantity'),
                            React.DOM.td({className: 'Product-table__cost'}, 'cost'),
                            React.DOM.td({className: 'Product-table__controle'}, 'control'),
                        ),
                        productListArr
                    )
                ),
            );
    },
  
  });