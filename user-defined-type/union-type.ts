let userId: string | number;

userId = "101";
userId = 202;

console.log(userId)

function displayUserInfo(userId: number | string) {
    console.log(userId)
}

displayUserInfo("202");
