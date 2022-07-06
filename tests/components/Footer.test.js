import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from 'src/components/Footer';
import { companyInfo } from 'src/config/ui-text';

test('renders footer correct', () => {
  render(<Footer />);
  const address = screen.getByText(companyInfo.address);
  const copyright = screen.getByText(companyInfo.copyright);
  expect(address).toBeInTheDocument();
  expect(copyright).toBeInTheDocument();
});
