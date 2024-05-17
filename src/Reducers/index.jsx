
// step 21
// import action types
import {
    FETCH_DOGS_START,
    FETCH_DOGS_SUCCESS,
    FETCH_DOGS_FAILURE,
} from '../Actions';
// NEXT STEP IS DOWN BELOW

// step 3
// set initialState to hold state that will be passed around
const initialState = {
    dogs: [],
    isLoading: false,
    error: "",
};

// step 4
// create and export an empty reducer function to import to main file
// REMEMBER reducer functions take in 2 parameters (state, action)
// make state = initialState
// an empty reducer function looks like this:
//
//  export const reducer = (state = initialState, action) => {
//    switch (action.type) {
//     default:
//       return state;
//  }
// };

// next step is back on main file


// step 22
// build case for action type
// action types always spread state then make changes to state
// according to the payload actions that change state using action.payload

// next step is in App

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DOGS_START:
            return {
                ...state,
                isLoading: true,
            };
        case FETCH_DOGS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                dogs: action.payload,
            };
        case FETCH_DOGS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        default:
            return state;
    }
};