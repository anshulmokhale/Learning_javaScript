var student1 = {
    name: "Anshul",
    sname: "Mokahle",
    age: 22,
    class: "Final year"
}

console.log(student1);



function Student(first, last, age, clas) {
    this.name = first;
    this.sname = last;
    this.age = age;
    this.class = clas;
}

var student2 = new Student("Sathis", "Mokhale", 24, "none");

console.log(student2)