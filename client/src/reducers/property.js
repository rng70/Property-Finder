import {
    ADD_LAND,
    ADD_HOUSE,
    ADD_SPACE,
    ADD_HOUSE_FAIL,
    ADD_LAND_FAIL,
    ADD_SPACE_FAIL,
    GET_LANDS,
    GET_LANDS_FAIL,
    GET_HOUSES,
    GET_HOUSES_FAIL,
    GET_SPACES,
    GET_SPACES_FAIL,
    GET_SINGLE_ITEM_FAIL,
    GET_SINGLE_ITEM
} from "../actions/types";

const initialState = {
    propertyVal: null,
    lands: [],
    houses : [],
    spaces : [],
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
        case GET_LANDS:
            return {
                ...state,
                lands: payload,
                loading: false
            };
        case GET_HOUSES:
            return {
                ...state,
                houses: payload,
                loading: false
            };
        case GET_SPACES:
            return {
                ...state,
                spaces: payload,
                loading: false
            };
        case GET_SINGLE_ITEM:
            return {
                ...state,
                propertyVal: payload,
                loading: false
            }
        case GET_SINGLE_ITEM_FAIL:
            return {
                ...state,
                error: payload
            }
        case GET_LANDS_FAIL:
            return {
                ...state,
                error: payload
            };
        case GET_SPACES_FAIL:
        return {
            ...state,
            error: payload
        };
        case GET_HOUSES_FAIL:
            return {
                ...state,
                error: payload
            };
        default:
            return state;
    }
}
