const users = [
    { id: 1, name: "Rakib", role: "Admin" },
    { id: 2, name: "Sadia", role: "Editor" },
    { id: 3, name: "Tariq", role: "Subscriber" }
];
function pluckValues(array, key) {
    return array.map(item => item[key]);
}
console.log(pluckValues(users, "name"));
export {};
