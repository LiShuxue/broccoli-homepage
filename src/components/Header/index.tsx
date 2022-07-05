import React from 'react';
import { companyInfo } from 'src/config/ui-text';
import './index.scss';

const Header = () => {
  return (
    <header className="header">
      <span>{companyInfo.name}</span>
    </header>
  );
};

export default Header;
