import { ActionType } from "../actions/type";


const user = JSON.parse(localStorage.getItem("user"));

const initialState =
{
    district: [],
    street:[],
};

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case ActionType.GET_DISTRICT_SUCCESS:
            return {
                ...state,
                district: payload.districts.data,
            };
        case ActionType.GET_STREET_SUCCESS:
            return {
                ...state,
                street: payload.street.data,
            };
        default:
            return state;
    }
}
