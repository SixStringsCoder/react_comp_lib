import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar'

class App extends Component {
  state = {
    searchTerm: ''
  }

  setTerm(searchWord) {
    this.setState({
      searchTerm: searchWord
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Hanlon React Components Library</h1>
        </header>

        <SearchBar search={this.setTerm} />
        
      </div>
    );
  }
}

export default App;
