import React from 'react';

import { ButtonPrimary } from './modules/button';
import SelectOneItem from './modules/select-one-item';
import SelectMoreItem from './modules/select-more-item';
import CheckBox from './modules/checkbox';

class NotStudyPerson extends React.Component {

  constructor(props) {
    super(props);

    // this.getCollabs = this.getCollabs.bind(this);
  }

  getCollabs = () => {
    this.props.getCollabs(this.props.selectedProgramm.id, this.props.selectedRegions, this.props.expiredProgramm, this.props.nonReason);
  };

  render() {
    return (
      <div className='container'>
        <div className='container_title'>
          <span className='title'>Контроль причин необученности сотрудников</span>
        </div>
        <div className='container_app'>
          <SelectOneItem
            modalTitle='Выбрать учебную программу'
            placeholder='Выбрать учебную программу'
            data={this.props.programms}
            onChange={this.props.getProgramms}
            onSave={this.props.selectProgramm}
            selectedItem={this.props.selectedProgramm}
          />
          <SelectMoreItem
            modalTitle='Выбрать регион'
            placeholder='Выбрать регион'
            data={this.props.regions}
            onChange={this.props.getRegions}
            onSave={this.props.selectRegions}
            selectedItem={this.props.selectedRegions}
          />
          <CheckBox
            label='Сотрудники с просроченной учебной программой'
            checked={this.props.expiredProgramm}
            onChange={this.props.selectExpiredProgramm}
          />
          <CheckBox
            label='Сотрудники с неуказанной причиной просрочки'
            checked={this.props.nonReason}
            onChange={this.props.selectNonReason}
          />
          <br/>
          <ButtonPrimary
            text='Показать сотрудников'
            onClick={this.getCollabs}
            disabled={this.props.selectedProgramm === null}
          />
        </div>
      </div>
    );
  }
}

export default NotStudyPerson;