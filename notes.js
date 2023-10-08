//OPERATORS
//Add
let x = 10 + 2;
//Multiply
let x = 10 * 2;
//Subtract
let x = 6 - 2;
//Concatinate Strings
let x = "Happy";
let y = "Birthday";
message = (x + " " + y);
//Assign a Value to a Variable
x = 4;
// Increment the value in a variable by 3
x += 3;
//Compare 2 Values
x == y;
//Check to see if one number is less than another number
x < y;
//Check to see if 2 values are NOT equal
x != y;
//Check to see if a value is less than 10 and greater than 0
(x < 10 && > 0);

//COERCION
// These would also be true with a double equals
3 === 3.0; // true
"yes" === "yes"; // true
null === null; // true
false === false; // true

42 === "42"; // false
"hello" === "Hello"; // false
true === 1; // false
0 === null; // false
"" === null; // false
null === undefined; // false
//note the difference in a double equal comparison
42 == "42"; // true...the string "42" gets coerced into the number 42
"hello" == "Hello"; // false...are you surprised at this one?
1 == true; // true...the boolean value true gets coerced into the number 1
null == undefined; //  true
10 < 11; // true
42 > "42"; // false
43 > "42"; // true!  what is going on?
"a" < "b"; // true
// array example
var x = [1, 2, 3];

// assignment is by reference-copy, so
// y references the *same* array as x,
// not another copy of it.
var y = x;

y === x; // true...both variables are bound to the exact same array.
y === [1, 2, 3]; // false...it might look the same, but this is NOT the same array that y is bound to.
x === [1, 2, 3]; // false
y == [1, 2, 3]; // false...doesn't work with double equal either :(