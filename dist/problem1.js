function multiplyValue(value, multiplyValue) {
    if (multiplyValue === undefined) {
        return value * 2;
    }
    return value * multiplyValue;
}
console.log(multiplyValue(5)); // 10
console.log(multiplyValue(5, 3)); // 15
// short form 
function multiplyValueWithNullishcoalescing(value, multiplyValue) {
    return value * (multiplyValue ?? 2);
}
console.log(multiplyValueWithNullishcoalescing(5)); // 10
console.log(multiplyValueWithNullishcoalescing(5, 3)); // 15
export {};
