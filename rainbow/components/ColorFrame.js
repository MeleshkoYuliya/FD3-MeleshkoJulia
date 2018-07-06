import React from 'react';
import PropTypes from 'prop-types';

class ColorFrame extends React.Component {
	
  static propTypes = {
    color: PropTypes.array.isRequired,
  };
  
	 render() {var c=this.props.color;;
			var code=this.props.children;
			for(var i = 0; i < c.length; i++){
				code=<div style={{border:"dashed 2px "+c[i],padding:"10px"}}>{code}</div>
			}
    return (
      <div>
        {code}
      </div>
    );
  }

}

export default ColorFrame;
