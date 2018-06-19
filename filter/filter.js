"use strict";
var Filter = React.createClass({
    displayName: "Filter",
    propTypes: {
        deffreeinputtext: React.PropTypes.string.isRequired,
        title: React.PropTypes.string.isRequired,
        strings: React.PropTypes.arrayOf(
            React.PropTypes.string.isRequired
        )
    },

    getInitialState: function() {
        return {
            filterStr: this.props.deffreeinputtext, //текст инпута
            isSorted: false, //состояние чекбокса
            stringsProcess: this.props.strings //массив строк
        };
    },


    process: function(EO) {

        var isSorted = this.state.isSorted;
        var filterStr = this.state.filterStr;
        var stringsArrCopy = this.props.strings.slice();

        if (EO.target.type === 'checkbox') {
            isSorted = !isSorted;
            this.setState({ isSorted: isSorted });
        }

        if (EO.target.type === 'text') {
            filterStr = EO.target.value;
            this.setState({ filterStr: filterStr });
        }

        if (filterStr !== "") {
            var filterDisease = [];
            stringsArrCopy.forEach(function(item, index) {
                if (stringsArrCopy[index].indexOf(filterStr) != -1) {
                    filterDisease.push(stringsArrCopy[index])
                }
            });
            stringsArrCopy = filterDisease;
        }



        if (isSorted === true) {
            stringsArrCopy.sort();
        }

        this.setState({ stringsProcess: stringsArrCopy });

    },

    render: function() {
        var diseaseStr = this.state.stringsProcess.map(function(v) {
            return React.DOM.p({ className: "diseaseStr" }, v)

        });

        return React.DOM.div({ className: 'filter' },
            React.DOM.h3({ className: "title" }, this.props.title),
            React.DOM.input({ type: 'checkbox', defaultValue: false, onChange: this.process }),
            React.DOM.input({ type: 'text', className: "free", defaultValue: this.props.deffreeinputtext, onChange: this.process }),
            React.DOM.hr({ className: "hr" }),
            React.DOM.div({ className: "disease" }, diseaseStr)
        )

    }

});