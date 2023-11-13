// using normal function

// function hello(){
//     console.log("hai")
// }

// module.exports = hello

// anonymous function

// const hello = function () {
//     console.log("hay")
// }


// const hai = ()=>{
//     console.log("fiyaz")
// }

// module.exports = hai
// // module.exports = hello

// const name = ()=>{
//     console.log("my name is sunil")
// }
// module.exports = name
// as object

// const user = {
//     name : "fiyaz",
//     age : 25,
//     new :function () {
//     console.log("I am " + this.name + " " + "age" + " " + this.age)    
//     }

// }

// module.exports = user

// const user = {
//     name:"fiyaz",
//     age:25,
//     place:"koduvally",
//     fun: function (){
//         console.log("I am " + this.name + " " + "and" + this.age +"years 0ld")
    
//     }
// }
// module.exports = user

const number = {
    one:1,
    two:2,
    three:3,
    num:function() {
        console.log("the numbers are" , this.one + this.two + 'and' + this.three )
    }
}

module.exports = number