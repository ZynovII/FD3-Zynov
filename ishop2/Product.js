var Product = React.createClass({
    displayName: 'product',
    propTypes: {
        code: React.PropTypes.number,
        url: React.PropTypes.string,
        name: React.PropTypes.string,
        quantity: React.PropTypes.number,
        cost: React.PropTypes.number,
        selectedItem: React.PropTypes.number,
        cbSelect: React.PropTypes.func,
        cbDelete: React.PropTypes.func,
    },

    deleteProduct: function() {
        this.props.cbDelete(this.props.code)
    },

    select: function() {
        this.props.cbSelect(this.props.code);
    },

    render: function() {
        return React.DOM.tr( {key: this.props.code,
            style: (this.props.selectedItem == this.props.code)
            ? {background: 'rgba(0,0,200,0.4)'} : null,
            className: 'Product-table__row', onClick: this.select},
            React.DOM.td({className: 'Product-table__img'}, 
                React.DOM.img({src: this.props.url})
            ),
            React.DOM.td({className: 'Product-table__name'}, this.props.name),
            React.DOM.td({className: 'Product-table__quantity'}, this.props.quantity+' left'),
            React.DOM.td({className: 'Product-table__cost'}, this.props.cost+' eurodollars'),
            React.DOM.td(null, 
                React.DOM.input( {type: 'button', value: 'DELETE', onClick: this.deleteProduct})
            )
        )
    },
})