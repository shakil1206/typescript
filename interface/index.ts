interface IUser {
    id: number;
    name: string;
    age: number;
}

// let users: { id: number, name: string, age: number }[] = [];
let users: IUser[] = [];


let user1: IUser = {
    id: 1,
    name: "Md Shakil Ahmed",
    age: 25
}

let user2: IUser = {
    id: 2,
    name: "Md Sinbad",
    age: 28
}

users.push(user1)
users.push(user2)

const printUserInfo = (user: IUser) => {
    console.log(`Hello ${user.name}! Your id is: ${user.id} and age: ${user.age}`)
}

users.forEach(user => printUserInfo(user))

// console.log(users)