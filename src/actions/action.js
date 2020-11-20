import {ActionType} from "./type";

import Service from "../services/Service";

export const getDitricts = () => (dispatch) => {
    return Service.getDistricts().then(
      (data) => {
        dispatch({
          type: ActionType.GET_DISTRICT_SUCCESS,
          payload: { districts: data },
        });
        return Promise.resolve();
      },
      (error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
  
        dispatch({
          type: ActionType.GET_DISTRICT_FAIL,
        });
  
        return Promise.reject();
      }
    );
  };

  export const getStreetsByDistrict = (districtId) => (dispatch) => {
    return Service.getStreetsByDistrict(districtId).then(
      (data) => {
        dispatch({
          type: ActionType.GET_STREET_SUCCESS,
          payload: { street: data },
        });
        return Promise.resolve();
      },
      (error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
  
        dispatch({
          type: ActionType.GET_STREET_FAIL,
        });
  
        return Promise.reject();
      }
    );
  };