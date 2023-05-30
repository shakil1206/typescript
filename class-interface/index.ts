interface iUserFormatter {
    formateUser: () => string
}

class User implements iUserFormatter {

    constructor(private fullName: string, private age: number) { }

    formateUser = () => {
        return `Name: ${this.fullName}, age: ${this.age}`
    };
}


let user = new User('Mrs, Bangladesh', 22);

console.log(user.formateUser())