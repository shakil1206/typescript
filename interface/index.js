// let users: { id: number, name: string, age: number }[] = [];
var users = [];
var user1 = {
    id: 1,
    name: "Md Shakil Ahmed",
    age: 25
};
var user2 = {
    id: 2,
    name: "Md Sinbad",
    age: 28
};
users.push(user1);
users.push(user2);
var printUserInfo = function (user) {
    console.log("Hello ".concat(user.name, "! Your id is: ").concat(user.id, " and age: ").concat(user.age));
};
users.forEach(function (user) { return printUserInfo(user); });
// console.log(users)
