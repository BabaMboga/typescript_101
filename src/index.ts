let age: number = 20;
if (age < 50 )
    age += 10;
console.log(age);

let sales: number = 123_456_789;
let course: string = 'TypeScript';
let isPublished = true; // would work the same as the one below because it is declared and initialised.
// let isPublished: boolean = true;

let level;
// if not initialised the compiler assumes it is of type any thus we can reinitialise it 
level = 1;
level = 'a';
// avoid using the any type 

let numbers: number[] = [];
//proper initialisation of an array

let user: [number, string] = [1, 'Mosh'];
// proper initialisation of a tuple

//showcasing proper use of enum type

// const small = 1;
// const medium = 2;
// const large = 3;

enum Size {Small =1 , Medium, Large};
let mySize: Size = Size.Medium
console.log(mySize)