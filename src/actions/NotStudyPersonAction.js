import { get } from '../utils/ajax';
import { url } from '../config';
import constants from '../constants/NotStudyPersonConstants';

function getError(error){
  return {
    type: constants.GET_ERROR,
    error
  };
}

const getProgrammsSuccess = (programms) =>  {
  return {
    type: constants.GET_PROGRAMMS_SUCCESS,
    programms
  };
};

export function getProgramms(_search, _page) {
  return dispatch => {
    const urlPath = url.createPath({ server_name: 'not_study', action_name: 'Programms', search: _search, page: _page });
    get(urlPath)
    .then(resp => JSON.parse(resp))
    .then(data => {
      if (data.error) {
        dispatch(getError(data.error));
      } else {
        dispatch(getProgrammsSuccess(data));
      }
    });
  };
}