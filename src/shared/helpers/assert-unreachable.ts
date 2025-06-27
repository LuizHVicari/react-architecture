export default function assertUnreachable(x: never): Error {
  return new Error("Unreachable case: " + x);
}
