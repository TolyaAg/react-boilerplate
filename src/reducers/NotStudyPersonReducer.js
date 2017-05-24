import constants from '../constants/NotStudyPersonConstants';

export default (state = {
	error: '',
  programms: null,
  selectedProgramms: []
}, action) => {
	switch (action.type) {
		case constants.ERROR:
      return Object.assign({}, state, { error: action.error });
    
    case constants.GET_PROGRAMMS_SUCCESS:
      return Object.assign({}, state, { programms: action.programms });
		
		default:
			return state;
	}
};