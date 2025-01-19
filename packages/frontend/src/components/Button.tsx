import React from "react";
import { ImSpinner2 } from "react-icons/im";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  isLoading: boolean;
};

const Button = ({ children, isLoading, ...props }: ButtonProps) => {
  return (
    <button {...props} disabled={props.disabled || isLoading}>
      {isLoading && <ImSpinner2 className="animate-spin" />}
      {children}
    </button>
  );
};

export default Button;
