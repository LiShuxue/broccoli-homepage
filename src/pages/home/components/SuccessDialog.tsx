import React, { useState } from 'react';
import { successDialogText } from 'src/config/ui-text';
import Modal from 'components/Modal';
import './style.scss';

export interface ISuccessDialoggProps {
  visible?: boolean;
  onOk?: () => void;
  onClose?: () => void;
}

// 成功弹窗
const SuccessDialog: React.FC<ISuccessDialoggProps> = (props) => {
  const { visible, onOk, onClose } = props;

  const [dialogTitle] = useState(successDialogText.title); // 弹窗标题
  const [dialogBtnText] = useState(successDialogText.btnText); // 弹窗按钮文本
  const [successMsg] = useState(successDialogText.content); // 注册成功的信息

  return (
    <Modal visible={visible} title={dialogTitle} closeable={true} onClose={onClose}>
      <div>{successMsg}</div>
      <div className="btn" onClick={onOk}>
        {dialogBtnText}
      </div>
    </Modal>
  );
};

export default SuccessDialog;
