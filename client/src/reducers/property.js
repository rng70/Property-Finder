import {
    ADD_LAND,
    ADD_HOUSE,
    ADD_SPACE,
    ADD_HOUSE_FAIL,
    ADD_LAND_FAIL,
    ADD_SPACE_FAIL
} from "../actions/types";

const initialState = {
    property: null,
    perperties: [],
    error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

    switch (type) {
        case ADD_LAND:
        case ADD_HOUSE:
        case ADD_SPACE:
            return {
                ...state,
                property: payload,
                loading: false,
            };
        case ADD_HOUSE_FAIL:
        case ADD_LAND_FAIL:
        case ADD_SPACE_FAIL:
            return {
                ...state,
                error: payload,
                loading: false,
            };
        default:
            return state;
    }
}
