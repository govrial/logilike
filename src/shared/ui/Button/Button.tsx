"use client";

import { ButtonHTMLAttributes } from "react";
import s from "./Button.module.scss";
import clsx from "clsx";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  active?: boolean
}

const Button = ({ className, children, type = "button", active, ...otherProps }: ButtonProps) => {
  return (
    <button
      type={type}
      className={clsx(s.root, className, {[s.active]: active})}
      {...otherProps}
    >
      {children}
    </button>
  );
};
export default Button;
