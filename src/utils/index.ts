import { FormFields } from 'src/pages/home/components/InviteDialog';
import { inviteDialogText } from 'src/config/ui-text';

// 表单校验
export const validate = (fields: FormFields) => {
  const { name, email, emailConfirm } = fields;
  const emailReg = /^([a-zA-Z\d][\w-]{2,})@(\w{2,})\.([a-z]{2,})(\.[a-z]{2,})?$/;
  let hasError = false;
  let error: FormFields = {
    name: '',
    email: '',
    emailConfirm: '',
  };

  // 名称不为空并且大于3个字符
  if (!name || name.length < 3) {
    hasError = true;
    error.name = inviteDialogText.nameError;
  }

  // 邮箱不为空并且格式正确
  if (!email || !emailReg.test(email)) {
    hasError = true;
    error.email = inviteDialogText.emailError;
  }
  // 验证邮箱不为空，并且格式正确，并且跟第一个输入保持一致
  if (!emailConfirm || !emailReg.test(emailConfirm)) {
    hasError = true;
    error.emailConfirm = inviteDialogText.emailError;
  } else if (email !== emailConfirm) {
    hasError = true;
    error.emailConfirm = inviteDialogText.notSameError;
  }

  return {
    valid: !hasError,
    error,
  };
};
