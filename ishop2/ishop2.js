var PhonesBlock = React.createClass({

    displayName: 'PhonesBlock',

    getDefaultProps: function() {
        return { production: "Отсутствующий товар" }
    },

    render: function() {

        var productionCode = [];

        var arr = this.props.production;
        arr.forEach(function(item, a, arr) {
            var product = arr[a];
            var phoneCode =
                React.DOM.div({ key: product.code, className: 'Product' },
                    React.DOM.div({ className: 'Count' }, product.count),
                    React.DOM.div({ className: 'Brand' }, product.brand),
                    React.DOM.div({ className: 'Cost' }, product.cost),
                    React.DOM.p({ className: 'Url' }, product.photoURL),
                    React.DOM.hr({ className: 'Hr' }),
                );
            productionCode.push(phoneCode);
        });
        return React.DOM.div({ className: 'PhonesBlock' },
            React.DOM.div({ className: 'Phones' }, this.props.title),
            React.DOM.div({ className: 'Description' }, productionCode),
        );
    },

});