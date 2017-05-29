import constants from '../constants/NotStudyPersonConstants';

export default function NotStudyPersonReducer(state = {
	error: '',
  programms: null,
  selectedProgramm: null,
  regions: [],
  selectedRegions: null,
  expiredProgramm: false,
  nonReason: false,
  collabs: []
}, action) {
	switch (action.type) {
		case constants.ERROR:
      return Object.assign({}, state, { error: action.error });
    
    case constants.GET_PROGRAMMS_SUCCESS:
      return Object.assign({}, state, { programms: action.programms });
		
    case constants.SELECT_PROGRAMM:
      return Object.assign({}, state, { selectedProgramm: action.selectedProgramm });

    case constants.GET_REGIONS_SUCCESS:
      return Object.assign({}, state, { regions: action.regions });

    case constants.SELECT_REGIONS:
      return Object.assign({}, state, { selectedRegions: action.selectedRegions });

    case constants.SELECT_EXPIRED:
      return Object.assign({}, state, { expiredProgramm: action.expired });

    case constants.SELECT_REASON:
      return Object.assign({}, state, { nonReason: action.reason });

		default:
			return state;
	}
}