// // let obj = {
// //     prefix : "Mr",
// //     firstName : "Abhay",
// //     lastName : "Mishra",
// // }

// // function myName() {
// //     return `${obj.prefix} ${obj.firstName} ${obj.lastName}`;
// // }

// // console.log(myName()); // Mr Abhay Mishra


// let obj = {
//     prefix : "Mr",
//     firstName : "Abhay",
//     lastName : "Mishra",
//     fullName : function() {
//         return this.firstName + " " + this.lastName;
//     }
// }

// function myName(town , city) {
//     console.log(this); // points to whole obj.
//     return `${this.prefix} ${this.firstName} ${this.lastName} ${town} , ${city}`;
// }

// // console.log(myName.call(obj , "Nangloi" , "New Delhi")); 
// // console.log(myName.apply(obj , ["Nangloi" , "New Delhi"])); 

// //let toBeUsedLater = myName.bind(obj);
// //console.log(toBeUsedLater.call(obj , "Nangloi" , "New Delhi"));

// const member = {
//     firstName : "Akshay",
//     lastName : "Kumar"
// };

// let memberName = obj.fullName.bind(member);
// console.log(memberName);


// console.log("In normally & strict mode also => " , this); // window

// function javaScript() {
//     console.log("Inside a function in non-strict => " , this);
// }

// javaScript();

// const hi = () => {
    
//     console.log("In Arrow func normally and in strict mode =>" , this);
// }

// hi();


let obj = {
    prefix : "Mr",
    firstName : "Abhay",
    lastName : "Mishra",
    fullName : function() {
        return this.firstName + " " + this.lastName + " " + this.place;
    }
}

const member = {
    firstName : "Akshay",
    lastName : "Kumar",
    place : "Kanpur"
};

// let memberName = obj.fullName.bind(member);
// console.log(memberName());

Function.prototype.customBind = function(context) {
   const currentContext = this;
   const currentArguments = Array.prototype.concat.slice.call(arguments , 1);
   return function() {
    const args = Array.prototype.slice.call(arguments);
    currentContext.apply(context , currentArguments.concat(args));
   }
}

let memberName = obj.fullName.customBind(member);
console.log(memberName());