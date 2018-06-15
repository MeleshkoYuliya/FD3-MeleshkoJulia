var KindPhones = React.createClass({

    displayName: 'KindPhones',

    propTypes: {
        code: React.PropTypes.number.isRequired,
        count: React.PropTypes.number.isRequired,
        brand: React.PropTypes.string.isRequired,
        cost: React.PropTypes.string.isRequired,
        //workMode: React.PropTypes.number.isRequired,
        cbSelected: React.PropTypes.func.isRequired,
    },
    phoneClicked: function(EO) {
        this.props.cbSelected(this.props.brand);
    },

    render: function() {
        if (this.props.cbSelected) {

            return React.DOM.div({ className: 'PhonesBlockPhones', onClick: this.phoneClicked },
                React.DOM.p({ className: 'Brand' }, this.props.brand),
                React.DOM.span({ className: 'Cost' }, this.props.cost),
                React.DOM.span({ className: 'Count' }, this.props.count),

            );

        } else {
            return React.DOM.div({ className: 'Production' },
                React.DOM.p({ className: 'Brand' }, this.props.brand),
                React.DOM.span({ className: 'Cost' }, this.props.cost),
                React.DOM.span({ className: 'Count' }, this.props.count)
            );
        }

    },

});