export default function serializeObject(x: Record<string, unknown>): string[] {
  return Object.entries(x).map(([key, value]) => `${key}:${String(value)}`);
}
