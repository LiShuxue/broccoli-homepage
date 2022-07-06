import React, { useState } from 'react';
import { inviteText, formDialogText, successDialogText } from 'src/config/ui-text';
import Modal from 'components/Model';
import Input from 'components/Input';
import { submitFormInfo } from 'src/api';
import './index.scss';

const Home: React.FC = () => {
  const [show, setShow] = useState(false); // 弹窗展示
  const [dialogTitle, setDialogTitle] = useState(formDialogText.title); // 弹窗标题
  const [dialogBtnText, setDialogBtnText] = useState(formDialogText.btnText); // 弹窗按钮文本
  const [btnLoading, setBtnLoading] = useState(false); // 弹窗loading
  const [name, setName] = useState(''); // 姓名输入框
  const [nameError, setNameError] = useState(''); // 姓名框校验错误信息
  const [email, setEmail] = useState(''); // 邮件输入框
  const [emailError, setEmailError] = useState(''); // 邮件框校验错误信息
  const [emailConfirm, setEmailConfirm] = useState(''); // 邮件确认输入框
  const [emailConfirmError, setEmailConfirmError] = useState(''); // 邮件确认框的校验错误信息
  const [successMsg, setSuccessMsg] = useState(''); // 注册成功的信息
  const [serverError, setServerError] = useState(''); // 服务器错误信息

  const initFiled = () => {
    setDialogTitle(formDialogText.title);
    setDialogBtnText(formDialogText.btnText);
    setBtnLoading(false);
    setName('');
    setNameError('');
    setEmail('');
    setEmailError('');
    setEmailConfirm('');
    setEmailConfirmError('');
    setSuccessMsg('');
    setServerError('');
  };

  // 展示弹窗
  const showDialog = () => {
    initFiled();
    setShow(true);
  };

  // 关闭弹窗
  const closeDialog = () => {
    setShow(false);
  };

  // 表单校验
  const validate = () => {
    const emailReg = /^([a-zA-Z\d][\w-]{2,})@(\w{2,})\.([a-z]{2,})(\.[a-z]{2,})?$/;
    let hasError = false;
    // 名称不为空并且大于3个字符
    if (!name || name.length < 3) {
      hasError = true;
      setNameError(formDialogText.nameError);
    } else {
      setNameError('');
    }

    // 邮箱不为空并且格式正确
    if (!email || !emailReg.test(email)) {
      hasError = true;
      setEmailError(formDialogText.emailError);
    } else {
      setEmailError('');
    }

    // 验证邮箱不为空，并且格式正确，并且跟第一个输入保持一致
    if (!emailConfirm || !emailReg.test(emailConfirm)) {
      hasError = true;
      setEmailConfirmError(formDialogText.emailError);
    } else if (email !== emailConfirm) {
      hasError = true;
      setEmailConfirmError(formDialogText.notSameError);
    } else {
      setEmailConfirmError('');
    }

    return !hasError;
  };

  // 提交表单
  const submit = () => {
    // 如果是提交成功的状态，则点击ok关闭
    if (successMsg) {
      closeDialog();
    } else {
      // 否则是表单状态，点击send则验证表单，提交给后台
      const valid = validate();
      if (valid) {
        setBtnLoading(true);
        setDialogBtnText(formDialogText.btnLoadingText);
        // 发送到后台
        submitFormInfo({
          name,
          email,
        })
          .then(() => {
            setDialogTitle(successDialogText.title);
            setSuccessMsg(successDialogText.content);
            setDialogBtnText(successDialogText.btnText);
            setServerError('');
          })
          .catch((e) => {
            setDialogBtnText(formDialogText.btnText);
            setServerError(e.errorMessage);
          })
          .finally(() => {
            setBtnLoading(false);
          });
      }
    }
  };

  return (
    <div className="home">
      <span className="home-msg1">{inviteText.line1}</span>
      <span className="home-msg2">{inviteText.line2}</span>
      <span className="home-msg3">{inviteText.line3}</span>
      <div className="home-btn" onClick={showDialog}>
        {inviteText.btn}
      </div>

      <Modal
        visible={show}
        title={dialogTitle}
        okBtnText={dialogBtnText}
        onOk={submit}
        onCancel={closeDialog}
        okBtnLoading={btnLoading}
        otherFooterInfo={serverError}
      >
        {/* 成功后的弹窗内容 */}
        {successMsg ? (
          <div>{successMsg}</div>
        ) : (
          <div>
            {/* 最初打开时的弹窗内容 */}
            <Input placeholder="Full name" onChange={(value) => setName(value)} error={nameError} />
            <Input placeholder="Email" onChange={(value) => setEmail(value)} error={emailError} />
            <Input placeholder="Confirm email" onChange={(value) => setEmailConfirm(value)} error={emailConfirmError} />
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Home;
