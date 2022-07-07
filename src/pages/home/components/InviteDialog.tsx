import React, { useState } from 'react';
import classnames from 'classnames';
import { inviteDialogText } from 'src/config/ui-text';
import Modal from 'components/Modal';
import Input from 'components/Input';
import { submitFormInfo } from 'src/api';
import { validate } from 'src/utils';
import './style.scss';

// 定义可接受的参数
export interface IInviteDialogProps {
  visible?: boolean;
  onOk?: () => void;
  onClose?: () => void;
}
export interface FormFields {
  name: string;
  email: string;
  emailConfirm: string;
}

// 邀请弹窗
const InviteDialog: React.FC<IInviteDialogProps> = (props) => {
  const { visible, onOk, onClose } = props;

  const [dialogTitle, setDialogTitle] = useState(inviteDialogText.title); // 弹窗标题
  const [dialogBtnText, setDialogBtnText] = useState(inviteDialogText.btnText); // 弹窗按钮文本
  const [btnLoading, setBtnLoading] = useState(false); // 弹窗loading
  const [name, setName] = useState(''); // 姓名输入框
  const [nameError, setNameError] = useState(''); // 姓名框校验错误信息
  const [email, setEmail] = useState(''); // 邮件输入框
  const [emailError, setEmailError] = useState(''); // 邮件框校验错误信息
  const [emailConfirm, setEmailConfirm] = useState(''); // 邮件确认输入框
  const [emailConfirmError, setEmailConfirmError] = useState(''); // 邮件确认框的校验错误信息
  const [serverError, setServerError] = useState(''); // 服务器错误信息

  // 重置各个状态
  const initFiled = () => {
    setDialogTitle(inviteDialogText.title);
    setDialogBtnText(inviteDialogText.btnText);
    setBtnLoading(false);
    setName('');
    setNameError('');
    setEmail('');
    setEmailError('');
    setEmailConfirm('');
    setEmailConfirmError('');
    setServerError('');
  };

  const closeDialog = () => {
    if (btnLoading) return;
    initFiled();
    onClose && onClose();
  };

  const clearError = () => {
    setNameError('');
    setEmailError('');
    setEmailConfirmError('');
    setServerError('');
  };

  // 提交表单
  const submit = () => {
    const result = validate({ name, email, emailConfirm });
    if (result.valid) {
      setBtnLoading(true);
      setDialogBtnText(inviteDialogText.btnLoadingText);
      clearError();

      // 发送到后台
      submitFormInfo({
        name,
        email,
      })
        .then(() => {
          setServerError('');
          initFiled();
          onOk && onOk();
        })
        .catch((e) => {
          setDialogBtnText(inviteDialogText.btnText);
          setServerError(e.errorMessage);
        })
        .finally(() => {
          setBtnLoading(false);
        });
    } else {
      setNameError(result.error.name);
      setEmailError(result.error.email);
      setEmailConfirmError(result.error.emailConfirm);
    }
  };

  // 组合class
  const btnClassName = classnames('btn', { 'btn-disabled': btnLoading });
  return (
    <Modal visible={visible} title={dialogTitle} closeable={true} onClose={closeDialog}>
      <div>
        <Input
          placeholder="Full name"
          error={nameError}
          disabled={btnLoading}
          onChange={(value) => setName(value)}
        />
        <Input
          placeholder="Email"
          error={emailError}
          disabled={btnLoading}
          onChange={(value) => setEmail(value)}
        />
        <Input
          placeholder="Confirm email"
          error={emailConfirmError}
          disabled={btnLoading}
          onChange={(value) => setEmailConfirm(value)}
        />
      </div>
      <div className={btnClassName} onClick={submit}>
        {dialogBtnText}
      </div>
      {serverError ? <i className="other">{serverError}</i> : null}
    </Modal>
  );
};

export default InviteDialog;
