"use client";

import React from "react";

interface ButtonProps extends Omit<React.ComponentProps<"button">, "onClick"> {
  title?: string;
  onClick?: any;
}

const Button: React.FC<ButtonProps> = ({
  title,
  children,
  className,
  onClick,
  ...props
}) => {
  return (
    <button
      className={`bg-blue-500 text-sm text-white rounded-md hover:opacity-80 hover:shadow-md px-5 py-3 ${className}`}
      {...props}
    >
      {title ?? children}
    </button>
  );
};

export default Button;
