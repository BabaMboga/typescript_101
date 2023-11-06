"use strict";
let age = 20;
if (age < 50)
    age += 10;
console.log(age);
let sales = 123456789;
let course = 'TypeScript';
let isPublished = true; // would work the same as the one below because it is declared and initialised.
// let isPublished: boolean = true;
let level;
// if not initialised the compiler assumes it is of type any thus we can reinitialise it 
level = 1;
level = 'a';
// avoid using the any type 
let numbers = [];
//proper initialisation of an array
let user = [1, 'Mosh'];
// proper initialisation of a tuple
//showcasing proper use of enum type
// const small = 1;
// const medium = 2;
// const large = 3;
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
;
let mySize = Size.Medium;
console.log(mySize);
//# sourceMappingURL=index.js.map