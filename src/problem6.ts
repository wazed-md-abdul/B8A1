interface Users {
    id : number ,
    name : string ,
    role : string ,
}
const users = [
  { id: 1, name: "Rakib", role: "Admin" },
  { id: 2, name: "Sadia", role: "Editor" },
  { id: 3, name: "Tariq", role: "Subscriber" }
];
function pluckValues<T, K extends keyof T>(array: T[], key: K): T[K][] {
    return array.map(item => item[key]);
}
console.log(pluckValues(users, "name"));