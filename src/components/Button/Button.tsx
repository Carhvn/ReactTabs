import type { ButtonHTMLAttributes, ReactNode } from "react";
import "./Button.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  isActive?: boolean;
}
export default function Button({
  children,
  isActive,
  className,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      {...props}
      className={`button ${isActive ? "active" : ""} ${className ?? ""}`}
    >
      {children}
    </button>
  );
}
