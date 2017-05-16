import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

class Portal extends Component {
	
	componentDidMount(){
		const { node, nodeId, nodeClass } = this.props;
		const nodeById = document.getElementById(nodeId);
		const nodeByClass = document.getElementsByClassName(nodeClass)[0];

		const newNode = node ? node : nodeId ? nodeById : nodeClass ? nodeByClass : null;
		if (newNode){
			this.node = newNode;
		} else {
			this.node = document.createElement('div');
			document.body.appendChild(this.node);
		}
		this._renderComponent();
	}

	componentDidUpdate() {
		this._renderComponent();
	}

	componentWillUnmout() {
		document.body.removeChild(this.node);
	}
	
	_renderComponent(){
		const newObj = { children: this.props.children, className: this.props.className };
		ReactDOM.render(
			<div
				{...newObj}
			/>,
			this.node
		);
	}
	
	render() {
		return null;
	}
}

Portal.PropTypes = {
	node: PropTypes.any,
	nodeId: PropTypes.string,
	nodeClass: PropTypes.string,
	className: PropTypes.string
};

export default Portal;