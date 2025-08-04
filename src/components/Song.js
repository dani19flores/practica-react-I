import React, { Component } from 'react';
import './css/Song.css';

class Song extends Component {
    render() {
        const { image, title, artist, duration } = this.props;
        return (
            <div className='song'>
                <img src={image} alt={title} />
                <div className='song__details'>
                    <h3>{title}</h3>
                    <p><strong>Artista:</strong> {artist}</p>
                </div>
                <p><strong>Duración:</strong> {duration}</p>
            </div>
        );
    }
}

export default Song;
