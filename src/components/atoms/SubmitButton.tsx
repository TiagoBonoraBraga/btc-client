import { SubButtom } from "./AtomsStyles/Buttons";
import React from "react";

type SubmitButton = {
  title: string;
};

export interface SubmitButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  title: string;
}

const SubmitButton = ({ title, onClick }: SubmitButtonProps) => {
  return <SubButtom type="submit" onClick={onClick}>{title}</SubButtom>;
};

export default SubmitButton;
