type value = string | number | boolean 
 
function processInput(input : value): string | number{
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