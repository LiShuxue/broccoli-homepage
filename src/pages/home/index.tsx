import React from 'react';
import { inviteText } from 'src/config/ui-text';
import './index.scss';

const Home = () => {
  return (
    <div className="home">
      <span className="home-msg1">{inviteText.line1}</span>
      <span className="home-msg2">{inviteText.line2}</span>
      <span className="home-msg3">{inviteText.line3}</span>
      <div className="home-btn">Request an invite</div>
    </div>
  );
};

export default Home;
