type ResultSuccess<T> = {
  success: true;
  result: T;
};

type ResultError<E extends string | number> = {
  success: false;
  reason: E;
};

export type Result<T, E extends string | number> =
  | ResultSuccess<T>
  | ResultError<E>;
