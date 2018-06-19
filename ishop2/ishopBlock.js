var PhonesBlock = React.createClass({

    displayName: 'PhonesBlock',


    propTypes: {
        title: React.PropTypes.string.isRequired,
        production: React.PropTypes.arrayOf(
            React.PropTypes.shape({
                code: React.PropTypes.number.isRequired,
                count: React.PropTypes.number.isRequired,
                cost: React.PropTypes.string.isRequired,
                brand: React.PropTypes.string.isRequired,
            })
        ),
    },

    render: function() {

        var phonesCode = this.props.production.map(v =>
            React.createElement(KindPhones, {
                key: v.code,
                brand: v.brand,
                count: v.count,
                code: v.code,
                src: v.photoURL,
                cost: v.cost,
                cbSelected: this.phoneSelected,
            })
        );



        return React.DOM.div({ className: 'PhonesBlock' },
            React.createElement(KindProduction, { title: this.props.title }),
            React.DOM.hr({ className: 'Hr' }),
            React.DOM.div({ className: 'Production' }, phonesCode),

        );
    },
});