import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Home from 'src/pages/Home';
import { inviteText, inviteDialogText, successDialogText } from 'src/config/ui-text';

test('renders home info', () => {
  render(<Home />);
  const line1 = screen.getByText(inviteText.line1);
  const line2 = screen.getByText(inviteText.line2);
  const line3 = screen.getByText(inviteText.line3);
  const btn = screen.getByText(inviteText.btn);
  expect(line1).toBeInTheDocument();
  expect(line2).toBeInTheDocument();
  expect(line3).toBeInTheDocument();
  expect(btn).toBeInTheDocument();
});

test('dialog input validation failed', async () => {
  const user = userEvent.setup();
  render(<Home />);
  const btn = screen.getByText(inviteText.btn);
  await user.click(btn);

  const sendBtn = screen.getByText(inviteDialogText.btnText);
  await user.click(sendBtn);

  const nameError = screen.getByText(inviteDialogText.nameError);
  const emailError = screen.getAllByText(inviteDialogText.emailError);

  expect(nameError).toBeInTheDocument();
  expect(emailError).toHaveLength(2);
});

test('dialog input validation successed and call backend', async () => {
  const user = userEvent.setup();
  render(<Home />);
  const btn = screen.getByText(inviteText.btn);
  await user.click(btn);

  // 获取到三个输入框
  const nameInput = screen.getByPlaceholderText('Full name');
  const emailInput = screen.getByPlaceholderText('Email');
  const emailConfirmInput = screen.getByPlaceholderText('Confirm email');

  // 分别触发change事件，输入内容
  fireEvent.change(nameInput, { target: { value: '123' } });
  fireEvent.change(emailInput, { target: { value: '123@qq.com' } });
  fireEvent.change(emailConfirmInput, { target: { value: '123@qq.com' } });
  const sendBtn = screen.getByText(inviteDialogText.btnText);
  await user.click(sendBtn);

  await waitFor(
    () => {
      // 断言成功之后的弹窗内容
      const successMsg = screen.getByText(successDialogText.content);
      expect(successMsg).toBeInTheDocument();
    },
    {
      timeout: 5000,
    }
  );
});
