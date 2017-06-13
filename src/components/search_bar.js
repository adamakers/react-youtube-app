
//es5: import React from 'react';

//es6:
import React, {Component} from 'react';
//same as const Component = React.Component
//curly braces mean import React and set property React.Component to variable of just Component


////functional component
// function SearchBar = () => {
//   return <input />;
// }

////class component
//used for some kind of record keeping.  aware of itself and anything that happens to it.
//since its an input needs to be more aware

//define a new class and give it functionality from React.Component
//es5 version
// class SearchBar extends React.Component { <<<<<<<
//   //every class must have a render function
//   render() {
//     return <input />;
//   }
// }

//es6 version
class SearchBar extends Component { //<<<<<<es6 diff
//how we define and initialize state in class based component
  //all js classes have constructor
  // when new instance is created this is called automatically.  Only one called automatically.
  constructor(props) {
    //needed
    super(props);

    //will be value of input
    this.state =  { term: '' };
  }

  render() {
    //this.state.term = event.target.value // VERY BAD, DO NOT USE.  use setState() instead
    return (
      <div>
        <input
        value={this.state.term}
        onChange={ event => this.setState({term: event.target.value}) } 
        />
      </div>
    );
  }
  //syntax for class method. declaring a fn without function keyword.
  // onInputChange(event.target.value) {
  //   console.log(event);
  // }
}

//need to export our class, fn, variable, etc... at the end of each compnent
export default SearchBar;




//STATE NOTES
// state is a plain javascript object that records and keeps track & Reacts to user events 
//each component class has its own state object
//when interaction happens, component rerenders and all of its children rerender.
//need to initialize the property state
//set property state to a plain js object inside the classes constructor function