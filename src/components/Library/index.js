import React from "react";
import Song from "../Song";

const Library = ({ songs }) => {
    return (
        <section className="library">
            <h2 className="title">Mi Biblioteca</h2>
            {songs.length === 0 ? (
                <p>No tienes canciones agregadas todavía.</p>
            ) : (
                songs.map((song) => (
                    <Song key={song.id} song={song} showAddButton={false} />
                ))
            )}
        </section>
    );
};

export default Library;
