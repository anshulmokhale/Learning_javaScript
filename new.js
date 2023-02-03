// var obj = new Object();

// obj.name = "Anshul";

// console.log(obj.name)

let varia = {
    name: "ANshul",
    sname: "MOlkhae",
    get getname() {
        return this.name.toUpperCase();
    }
}

let show = varia.getname;
console.log(show);