var KindProduction = React.createClass({

    displayName: 'KindProduction',

    propTypes: {
        title: React.PropTypes.string.isRequired,
    },

    render: function() {
        return React.DOM.div({ className: 'KindProduction' }, this.props.title);
    },

});
//это заголовок