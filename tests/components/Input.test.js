import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Input from 'src/components/Input';

test('renders input with placeholder', () => {
  const placeholder = 'test placeholder';
  render(<Input data-testid="test" placeholder={placeholder} />);
  const ele = screen.getByTestId('test');
  expect(ele.placeholder).toBe(placeholder);
});

test('renders input with error msg', () => {
  const errorMsg = 'test error';
  render(<Input data-testid="test" error={errorMsg} />);
  const ele = screen.getByText(errorMsg);
  expect(ele).toBeInTheDocument();
});

test('change input will trigger onChange', () => {
  const changeHandler = jest.fn();
  render(<Input data-testid="test" onChange={changeHandler} />);
  const ele = screen.getByTestId('test');
  fireEvent.change(ele, { target: { value: 'Hello' } }); // 触发change事件
  expect(changeHandler).toHaveBeenCalledWith('Hello');
});
