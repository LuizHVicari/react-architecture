interface Props {
  children: React.ReactNode;
}

const TypographyH3: React.FC<Props> = ({ children }) => {
  return (
    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
      {children}
    </h3>
  );
};

export default TypographyH3;
