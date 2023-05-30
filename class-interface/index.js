var User = /** @class */ (function () {
    function User(fullName, age) {
        var _this = this;
        this.fullName = fullName;
        this.age = age;
        this.formateUser = function () {
            return "Name: ".concat(_this.fullName, ", age: ").concat(_this.age);
        };
    }
    return User;
}());
var user = new User('Mrs, Bangladesh', 22);
console.log(user.formateUser());
