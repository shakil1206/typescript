abstract class Student {
    //Properties, method, constructor
    userName: string;
    age: number;

    constructor(userName: string, age: number) {
        this.userName = userName;
        this.age = age;
    }

    abstract display(): void;
}


class Student1 extends Student {
    studentId: number;

    constructor(userName: string, age: number, studentId: number) {
        super(userName, age);
        this.studentId = studentId;
    }
    display(): void {
        console.log(`Username: ${this.userName}, age: ${this.age}, Student ID: ${this.studentId}`);
    }
}

let newUser = new Student1('Name', 22, 2568);

newUser.display()