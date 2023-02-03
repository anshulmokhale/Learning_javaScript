let obj = {
    name: "Anshul Mokhale",
    sec: {
        first: "this is first val",
        second: "this is second val",
        third: {
            val: "this is the thrid val",
            ojj: "this is final key"
        }
    }
}

// console.log(obj.name);
// console.log(obj.sec);
// console.log(obj.sec.first);
console.log(obj.sec.third.val);