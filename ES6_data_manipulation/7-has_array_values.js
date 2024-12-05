export default function hasValuesFromArray(set, array) {
  return array.every((arg) => set.has(arg));
}
