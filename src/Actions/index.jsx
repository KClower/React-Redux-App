
// step 19
// install and import as needed
import axios from "axios";

// STEP 18
// make action type strings as variables to manage spelling errors
export const FETCH_DOGS_START = "FETCH_DOGS_START";
export const FETCH_DOGS_SUCCESS = "FETCH_DOGS_SUCCESS";
export const FETCH_DOGS_FAILURE = "FETCH_DOGS_FAILURE";

// step 17
// make an action creater that is going to so handle actions

// this is a impicite return where dispatch is an inner function
export const fetchDogs = (breed) => (dispatch) => {
    dispatch({ type: FETCH_DOGS_START });
    axios
        .get(`https://dog.ceo/api/breed/${breed}/images`)
        .then((res) => {
            dispatch({ type: FETCH_DOGS_SUCCESS, payload: res.data.message });
            console.log(res);
        })
        .catch((error) => {
            dispatch({ type: FETCH_DOGS_FAILURE, payload: "Not a Breed of Dog" });
        });
};

// step 20
// go back to reducer
// import action type reducer
// build a case for each action type
