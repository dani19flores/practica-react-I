import React from "react";
import Song from "../Song";

const SearchResults = ({ songs, addToLibrary }) => {
    return (
        <section>
            <h2 className="title">Resultados de búsqueda</h2>
            {songs.map((song) => (
                <Song
                    key={song.id}
                    song={song}
                    addToLibrary={addToLibrary}
                    showAddButton={true}
                />
            ))}
        </section>
    );
};

export default SearchResults;
