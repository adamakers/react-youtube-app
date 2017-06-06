//in terminal, navigate to project directory.  Did `npm install`
//this downloads and installs all the dependencies for your project that are listed in the projects.json file.
//Then ran `npm start` to get the local server running.  address for browser is `localhost:8080`
  //ctrl+c to exit


//ALWAYS 1 COMPONENT PER FILE!



//need to import the React module to use it
import React from 'react';
import ReactDOM from 'react-dom';

// Create a new Component. This component should produce some HTML
//
//jsx is a subset of JS that looks like HTML, but is really JS.  
//
//this function below is a Class, or could be thought of as a constructor function.  We need to create an instance of this object.  Done by <App />
const App = () => {
  return <div className="hi">STUFF</div>;
}


// Take this components generated HTML and put it on the page (In the DOM)

//need to create an instance of app.  Done by putting `App` inside of <>.  <App></App> || if they is nothing inside of the element, <App />
//render takes 2 arguements.  First being the instance of App, or Component, we created.  Then the other argument is where we want the element to be
//rendered inside of.  The target element.  Just a normal JS element selector.
ReactDOM.render(<App />, document.querySelector('.container'));


