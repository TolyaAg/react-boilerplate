import React from 'react';

// import { ButtonDefault } from './modules/button';
import SelectOneItem from './modules/select-one-item';
import SelectMoreItem from './modules/select-more-item';

const data = [
  { id: '1', data: { fullname: '1' } },
	{ id: '2', data: { fullname: '2' } },
	{ id: '3', data: { fullname: '3' } },
	{ id: '4', data: { fullname: '4' } }
];

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
          />
          <SelectMoreItem
            modalTitle={'Выбрать регион'}
            placeholder={'Выбрать регион'}
            selectedItem={data}
          />
        </div>
      </div>
    );
  }
}

export default NotStudyPerson;