import React from 'react';
import InnerInput, { IInnerInputProps } from './innerInput';
import './style.scss';

export interface IInputProps extends IInnerInputProps {
  error?: string;
}

// 使用memo来保证不必要的渲染
const Input: React.FC<IInputProps> = React.memo((props) => {
  const { error = '', ...inputProps } = props;

  return (
    <div>
      <InnerInput {...inputProps} />
      {error ? <div className="error-msg">{error}</div> : null}
    </div>
  );
});

export default Input;
