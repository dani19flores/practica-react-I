import { Component } from 'react';
import Header from './components/Header';
import SongList from './components/SongList';
import './App.css';

class App extends Component {
  state = {
    searchTerm: ''
  };

  handleSearch = (term) => {
    this.setState({ searchTerm: term });
  };

  render() {
    return (
      <div className="App" style={{ maxWidth: '600px', margin: '2rem auto', fontFamily: 'Arial, sans-serif' }}>
        <Header onSearch={this.handleSearch} />
        <SongList searchTerm={this.state.searchTerm} />
      </div>
    );
  }
}

export default App;
