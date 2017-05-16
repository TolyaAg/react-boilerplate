import React from 'react';
import cx from 'classnames';

import './style/alert.scss';

export const Alert = ({ text, className, isClose, onClose, ...props }) => {
	const classes = cx('alert', className);
	return (
		<div className={classes} {...props}>
			{isClose && <button type='button' className='close-button' onClick={onClose}>&times;</button>}
			{text}
		</div>
	);
};

export const AlertSuccess = ({ className, ...props }) => {
	const classes = cx('alert--success', className);
	return <Alert {...props} className={classes}/>;
};

export const AlertInfo = ({ className, ...props }) => {
	const classes = cx('alert--info', className);
	return <Alert {...props} className={classes}/>;
};

export const AlertWarning = ({ className, ...props }) => {
	const classes = cx('alert--warning', className);
	return <Alert {...props} className={classes}/>;
};

export const AlertDanger = ({ className, ...props }) => {
	const classes = cx('alert--danger', className);
	return <Alert {...props} className={classes}/>;
};

Alert.defaultProps = {
	text: '',
	isClose: true
};

Alert.propTypes = {
	text: React.PropTypes.string.isRequired,
	onClose: React.PropTypes.func,
	className: React.PropTypes.string,
	isClose: React.PropTypes.bool
};