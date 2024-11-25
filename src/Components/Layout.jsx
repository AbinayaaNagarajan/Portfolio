import React from 'react';
import Header from '../Components/Header'; // Adjust path as needed
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Header /> {/* Header will be consistent across all pages */}
      <main style={{ padding: '20px' }}>
        <Outlet /> {/* Dynamically renders the page content */}
      </main>
    </>
  );
};

export default Layout;
