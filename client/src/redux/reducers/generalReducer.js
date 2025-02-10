import { OPEN_MOBILE_NAV } from '../actions/generalActions';

const initialState = {
    openNav: false,
};

const generalReducer = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_MOBILE_NAV:
            return {
                ...state,
                openNav: !state.openNav,
            };
        default:
            return state;
    }
};

export default generalReducer;
