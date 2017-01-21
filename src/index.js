import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'

import SearchBar from './components/search_bar';
import VideoList from './components/video_list'
import VideoDetail from './components/video_details'

const API_KEY = 'AIzaSyD3Qb0NXJc6bCbSY8ohTqytPno438lzW6Q'

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			videos:[],
			selected:null
		};
		this.videoSearch('game theory');
	}

	videoSearch(term){
		YTSearch({key: API_KEY, term: term,},(videos) => {
			this.setState({
				videos:videos,
				selected:videos[0]
			})
		});
	}

	render(){
		return (
			<div>
				<SearchBar onSearchTermChange = {term => this.videoSearch(term)} />
				<VideoDetail video={this.state.selected}/>
				<VideoList onVideoSelect={selected => this.setState({selected})} video={this.state.videos}/>
			 </div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('container'))
