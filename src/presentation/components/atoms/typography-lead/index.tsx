import type { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLHeadingElement> {}

const TypographyLead: React.FC<Props> = ({ children, className, ...props }) => {
  return (
    <p className={`${className} text-muted-foreground text-xl`} {...props}>
      {children}
    </p>
  );
};

export default TypographyLead;
