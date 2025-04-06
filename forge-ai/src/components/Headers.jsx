// src/components/Header.jsx
import 'react';
import './Header.css'; // Import the CSS for styling

const Header = () => {
    return (
        <header className="header">
            <h1 className="header-title">
                <i className="fas fa-robot"></i> Forge AI
            </h1>
            <p className="header-subtitle">Find the best AI agents for your needs</p>
        </header>
    );
};

export default Header;