import React from 'react';
import { render, screen } from '@testing-library/react';
import Modal from 'src/components/Modal';

test('renders modal with title, content', () => {
  const title = 'test title';
  const content = 'test content';
  render(
    <Modal visible={true} title={title}>
      {content}
    </Modal>
  );

  const titleEle = screen.getByText(title);
  const contentEle = screen.getByText(content);
  expect(titleEle).toBeInTheDocument();
  expect(contentEle).toBeInTheDocument();
});
