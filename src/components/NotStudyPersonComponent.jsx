import React from 'react';

// import { ButtonDefault } from './modules/button';
import SelectOneItem from './modules/select-one-item';
import SelectMoreItem from './modules/select-more-item';

class NotStudyPerson extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='container'>
        <div className='container_title'>
          Контроль причин необученности сотрудников
        </div>
        <div className='container_app'>
          <SelectOneItem
            modalTitle={'Выбрать учебную программу'}
            placeholder={'Выбрать учебную программу'}
            data={this.props.programms}
            onChange={this.props.getProgramms}
          />
          <SelectMoreItem
            modalTitle={'Выбрать регион'}
            placeholder={'Выбрать регион'}
          />
        </div>
      </div>
    );
  }
}

export default NotStudyPerson;