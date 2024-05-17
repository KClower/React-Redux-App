
// step 11
// import hooks and named imports as needed
import { useState } from "react";
import { connect } from "react-redux";
import { fetchDogs } from "../Actions";
import { ColorRing } from "react-loader-spinner";
// put ColorRing in a variable to hold all the css involved


// step 9 
// create component
// components start with a capital letter
// add return and export 
const SearchForm = (props) => {
    // step 10
    // set state
    const [searchTerm, setSearchTerm] = useState("");

    // step 13
    // create a onChange handler
    const handleChanges = (e) => {
        setSearchTerm(e.target.value);
    }

    const renderColorRing = () => {
        return (
            <ColorRing
                visible={true}
                height="10"
                width="20"
                ariaLabel="color-ring-loading"
                wrapperClass="color-ring-wrapper"
                colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
            />
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        props.fetchDogs(searchTerm.toLowerCase());
        setSearchTerm("");
    };

    const isError = props.error.length > 0;

    // step 12
    // go to App file and import component
    // start building UI
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={searchTerm}
                    placeholder="Enter a Breed"
                    onChange={handleChanges}
                />
                <button> {props.isLoading ? renderColorRing() : "Search"}</button>
            </form>
            {isError && <p className="text-danger fs-5">{props.error}</p>}
        </>
    )
};
// step 27
// use map state to props function to use with connect to bring in props
const mapStateToProps = (state) => {
    return {
        isLoading: state.isLoading,
        error: state.error,
    };
};
// step 28
// now we can use state as props in the jsx

// step 26
// connect action function by importing connect at top of page
// and using connect function here at export
// connect function is callesd 2 times
// first call function takes (function for state, action function)
//                       if there is no function avaiable use null
// second call function take function on current component
export default connect(mapStateToProps, { fetchDogs })(SearchForm); 
