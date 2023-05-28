//Built-in type: number, string, boolean, void, undefined, null
let userId: number;
let firstName: string;
let lastName: string;
let isActivated: boolean;

userId = 101;
firstName = "Md Shakil";
lastName = "Ahmed";
isActivated = true;

console.log({ userId, name: `${firstName} ${lastName}`, isActivated })

console.log(firstName.toLocaleUpperCase())

function helloWorld(): void {
    console.log("Hello World")
}

helloWorld()