function multiplyValue(value, multiplyValue) {
    if (multiplyValue === undefined) {
        return value * 2;
    }
    return value * multiplyValue;
}
console.log(multiplyValue(5)); // 10
console.log(multiplyValue(5, 3)); // 15
export {};
