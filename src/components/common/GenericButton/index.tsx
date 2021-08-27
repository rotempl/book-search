import React, { FC } from "react";
import { Button } from "./genericButtonStyle";

interface GenericButtonProps {
  text: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const GenericButton: FC<GenericButtonProps> = (props) => {
  const { text, onClick, type = "button" } = props;
  return (
    <Button type={type} onClick={onClick}>
      {text}
    </Button>
  );
};

export default GenericButton;
