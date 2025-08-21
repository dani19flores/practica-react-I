import React from "react";
import "../css/Song.css";

const Song = ({ song, showAddButton, addToLibrary, showRemovedBtn, removeToLibrary }) => {
    return (
        <section className='song'>
            <img src={song.image} alt={song.title} />
            <div className='song__details'>
                <h3>{song.title}</h3>
                <p><strong>Artista:</strong> {song.artist}</p>
            </div>
            <p><strong>Duración:</strong> {song.duration}</p>
            {showAddButton && (
                <button onClick={() => addToLibrary(song)}>Agregar</button>
            )}
            {showRemovedBtn && (
                <button onClick={() => removeToLibrary(song)}>Borrar</button>
            )
                
            }
        </section>
    );
};

export default Song;
