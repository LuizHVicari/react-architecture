import type { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLHeadingElement> {}

const TypographyH1: React.FC<Props> = ({ children, className, ...props }) => {
  return (
    <h1
      className={`scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance ${className}`}
      {...props}
    >
      {children}
    </h1>
  );
};

export default TypographyH1;
