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
            stateOptionsArr: this.props.stringArr,
            isSorted: false,
        }
    },

    rebuildArr: function() {
        let rebArr = this.props.stringArr;
        if(this.state.enteredValue) {
            rebArr = rebArr.filter(v => v.indexOf(this.state.enteredValue)!=-1)
        } else {
            rebArr = rebArr.slice();
        }
        if(this.state.isSorted) {
            rebArr.sort();
        }
        this.setState( {stateOptionsArr: rebArr} );
    },

    reset: function() {
        this.setState( { enteredValue: '', isSorted: false, }, this.rebuildArr)
    },

    sort: function(EO) {
        this.setState( {isSorted: EO.target.checked}, this.rebuildArr);
    },

    input: function(EO) {
        this.setState( { enteredValue: EO.target.value}, this.rebuildArr);
    },

    render: function() {
        var optionsArr = this.state.stateOptionsArr.map(v=>{
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