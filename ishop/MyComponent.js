var ProductListTable = React.createClass({

    displayName: 'ProductListTable',
  
    render: function() {

        var list = this.props.list;
        var productListArr = [];

        this.props.list.forEach( (v, i) => {
            productListArr.push(
                React.DOM.tr( {key: v.code, className: 'Product-table__row'},
                    React.DOM.td({className: 'Product-table__img'}, 
                        React.DOM.img({src: v.url})
                    ),
                    React.DOM.td({className: 'Product-table__name'}, v.name),
                    React.DOM.td({className: 'Product-table__quantity'}, v.quantity+' left'),
                    React.DOM.td({className: 'Product-table__cost'}, v.cost+' eurodollars'),
                )
            );
        });

        return React.DOM.div( {className:'ProductListTable'}, 
                React.DOM.div( {className:'Title'}, this.props.title ),
                React.DOM.table( {className:'List'}, 
                    React.DOM.tbody(null,
                        React.DOM.tr( {className: 'Product-table__row'},
                            React.DOM.td({className: 'Product-table__img'}, 'image'),
                            React.DOM.td({className: 'Product-table__name'}, 'name'),
                            React.DOM.td({className: 'Product-table__quantity'}, 'quantity'),
                            React.DOM.td({className: 'Product-table__cost'}, 'cost'),
                        ),
                        productListArr
                    )
                ),
            );
    },
  
  });