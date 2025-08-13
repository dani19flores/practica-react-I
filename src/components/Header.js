import { Component } from "react";
import './css/Header.css';

class Header extends Component {
    handleChange = (e) => {
        this.props.onSearch(e.target.value);
    };

    render() {
        return (
        <header className="header">
            <h1>Play List</h1>
            <div className="search-wrapper">
                <input
                    type="search"
                    placeholder="Buscar canción, artista..."
                    className="search-input"
                    aria-label="Buscar canciones"
                    onChange={this.handleChange}
                />
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="search-icon"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-4.35-4.35M11 18a7 7 0 1 1 0-14 7 7 0 0 1 0 14z"
                    />
                </svg>
            </div>
        </header>
        );
    }
}

export default Header;
