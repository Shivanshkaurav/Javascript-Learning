// const RomanReigns = {
//     weight: 265,
//     height: 185,
//     quote: ()=>{
//         console.log("Head on the Table");
//     }
// }
// console.log(RomanReigns.constructor);

// // Factory Function

// function wweSuperstar(a, b, quote){
//     return {
//         height: a,
//         weight: b,
//         quote: ()=>{
//             console.log(quote);
//         },
//     };
// }

// const roman = wweSuperstar(186, 256);
// console.log(roman.constructor);

// const sethRollins = wweSuperstar(183, 250, "Burn it Down");
// const romanReigns = wweSuperstar(185, 256, "Head of the Table");

// console.log(sethRollins.quote());
// console.log(romanReigns.quote());

// Constructor Function

// function Star(a,b){
//     this.weight = a;
//     this.height = b;
// }

// const romanReigns = new Star(265, 185);
// romanReigns.quote = "Head on the Table";

// console.log(romanReigns);
// console.log(romanReigns.constructor);

const arr = [1, 234, 3264, 2];
console.log(...arr);

const newArr = new Array(...arr, 786, 1024, 512);
console.log(...newArr);

function Hero(a, b){
    this.height = a;
    this.weight = b;
}

const ironMan = new Hero(186, 256);
console.log(ironMan);

const ironMan2 = {...ironMan};
ironMan2.height = 158;
console.log(ironMan2);
console.log(ironMan);
