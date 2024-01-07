import React from 'react';
import './Footer.css';  

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <h3>My Website</h3>
                <p>This is a place for your copyright or other info.</p>
                <ul className="socials">
                    <li><a href="#"><i className="your-icon-class">FB</i></a></li>
                    <li><a href="#"><i className="your-icon-class">TW</i></a></li>
                    <li><a href="#"><i className="your-icon-class">IG</i></a></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
