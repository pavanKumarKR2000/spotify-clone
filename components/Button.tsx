import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, disabled, type = "button", ...props }, ref) => {
    return (
      <button
        {...props}
        type={type}
        disabled={disabled}
        ref={ref}
        className={twMerge(
          "w-full rounded-full bg-green-500 border border-transparent py-1 px-3 disabled:cursor-not-allowed disabled:opacity-50 text-black font-medium hover:opacity-75 transition",
          className
        )}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
