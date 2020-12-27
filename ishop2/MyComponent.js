var ProductListTable = React.createClass({

    displayName: 'ProductListTable',

    deleteProduct: function(code) {
        //????
    },
  
    render: function() {

        var productListArr = this.props.list.map( v =>
            React.createElement(Product, {
                key: v.code,url: v.url, name: v.name,
                cost: v.cost, quantity: v.quantity, 
                cbDelete: this.deleteProduct
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