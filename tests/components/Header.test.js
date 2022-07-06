import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from 'src/components/Header';
import { companyInfo } from 'src/config/ui-text';

test('renders header correct', () => {
  render(<Header />);
  const ele = screen.getByText(companyInfo.name);
  expect(ele).toBeInTheDocument();
});
