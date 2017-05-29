import { getAxios } from '../utils/ajax';
import { url } from '../config';
import constants from '../constants/NotStudyPersonConstants';

const getError = (error) => {
  return {
    type: constants.GET_ERROR,
    error
  };
};

const getProgrammsSuccess = (programms) =>  {
  return {
    type: constants.GET_PROGRAMMS_SUCCESS,
    programms
  };
};

export const getProgramms = (_search, _page) => {
  return dispatch => {
    const urlPath = url.createPath({ server_name: 'notStudy', action_name: 'Programms' });
    getAxios(urlPath, { search: _search, page: _page })
    .then(resp => resp.data)
    .then(data => {
      if (data.error) {
        dispatch(getError(data.error));
      } else {
        dispatch(getProgrammsSuccess(data));
      }
    });
  };
};

export const selectProgramm = (selectedProgramm) => {
  return {
    type: constants.SELECT_PROGRAMM,
    selectedProgramm
  };
};

const getRegionsSuccess = (regions) =>  {
  return {
    type: constants.GET_REGIONS_SUCCESS,
    regions
  };
};

export const getRegions = (_search, _page) => {
  return dispatch => {
    const urlPath = url.createPath({ server_name: 'notStudy', action_name: 'Regions' });
    getAxios(urlPath, { search: _search, page: _page })
    .then(resp => resp.data)
    .then(data => {
      if (data.error) {
        dispatch(getError(data.error));
      } else {
        dispatch(getRegionsSuccess(data));
      }
    });
  };
};

export const selectRegions = (selectedRegions) => {
  return {
    type: constants.SELECT_REGIONS,
    selectedRegions
  };
};

export const selectExpiredProgramm = (expired) => {
  return {
    type: constants.SELECT_EXPIRED,
    expired
  };
};

export const selectNonReason = (reason) => {
  return {
    type: constants.SELECT_REASON,
    reason
  };
};

const getCollabsSuccess = (collabs) => {
  return {
    type: constants.GET_COLLABS_SUCCESS,
    collabs
  };
};

export const getCollabs = (_selectedProgramm, _selectedRegions, _expiredProgramm, _nonReason) => {
  return dispatch => {
    const urlPath = url.createPath({ server_name: 'notStudy', action_name: 'Collabs' });
    getAxios(urlPath, { selected_programm: _selectedProgramm, selected_regions: _selectedRegions, expired_programm: _expiredProgramm, non_reason: _nonReason })
    .then(resp => resp.data)
    .then(data => {
      if (data.error) {
        dispatch(getError(data.error));
      } else {
        dispatch(getCollabsSuccess(data));
      }
    });
  };
};