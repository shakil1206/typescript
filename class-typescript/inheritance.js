var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Student = /** @class */ (function () {
    function Student(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    Student.prototype.display = function () {
        console.log("username: ".concat(this.userName, ", age: ").concat(this.age, " "));
    };
    return Student;
}());
var Student1 = /** @class */ (function (_super) {
    __extends(Student1, _super);
    function Student1(userName, age, studentId) {
        var _this = _super.call(this, userName, age) || this;
        _this.studentId = studentId;
        return _this;
    }
    Student1.prototype.display = function () {
        console.log("Username: ".concat(this.userName, ", age: ").concat(this.age, ", Student ID: ").concat(this.studentId));
    };
    return Student1;
}(Student));
var newUser = new Student1('Name', 22, 2568);
newUser.display();
