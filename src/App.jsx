
// step 14
// import component
import SearchForm from "./Components/SearchForm";
import { connect } from "react-redux";
import {
  Card,
} from 'reactstrap'

// step 15
// now that we have a comonent, build the UI and pass in the component

// step 16
// create an actions folder and a file called index to hold the actions
// go to file and build

function App(props) {
  return (
    <Card className="text-center">
      <h1>Fetch Dog Breeds</h1>
      <SearchForm />
      {props.dogs.map((dogImg) => (
        <h3>{dogImg}</h3>
      ))}
    </Card>
  );
}

// step 24
// use map state to props function to use with connect to bring in props
const mapStateToProps = (state) => {
  return {
    dogs: state.dogs
  };
};
// step 25
// now we can use state as props in the jsx

// next step is on SearchForm

// step 23
// connect action function by importing connect at top of page
// and using connect function here at export
// connect function is callesd 2 times
// first call function takes (function for state, action function)
//                       if there is no function avaiable use null
// second call function take function on current component
export default connect(mapStateToProps)(App);
