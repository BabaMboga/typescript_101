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
//# sourceMappingURL=index.js.map