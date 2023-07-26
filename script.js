
// !======================== HomeWork 6-1==================================
// let user={
//     title: 'The Road Ahead',
//     yazar: 'Bill Gates',
//     libraryID: 1254
//     }

//     for(let key in user){
//         delete user[key]
//     }
//     console.log(user);

// !=========================== HomeWork 6-2================================

// Number.prototype.add=function(val){
//     return this +val
// }
// Number.prototype.substract=function(val){
//     return this -val
// }
// Number.prototype.divide=function(val){
//     return this/val
// }
// Number.prototype.multiply=function(val){
//     return this*val
// }
// const result = (5).add(3).substract(4).divide(2).multiply(10);


// console.log(result);

// !============================  HomeWork 6-3===============================

// let arrayLikeObject={
//     length:0,
//     push:function(item){
//         this[this.length]=item;
//         this.length++;
//     },
//     pop:function(){
//         if(this.length===0)return undefined;
//         this.length--;
//         delete this[this.length]
//     }
// }

// arrayLikeObject.push("first"); 
// arrayLikeObject.push("second"); 
// arrayLikeObject.push("second"); 
// arrayLikeObject.pop(); 

 
// console.log(arrayLikeObject);

// !============================== HomeWork 7-1=======================

