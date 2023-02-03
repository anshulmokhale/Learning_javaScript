let val = {
    name: "Anshul",
    surname: "Mokhale",
    Age: 21,
    message: "This is my personal message",
    syhlo: function () {
        console.log("this is a new fucniton or method")
    }
}
// document.write(val.name);
// document.write("<br>")
// document.write(val.surname);
// document.write(val.name + " " + val.surname)
// document.write("<br>")
// document.write(val.Age);
// document.write("<br>")
// document.write(val.message);
// for (key in val) {
//     console.log(key)
// }
// for (key in val) {
//     document.write(val[key])
//     document.write("<br>")
// }
val.na = function () {
    console.log("this is a new key funciton")
}
val.na();
val.syhlo();