import React from "react";

interface ButtonProps extends React.ComponentProps<"button"> {
  title?: string;
}

const Button: React.FC<ButtonProps> = ({
  title,
  children,
  className,
  disabled,
  ...props
}) => {
  const baseStyle = "text-sm text-white rounded-md px-5 py-3";
  const stateStyle = !disabled
    ? "bg-blue-500 hover:opacity-100 hover:shadow-md"
    : "bg-blue-300";

  return (
    <button
      className={`${baseStyle} ${stateStyle} ${className}`}
      disabled={disabled}
      {...props}
    >
      {title ?? children}
    </button>
  );
};

export default Button;
