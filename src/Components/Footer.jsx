import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Footer() {
    return (
        <footer>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', padding: '20px' }}>
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter" style={{ fontSize: '30px', margin: '10px' }}></i>
                </a>
                <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook" style={{ fontSize: '30px', margin: '10px' }}></i>
                </a>
                <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram" style={{ fontSize: '30px', margin: '10px' }}></i>
                </a>
                <a href="https://reddit.com/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-reddit" style={{ fontSize: '30px', margin: '10px' }}></i>
                </a>
            </div>
        </footer>
    )
}