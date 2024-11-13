export default function returnHowManyArguments(...args) {
  let totalArgs = 0
  for (let arg of args) totalArgs += 1;
  return totalArgs;
}
