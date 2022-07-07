import React from 'react';
import './style.scss';

export interface IInnerInputProps {
  placeholder?: string;
  disabled?: boolean;
  onChange?: (value: string) => void;
}

// 使用memo来保证不必要的渲染
const InnerInput: React.FC<IInnerInputProps> = React.memo((props) => {
  const { placeholder = '', disabled = false, onChange, ...other } = props;

  // input组件的change事件
  const handleChange = (event: React.ChangeEvent) => {
    const { value } = event.target as HTMLInputElement;
    onChange && onChange(value);
  };

  return <input placeholder={placeholder} onChange={handleChange} disabled={disabled} {...other} />;
});

export default InnerInput;
