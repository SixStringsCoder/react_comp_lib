import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SearchBar.css';

class SearchBar extends Component {
  state = {
    searchTerm: ''
  }

  handleTerm = (event) => {
    let term = event.target.value;
    this.setState({
      searchTerm: term
    });
  }

  handleClick = (event) => {
    event.preventDefault();
    // 'search' represents a function (probably in App.js)
    // to perform the search based on the 'searchTerm'
    this.props.search(this.state.searchTerm)
  }

  render() {
    return (

      <form>
      <h3 className="compDescrHead">Search Bar Component</h3>
        <input type="text" id="textinput" placeholder="Enter text here" onChange={this.handleTerm} />
        <button type="submit" id="button" onClick={this.handleClick}>Submit</button>
      </form>
    )
  }
}

SearchBar.propTypes = {
  search: PropTypes.func.isRequired
}

export default SearchBar;
