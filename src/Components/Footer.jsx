import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>© 2024 Abi's Portfolio</p>
      <div>
        <a style={styles.footerLink} href="https://github.com/AbinayaaNagarajan" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a style={styles.footerLink} href="https://linkedin.com/in/abinayaasrinath/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    textAlign: 'center',
    padding: '10px',
    backgroundColor: '#f1f1f1',
  },
  footerLink: {
    margin:'0 10px',
  }
};

export default Footer;
