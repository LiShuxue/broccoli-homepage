import React from 'react';
import './index.scss';

interface IInputProps {
  type?: 'text' | 'email' | 'password';
  placeholder?: string;
  onChange?: (value: string) => void;
  error?: string;
}

// 使用memo来保证不必要的渲染
const Input: React.FC<IInputProps> = React.memo((props) => {
  const { type = 'text', placeholder = '', onChange, error = '' } = props;

  const handleChange = (event: React.ChangeEvent) => {
    const { value } = event.target as HTMLInputElement;
    onChange && onChange(value);
  };

  return (
    <div>
      <input type={type} placeholder={placeholder} onChange={handleChange} className="input-error" />
      {error ? <div className="error-msg">{error}</div> : null}
    </div>
  );
});

export default Input;
