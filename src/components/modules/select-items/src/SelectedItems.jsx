import React from 'react';
import { ButtonPrimary } from '../../button';
import PropTypes from 'prop-types';

class SelectedItem extends React.Component {

	constructor(props){
		super(props);
		this.handleRemoveItem = this.handleRemoveItem.bind(this);
	}

	handleRemoveItem(){
		if (this.context.onRemoveItem){
			this.context.onRemoveItem(this.props.id);
		}
	}

	_getFirstField() {
		return Object.keys(this.props.data).filter((key, index) => {
			return index === 0;
		}).map(key => {
			return this.props.data[key];
		});
	}

	render(){
		return (
  <div className='item' onClick={this.handleRemoveItem}>
    <ButtonPrimary className='item__button' reverse>
      <i className='icon-minus' />
    </ButtonPrimary>
    <label className='item__text oneline'>{this._getFirstField()}</label>
  </div>
		);
	}
}

SelectedItem.propTypes = {
	id: PropTypes.string,
	data: PropTypes.object
};

SelectedItem.contextTypes = {
	onRemoveItem: PropTypes.func
};

class SelectedItems extends React.Component {

	getItemsMarkup(){
		return this.props.items.map((item, index) => {
			return <SelectedItem key={index} {...item}/>;
		});
	}

	render() {
		return (
  <div className='selected-items'>
    {this.getItemsMarkup()}
  </div>
		);
	}
}

SelectedItems.propTypes = {
	items: PropTypes.array // [{id:'', cols: [{}, ...]}, ...]
};

SelectedItems.defaultProps = {
	items: []
};

export default SelectedItems;