import { Component } from 'react';
import Header from './components/Header';
import SongList from './components/SongList';
import './App.css';

class App extends Component {
  componentDidMount() {
    console.log('La aplicación se ha cargado correctamente');
  }

  render() {
    return (
      <div className="App" style={{ maxWidth: '600px', margin: '2rem auto', fontFamily: 'Arial, sans-serif' }}>
        <Header />
        <SongList/>
      </div>
    );
  }
}

export default App;
