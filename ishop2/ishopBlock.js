var PhonesBlock = React.createClass({

    displayName: 'PhonesBlock',


    propTypes: {
        //workMode: React.PropTypes.number.isRequired,
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

    getInitialState: function() {
        return {
            selectedPhoneCode: null,
        };
    },

    phoneSelected: function(code) {
        console.log('выбран продукт с кодом ' + code);
        this.setState({ selectedPhoneCode: code });
    },
    render: function() {

        var phonesCode = this.props.production.map(v =>
            React.createElement(KindPhones, {
                key: v.code,
                brand: v.brand,
                count: v.count,
                code: v.code,
                photoURL: v.photoURL,
                cost: v.cost,
                cbSelected: this.phoneSelected,
                // workMode: this.props.workMode,
            })
        );



        return React.DOM.div({ className: 'PhonesBlock' },
            React.createElement(KindProduction, { title: this.props.title }),
            React.DOM.div({ className: 'Production' }, phonesCode),

        );
    },
});