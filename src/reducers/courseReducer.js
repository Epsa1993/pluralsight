import * as types from '../actions/actionTypes';

export default function courseReducer(state = [], action) {
    switch (action.type) {
        case type.CREATE_COURSE:
          return [...state,
             Object.ssign({}, action.course)
             ];
        case type.UPDATE_COURSE:
          return state
        default:
                return state;
    }
}
