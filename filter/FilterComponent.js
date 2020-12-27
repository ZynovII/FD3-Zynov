var FilterComponent = React.createClass({
    displayName: 'FilterComponent',

    propTypes: {
        stringArr: React.PropTypes.arrayOf(
            React.PropTypes.string,
        ),
    },

    getInitialState: function() {
        return {
            enteredValue: '', 
            stateOptionsArr: this.props.stringArr.slice(),
            isSorted: false,
        }
    },


    reset: function() {
        this.setState( { enteredValue: '', isSorted: false, } )
    },

    sort: function() {
        (!this.state.isSorted)? this.setState( {isSorted: true} ) : this.setState( {isSorted: false} );
    },

    input: function(EO) {
        this.setState( { enteredValue: EO.target.value} );
        this.state.stateOptionsArr.forEach((v,i) => {
            if(!v.includes(EO.target.value)) {
                this.setState({stateOptionsArr: this.props.stringArr.slice().splice(i)})
            }
        })
    },

    render: function() {
        var optionsArr = (!this.state.isSorted)
        ? this.state.stateOptionsArr.map(v=>{
            return React.DOM.option( {key: v}, v);
        }) 
        : this.state.stateOptionsArr.slice().sort().map(v=>{
            return React.DOM.option( {key: v}, v);
        });

        return React.DOM.div( {className: 'filter'}, 
            React.DOM.div( {className: 'head'}, 
                React.DOM.input( {type: 'checkbox', checked: this.state.isSorted, onClick: this.sort} ),
                React.DOM.input( {type: 'text', value: this.state.enteredValue, onChange: this.input} ),
                React.DOM.input( {type: 'button', value: 'Сброс', onClick: this.reset} ),
            ),
            React.DOM.select( {size: '10'},  optionsArr),
        )
    },
})