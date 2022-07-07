import React, { useState } from 'react';
import { inviteText } from 'src/config/ui-text';
import InviteDialog from './components/InviteDialog';
import SuccessDialog from './components/SuccessDialog';
import './index.scss';

const Home: React.FC = () => {
  const [inviteShow, setInviteShow] = useState(false);
  const [successShow, setSuccessShow] = useState(false);

  // 展示邀请弹窗
  const showInviteDialog = () => {
    setInviteShow(true);
    setSuccessShow(false);
  };

  // 关闭邀请弹窗
  const closeInviteDialog = () => {
    setInviteShow(false);
  };

  // 展示成功弹窗
  const showSuccessDialog = () => {
    setSuccessShow(true);
    setInviteShow(false);
  };

  // 关闭成功弹窗
  const closeSuccessDialog = () => {
    setSuccessShow(false);
  };

  return (
    <div className="home">
      <span className="home-msg1">{inviteText.line1}</span>
      <span className="home-msg2">{inviteText.line2}</span>
      <span className="home-msg3">{inviteText.line3}</span>
      <div className="home-btn" onClick={showInviteDialog}>
        {inviteText.btn}
      </div>

      <InviteDialog visible={inviteShow} onOk={showSuccessDialog} onClose={closeInviteDialog} />
      <SuccessDialog visible={successShow} onOk={closeSuccessDialog} onClose={closeSuccessDialog} />
    </div>
  );
};

export default Home;
