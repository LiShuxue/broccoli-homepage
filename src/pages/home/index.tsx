import React, { useCallback, useState } from 'react';
import { inviteText } from 'src/config/ui-text';
import Modal from 'components/Model';
import './index.scss';

const Home: React.FC = () => {
  const [show, setShow] = useState(false);
  const [dialogTitle, setDialogTitle] = useState('Request an invite');
  const [dialogBtnText, setDialogBtnText] = useState('Send');
  const [btnLoading, setBtnLoading] = useState(false);

  // 展示弹窗
  const showDialog = () => {
    setShow(true);
  };
  // 关闭弹窗，使用useCallback避免子组件不必要的渲染
  const closeDialog = useCallback(() => {
    setShow(false);
  }, []);
  // 提交表单
  const submit = useCallback(() => {
    setBtnLoading(true);
    setDialogBtnText('Sending, please wait...');
  }, []);

  return (
    <div className="home">
      <span className="home-msg1">{inviteText.line1}</span>
      <span className="home-msg2">{inviteText.line2}</span>
      <span className="home-msg3">{inviteText.line3}</span>
      <div className="home-btn" onClick={showDialog}>
        Request an invite
      </div>

      <Modal
        visible={show}
        title={dialogTitle}
        okBtnText={dialogBtnText}
        onOk={submit}
        onCancel={closeDialog}
        okBtnLoading={btnLoading}
      >
        Hello
      </Modal>
    </div>
  );
};

export default Home;
