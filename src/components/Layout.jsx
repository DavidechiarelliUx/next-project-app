import React from 'react';
import Navbar from '@/components/Navbar';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div>{children}</div>
      {/* Aggiungi qui il tuo footer se lo desideri */}
    </>
  );
};

export default Layout;
