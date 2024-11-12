export default function appendToEachArrayValue(array, appendString) {
    let new_array = []
    for (let value of array) {
        new_array.push(appendString + value);
    }

    return new_array;
}