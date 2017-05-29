import React from 'react';
import SelectItems from '../../select-items';
import cx from 'classnames';
import PropTypes from 'prop-types';
import './style/select-one-item.scss';

class SelectMoreItem extends React.Component {

  constructor(props) {
    super(props);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleShowModal = this.handleShowModal.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.state = {
      isShowModal: false,
      selectedItem: props.selectedItem
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ selectedItem: nextProps.selectedItem });
  }

  handleSave(_items) {
    const items = _items.length === 0 ? null : _items;
    if (this.props.onSave) {
      this.props.onSave(items);
    }
    this.handleCloseModal();
  }

  handleCloseModal() {
    this.setState({ isShowModal: false });
  }

  handleShowModal() {
    this.props.onChange();
    this.setState({ isShowModal: true });
  }

  getModal() {
    const selectedItem = this.state.selectedItem ? this.state.selectedItem : null;
    return this.state.isShowModal ?
      <SelectItems
        title={this.props.modalTitle}
        selectedItems={selectedItem}
        onClose={this.handleCloseModal}
        onSave={this.handleSave}
        {...this.props.data}
        onChange={this.props.onChange}
      /> : null;
  }

  getItemValue() {
    const data = this.props.selectedItem ? this.props.selectedItem : null;
    if (data === null) {
      return '';
    }
    let values = '';
    data.map((item) => {
      values += item.data[Object.keys(item.data)[0]] + '; ';
    });
    return values;
  }

  render() {
    const inputClasses = cx({
      'select-one-item__input': true,
      'select-one-item__input_not-empty': this.props.selectedItem
    });
    const iconClasses = cx({
      'icon-popup': true,
      'select-one-item__icon': true,
      'select-one-item__icon--up': this.props.selectedItem
    });
    const val = this.getItemValue();
    return (
      <div className={cx('select-one-item-container', this.props.className)}>
        <div className='select-one-item'>
          <input
            readOnly
            className={inputClasses}
            type='text'
            value={val}
            title={val}
            onClick={this.handleShowModal}
            onChange={this.handleChange}
          />
          <label className='select-one-item__label'>{this.props.placeholder}</label>
          <i className={iconClasses} onClick={this.handleShowModal} />
        </div>
        {this.getModal()}
      </div>
    );
  }
}

SelectMoreItem.propTypes = {
  modalTitle: PropTypes.string,
  placeholder: PropTypes.string,
  query: PropTypes.string,
  onSave: PropTypes.func,
  selectedItem: PropTypes.array
};

export default SelectMoreItem;