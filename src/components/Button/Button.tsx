import type { ButtonHTMLAttributes, ReactNode } from "react";
import "./Button.css";


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> { 
  children: ReactNode;
  isActive?: boolean;
}
export default function Button({ children, isActive, ...props }: ButtonProps) {
  return (
    <button {...props} className={isActive ? "button active" : "button"}>
      {children}
    </button>
  );
}
