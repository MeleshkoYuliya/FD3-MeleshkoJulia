import React from 'react';
import PropTypes from 'prop-types';

import './VotesBlock.css';


class VotesBlock extends React.Component {

  static propTypes = {
    question: PropTypes.string.isRequired,
  };

  
  render() {
		
		var s=this.props.question;
		var g=s.split('<br>');
		var jsx=[];
		g.forEach( (s, i) => {
if (i!=0 ){
		jsx.push(<br/>);
	 	}
			jsx.push(s);
	}
	);
		
    return (
      <div className='VotesBlock'>
			{jsx}
      </div>
    )
    ;

  }

}

export default VotesBlock;
