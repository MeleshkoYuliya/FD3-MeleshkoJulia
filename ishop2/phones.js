var KindPhones = React.createClass({

    displayName: 'KindPhones',

    propTypes: {
        code: React.PropTypes.number.isRequired,
        count: React.PropTypes.number.isRequired,
        brand: React.PropTypes.string.isRequired,
        cost: React.PropTypes.string.isRequired,
        cbSelected: React.PropTypes.func.isRequired,
        selectedPhoneCode: React.PropTypes.number,
    },
    phoneClicked: function(EO) {
        this.props.cbSelected(this.props.code);
    },

    render: function() {
        if (this.props.selectedPhoneCode != this.props.code) {
            return React.DOM.div({
                    className: 'PhonesBlockPhone',
                    onClick: this.phoneClicked,
                },
                React.DOM.div({ className: 'Brand' }, this.props.brand),
                React.DOM.div({ className: 'Cost' }, this.props.cost),
                React.DOM.img({ src: this.props.src }),
                React.DOM.div({ className: 'Count' }, this.props.count),
                React.DOM.hr({ className: 'Hr' }),

            );
        } else {
            return React.DOM.div({ className: 'PhonesBlockPhones' },
                React.DOM.div({ className: 'Brand' }, this.props.brand),
                React.DOM.div({ className: 'Cost' }, this.props.cost),
                React.DOM.img({ src: this.props.src }),
                React.DOM.div({ className: 'Count' }, this.props.count),
                React.DOM.hr({ className: 'Hr' }),
            );

        }
    }

});