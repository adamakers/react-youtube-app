import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyBbFnzC_eIp7Zt6nBiO-IbccibelSAJiGQ';

//this is your application.  html will be rendered with this App object.
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({key: API_KEY, term: 'puppies'}, (videos) => {
      this.setState({ videos }); //es6 version of doing ({videos: videos}) only where key and value are same name.
      console.log(videos)
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));