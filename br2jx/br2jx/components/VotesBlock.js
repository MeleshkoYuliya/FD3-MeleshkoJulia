import React from "react";
import PropTypes from "prop-types";

import "./VotesBlock.css";

class VotesBlock extends React.Component {
  static propTypes = {
    question: PropTypes.string.isRequired
  };

  render() {
    const string = this.props.question;
    const newString = string.split("<br>");
    const jsx = [];
    newString.forEach((str, i) => {
      if (i != 0) {
        jsx.push(<br key={str} />);
      }
      jsx.push(str);
    });

    return <div className="VotesBlock">{jsx}</div>;
  }
}

export default VotesBlock;
