import React from 'react';
import './Footer.css';  

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <h3>My Website</h3>
                <p>This is a place for your copyright or other info.</p>
                <ul className="socials">
                <li><a href="https://www.instagram.com/_yahieali12"><i className="your-icon-class">IG</i></a></li>
                <li><a href="https://github.com/yas305"><i className="your-icon-class">GH</i></a></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
