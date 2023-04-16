import React from "react";
import { StyledTextArea, TextInputContainer } from "./AtomsStyles/TextInput";

interface TextInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  maxLength?: number;
  rows?: number;
  cols?: number;
}

const TextInput: React.FC<TextInputProps> = ({
  value,
  onChange,
  placeholder,
  maxLength = 100,
  rows = 5,
  cols = 40,
}) => {
  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = event.target.value;
    onChange({ ...event, target: { ...event.target, value: newValue } });
  };

  return (
    <TextInputContainer>
      <StyledTextArea
        value={value}
        onChange={handleTextChange}
        placeholder={placeholder}
        maxLength={maxLength}
        rows={rows}
        cols={cols}
      />
    </TextInputContainer>
  );
};

export default TextInput;
