import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import SearchResults from "./components/SearchResults";
import Library from "./components/Library";
import './App.css';

export default function App() {
  const songs = [
            { id: 1, image: 'https://i.scdn.co/image/ab67616d00004851f957156b84dbdf7dcd997402', title: 'Fly', artist: 'Jeremiah Miller', duration: '2:30' },
            { id: 2, image: 'https://i.scdn.co/image/ab67616d000048515a7f21dad5c796d719650972', title: 'RITMO (Bad Boys For Life)', artist: 'Black Eyed Peas, J Balvin', duration: '3:34' },
            { id: 3, image: 'https://i.scdn.co/image/ab67616d000048517c8977a0ad3a3a0627be9ed7',  title: 'Higher Love', artist: 'Kygo, Whitney Houston', duration: '3:48' },
            { id: 4, image: 'https://i.scdn.co/image/ab67616d00004851a91c10fe9472d9bd89802e5a',  title: 'good 4 u', artist: 'Olivia Rodrigo', duration: '2:58' },
  ];

  const [searchResults] = useState(songs);
  const [library, setLibrary] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const addToLibrary = (song) => {
      if (!library.find((item) => item.id === song.id)) {
        setLibrary([...library, song]);
      }
  };

  const removeToLibrary = (song) => {
      setLibrary(library.filter((item) => item.id !== song.id));
  }

  useEffect(() => {
    console.log("✅ Biblioteca actualizada:", library);
  }, [library]);

  const filteredResults = searchResults.filter(
    (song) =>
      song.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      song.artist.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
      <div className="app">
        <Header 
          title="🎵 Mi Biblioteca Musical" 
          searchTerm={searchTerm} 
          setSearchTerm={setSearchTerm} />
        <SearchResults 
          songs={filteredResults} 
          addToLibrary={addToLibrary} />
        <Library 
          songs={library}
          
          removeToLibrary={removeToLibrary}/>
      </div>
    );
}
