interface Props {
  when: boolean;
  fallback?: React.ReactNode;
  children: React.ReactNode;
}

const Show: React.FC<Props> = ({ when, fallback, children }) => {
  if (when) {
    return children;
  }

  return fallback;
};

export default Show;
