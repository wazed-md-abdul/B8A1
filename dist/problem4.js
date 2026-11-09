function concatenateArrays(...arrays) {
    console.log(arrays);
    return arrays.flat();
}
const val = concatenateArrays([1, 2, 3], [4, 5, 6]);
console.log(val);
export {};
