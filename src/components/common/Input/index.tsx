import React, { FC, ChangeEvent } from "react";
import { StyledInput } from "./inputStyle";

interface InputProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const Input: FC<InputProps> = (props) => {
  const { value, onChange, placeholder } = props;
  return <StyledInput value={value} placeholder={placeholder} onChange={onChange} />;
};

export default Input;
