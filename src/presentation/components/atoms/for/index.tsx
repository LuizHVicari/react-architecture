import {
  type ReactNode,
  type ReactElement,
  isValidElement,
  cloneElement,
  Fragment,
} from "react";

type Props<T> = {
  each: T[];
  fallback?: ReactNode;
  keyExtractor?: (item: T, index: number) => string | number;
  children: (args: { item: T; index: number }) => ReactNode;
};

const For = <T,>({
  each,
  fallback,
  keyExtractor,
  children,
}: Props<T>): ReactElement | null => {
  if (!each || each.length === 0) {
    return fallback ? <>{fallback}</> : null;
  }

  return (
    <>
      {each.map((item, index) => {
        const key = keyExtractor ? keyExtractor(item, index) : index;
        const node = children({ item, index });

        return typeof key !== "undefined" && isValidElement(node) ? (
          cloneElement(node, { key })
        ) : (
          <Fragment key={key ?? index}>{node}</Fragment>
        );
      })}
    </>
  );
};

export default For;
