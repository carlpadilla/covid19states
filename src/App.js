import React, { Component } from 'react';
import './App.css';

import ErrorBoundry from './components/ErrorBoundary';

// Component
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';
import Scroll from './components/Scroll';

class App extends Component {
  constructor() {
    super();
    this.state = {
      state: [],
      searchfield: '',
    };
  }

  componentDidMount() {
    fetch('https://disease.sh/v2/states')
      .then((response) => response.json())
      .then((data) => this.setState({ state: data }));
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const { state, searchfield } = this.state;
    const filteredRobots = state.filter((states) => {
      return states.state.toLowerCase().includes(searchfield.toLowerCase());
    });
    if (state.length === 0) {
      return <h1>Loading...</h1>;
    } else {
      return (
        <div className='tc'>
          <h1 className='f1'>Covid-19 State Status</h1>
          <SearchBox searchchange={this.onSearchChange} />
          <Scroll>
            <ErrorBoundry>
              <CardList state={filteredRobots} />
            </ErrorBoundry>
          </Scroll>

          <footer>Made with Love by Carl Padilla</footer>
        </div>
      );
    }
  }
}

export default App;
