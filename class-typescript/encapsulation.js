var User = /** @class */ (function () {
    function User(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    User.prototype.display = function () {
        console.log("username: ".concat(this.userName, ", age: ").concat(this.age, " "));
    };
    return User;
}());
//Class object
var user1 = new User("Md Shakil Ahmed", 25);
var user2 = new User("Sinbad Sheikh", 28);
user1.display();
user2.display();
console.log(user1.userName);
