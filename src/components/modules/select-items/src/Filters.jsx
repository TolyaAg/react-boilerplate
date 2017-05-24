import React from 'react';
import SearchBar from '../../search-bar';
import PropTypes from 'prop-types';

class Paging extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      value: props.value
    };

    this.handleChangeDecrementPage = this.handleChangeDecrementPage.bind(this);
    this.handleChangeIncrementPage = this.handleChangeIncrementPage.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ value: nextProps.value });
  }

  handleChangeDecrementPage() {
    if (this.state.value <= 1) return;
    this._changePage(this.state.value - 1);
  }

  handleChangeIncrementPage() {
    if ((this.state.value + 1) > this.props.pagesCount) return;
    this._changePage(this.state.value + 1);
  }

  handleKeyDown(e) {
    if (e.keyCode === 13) {
      e.target.blur();
      this._changePage(e.target.value);
    }
  }

  handleChange(e) {
    const val = e.target.value;
    const { isValid } = this.props;
    if (isValid(val)) {
      this.setState({ value: val });
    }
  }

  handleblur(e) {
    if (this.props.onChange) {
      this.props.onChange(e.target.value);
    }
  }

  _changePage(val) {
    if (this.props.onBlur) {
      this.props.onBlur(val);
    }
  }

  render() {
    return (
      <div className='filters__paging'>
        <i className='icon-left-big' onClick={this.handleChangeDecrementPage} />
        <input
          ref='page'
          type='text'
          className='page'
          value={this.state.value}
          onKeyDown={this.handleKeyDown}
          onBlur={this.handleChange}
          onChange={this.handleChange}
        />
        <span className='pages-count'>{this.props.pagesCount}</span>
        <i className='icon-right-big' onClick={this.handleChangeIncrementPage} />
      </div>
    );
  }
}

Paging.propTypes = {
  value: PropTypes.number,
  onChange: PropTypes.func
};

Paging.defaultProps = {
  value: 1,
  pagesCount: 1,
  isValid(val) {
    return /^[1-9]{1,}(\d+)?$/.test(val) && Number(val) >= 1;
  }
};

class Filters extends React.Component {

  render() {
    return (
      <div className='filters'>
        <SearchBar
          onSearch={this.props.onSearch}
          value={this.props.search}
          className={'filters__searchBar'}
          classNameInput={'filters__searchBar-input'}
        />
        <Paging
          onBlur={this.props.onPage}
          value={Number(this.props.page)}
          pagesCount={Number(this.props.pagesCount)}
        />
      </div>
    );
  }
}

Filters.propTypes = {
  onSearch: PropTypes.func,
  onPage: PropTypes.func
};

export default Filters;