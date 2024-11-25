import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={styles.header}>
      <h1>Abi's Portfolio</h1>
      <nav>
        <Link style={styles.headerLink} to="/">Home</Link>
        <Link style={styles.headerLink} to="/About">About</Link>
        <Link style={styles.headerLink} to="/Projects">Projects</Link>
        <Link style={styles.headerLink} to="/Skills">Skills</Link>
        <Link style={styles.headerLink} to="/Contact">Contact</Link>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 80px',
    backgroundColor: '#282c34',
    color: 'white',
  },
  headerLink: {
    color: '#ffffff',
    textDecoration: 'none',
    margin: '0px 10px',
  }
};

export default Header;
