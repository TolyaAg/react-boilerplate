import React from 'react';
import cx from 'classnames';
import './style/checkbox.scss';

class CheckBox extends React.Component {
	
	constructor(props){
		super(props);
		
		this.handleToggleChecked = this.handleToggleChecked.bind(this);
		this.state = {
			checked: props.checked || false
		};
	}
	
	componentWillReceiveProps(nextProps){
		const { checked } = this.state;
		if (checked !== nextProps.checked){
			this.setState({ checked: nextProps.checked });
		}
	}

	handleToggleChecked(e){
		e.stopPropagation();
		e.nativeEvent.stopImmediatePropagation();
		if (this.props.disabled){
			return;
		}
		const newState = !this.state.checked;
		this.setState({ checked: newState });
		if (this.props.onChange){
			this.props.onChange(newState);
		}
	}

	render() {
		const classes = cx({
			'md-checkbox': true
		}, this.props.className);

		const checkboxIconClasses = cx({
			'md-icon': true,
			'md-icon--disabled': this.props.disabled,
			'md-icon--checked': this.state.checked
		});
		return (
			<div className={classes} onClick={this.handleToggleChecked}>
				<div className='md-container'>
					<div className={checkboxIconClasses} />
				</div>
				<div className='md-label'>
					<span>{this.props.label}</span>
				</div>
			</div>
		);
	}
}

CheckBox.PropTypes = {
	checked: React.PropTypes.bool,
	label: React.PropTypes.string,
	disabled: React.PropTypes.bool,
	onChange: React.PropTypes.func,
	className: React.PropTypes.string
};

export default CheckBox;