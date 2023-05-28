//enum - store constants, duplicate value is not allowed here,
//enum types: numeric, string, hetergenous
//numeriuc enum
var requestType;
(function (requestType) {
    requestType[requestType["readData"] = 3] = "readData";
    requestType[requestType["getData"] = 4] = "getData";
    requestType[requestType["saveData"] = 5] = "saveData";
    requestType[requestType["deleteData"] = 6] = "deleteData";
})(requestType || (requestType = {}));
console.log(requestType);
//String enum
var request2;
(function (request2) {
    request2["readData"] = "READ_DATA";
    request2["deleteData"] = "DELETE_DATA";
})(request2 || (request2 = {}));
console.log(request2.readData);
