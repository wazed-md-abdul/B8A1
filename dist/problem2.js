function processInput(input) {
    if (typeof input === 'string') {
        return input.trim().toUpperCase();
    }
    if (typeof input === 'number') {
        return input * 10;
    }
    if (typeof input === 'boolean') {
        return input ? "Active" : "Inactive";
    }
    return "Invalid input";
}
export {};
