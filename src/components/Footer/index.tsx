import React from 'react';
import { companyInfo } from 'src/config/ui-text';
import './index.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <i>{companyInfo.address}</i>
      <i>{companyInfo.copyright}</i>
    </footer>
  );
};

export default Footer;
