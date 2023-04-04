export function getArrayDataFromEntries(
  obj: Iterable<readonly [PropertyKey, any]>
) {
  return Object.keys(Object.fromEntries(obj));
}
