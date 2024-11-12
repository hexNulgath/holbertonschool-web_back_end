export default function returnHowManyArguments(...args) {
    let total_args = 0
    for (let arg of args) total_args += 1;
    return total_args;
}