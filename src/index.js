import React from 'react';
import ReactDOM from 'react-dom';

//import your components below;
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBbFnzC_eIp7Zt6nBiO-IbccibelSAJiGQ';

//this is your application.  html will be rendered with this App object.
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('.container'));