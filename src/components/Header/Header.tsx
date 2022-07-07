import React from 'react';
import { companyInfo } from 'src/config/ui-text';
import './style.scss';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-wrapper">
        <div className="logo"></div>
        <span>{companyInfo.name}</span>
      </div>
    </header>
  );
};

export default Header;
