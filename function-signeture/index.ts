let userInfo: () => void;
let userInfo2: (name: string) => void


userInfo = () => {
    console.log("Md  Shakil Ahmed")
}
userInfo();

userInfo2=(name:string)=>{
    console.log(`Hello ${name}!`)
}

userInfo2("Md Shakil");
