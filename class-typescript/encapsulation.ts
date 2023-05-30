class User {
    //Properties, method, constructor
    public userName: string;
    private age: number;
   
    constructor(userName: string, age: number) {
        this.userName = userName;
        this.age = age;
    }
    

    display(): void {
        console.log(`username: ${this.userName}, age: ${this.age} `);
    }

}


//Class object
let user1 = new User("Md Shakil Ahmed", 25);
let user2 = new User("Sinbad Sheikh", 28);

user1.display()
user2.display()

console.log(user1.userName)