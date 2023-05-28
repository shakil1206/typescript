//enum - store constants, duplicate value is not allowed here,
//enum types: numeric, string, hetergenous

//numeriuc enum
enum requestType {
    readData = 3,
    getData,
    saveData,
    deleteData,
}

console.log(requestType)


//String enum
enum request2 {
    readData = "READ_DATA",
    deleteData = "DELETE_DATA"
}


console.log(request2.readData)