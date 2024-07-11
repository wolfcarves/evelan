import React from "react";

interface ContainerProps extends React.ComponentProps<"div"> {}

const Container = ({ children, className, ...props }: ContainerProps) => {
  return (
    <div className={`lg:container min-h-screen py-4 ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Container;
