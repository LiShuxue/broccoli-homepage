import React from 'react';
import { companyInfo } from 'src/config/ui-text';
import './index.scss';

const Header: React.FC = () => {
  return (
    <header className="header">
      <span>{companyInfo.name}</span>
    </header>
  );
};

export default Header;
