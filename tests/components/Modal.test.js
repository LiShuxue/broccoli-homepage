import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Modal from 'src/components/Modal';

test('renders modal with title, content, button', () => {
  const title = 'test title';
  const content = 'test content';
  const btnText = 'test button';
  render(
    <Modal visible={true} title={title} okBtnText={btnText}>
      {content}
    </Modal>
  );

  const titleEle = screen.getByText(title);
  const contentEle = screen.getByText(content);
  const btnEle = screen.getByText(btnText);
  expect(titleEle).toBeInTheDocument();
  expect(contentEle).toBeInTheDocument();
  expect(btnEle).toBeInTheDocument();
});

test('renders modal with two button', async () => {
  const user = userEvent.setup();
  const okBtnText = 'OK';
  const cancelBtnText = 'CANCEL';
  const onOk = jest.fn();
  const onCancel = jest.fn();
  render(<Modal visible={true} okBtnText={okBtnText} onOk={onOk} cancelBtnText={cancelBtnText} onCancel={onCancel} />);

  // 断言俩按钮被渲染
  const ok = screen.getByText(okBtnText);
  const cancel = screen.getByText(cancelBtnText);
  expect(ok).toBeInTheDocument();
  expect(cancel).toBeInTheDocument();

  // 断言事件被调用
  await user.click(ok);
  expect(onOk).toHaveBeenCalled();
  await user.click(cancel);
  expect(onCancel).toHaveBeenCalled();
});

test('renders modal with other info', async () => {
  const otherFooterInfo = 'other info';
  render(<Modal visible={true} otherFooterInfo={otherFooterInfo} />);

  const other = screen.getByText(otherFooterInfo);
  expect(other).toBeInTheDocument();
});
