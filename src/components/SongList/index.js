import Song from './Song';
import { Component } from 'react';
import '../css/Song.css';

class SongList extends Component {
    
    render() {
        const songs = [
            { image: 'https://i.scdn.co/image/ab67616d00004851f957156b84dbdf7dcd997402', title: 'Fly', artist: 'Jeremiah Miller', duration: '2:30' },
            { image: 'https://i.scdn.co/image/ab67616d000048515a7f21dad5c796d719650972', title: 'RITMO (Bad Boys For Life)', artist: 'Black Eyed Peas, J Balvin', duration: '3:34' },
            { image: 'https://i.scdn.co/image/ab67616d000048517c8977a0ad3a3a0627be9ed7',  title: 'Higher Love', artist: 'Kygo, Whitney Houston', duration: '3:48' },
            { image: 'https://i.scdn.co/image/ab67616d00004851a91c10fe9472d9bd89802e5a',  title: 'good 4 u', artist: 'Olivia Rodrigo', duration: '2:58' },
        ];

        const filteredSongs = songs.filter(song =>
            song.title.toLowerCase().includes(this.props.searchTerm.toLowerCase()) ||
            song.artist.toLowerCase().includes(this.props.searchTerm.toLowerCase())
        );

        return (
            <main style={{ padding: '1rem' }}>
                {filteredSongs.map((song, index) => (
                    <Song 
                        key={index}
                        image={song.image}
                        title={song.title}
                        artist={song.artist}
                        duration={song.duration}
                    />
                ))}
            </main>
        );
    }
}

export default SongList;
