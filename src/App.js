import React from 'react';
import './App.css';
import SearchBar from './SearchBar';
import axios from 'axios';

class App extends React.Component {
    onSearchSubmit = async (term) => {
        const response = await axios.get('https://api.unsplash.com/search/photos',{
			params: { query: term },
			headers: {
				Authorization: 'Client-Id cea99d1a5ddb974a74eb803168d65d6861fce1ba1ecd491221fe2f25a475eaa3'
			}
		});
        console.log(response);
    }

      render() {
        return (
          <div>
            <SearchBar onSubmit={this.onSearchSubmit}/>
          </div>
        );
      }
}

export default App;
