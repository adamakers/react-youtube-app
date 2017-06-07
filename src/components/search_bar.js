
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
  render() {
    return <input onChange={ event => console.log(event.target.value) } />;  //now using an arrow function
  }

  // onInputChange(event.target.value) {
  //   console.log(event);
  // }
}


export default SearchBar;