

// hoisting

console.log(x);
var x=10;
console.log(x);

// function decleration
function square(num){
    return (num*num);
}
console.log(square(5));

const person={
    name:"jhon",
    surname:"doe",
    age:"40",
    languages:["turkis","english","spanish"],
    fullname:function(){
        return this.name +" "+ this.surname
    },
    address:{
        city:"balıkesir",
        district:"akçay"
    }
}
console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person.fullname());