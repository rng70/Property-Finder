import {
    ADD_LAND,
    ADD_HOUSE,
    ADD_SPACE,
    ADD_HOUSE_FAIL,
    ADD_LAND_FAIL,
    ADD_SPACE_FAIL,
    GET_LAND,
    GET_LAND_FAIL
} from "../actions/types";

const initialState = {
    propertyVal: null,
    properties: [],
    error: {},
    loading: true
};

export default function (state = initialState, action) {
  const { type, payload } = action;

    switch (type) {
        case ADD_LAND:
        case ADD_HOUSE:
        case ADD_SPACE:
            return {
                ...state,
                propertyVal: payload
            };
        case ADD_HOUSE_FAIL:
        case ADD_LAND_FAIL:
        case ADD_SPACE_FAIL:
            return {
                ...state,
                error: payload
            };
        case GET_LAND:
            return {
                ...state,
                properties: payload,
                loading: false
            };
        case GET_LAND_FAIL:
            return {
                ...state,
                error: payload
            };
        default:
            return state;
    }
}
