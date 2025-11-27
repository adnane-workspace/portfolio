import React from 'react';

const Header = ({ title = 'EL MENOUAR Adnane' }) => {
  return (
    <header className="site-header">
      <div className="container">
        <h1 className="site-title">{title}</h1>
      </div>
    </header>
  );
};

export default Header;