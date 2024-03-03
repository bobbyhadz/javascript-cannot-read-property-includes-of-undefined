// Cannot read properties of undefined (reading 'includes')

// EXAMPLE 1 - Initialize the variable to an empty array or empty string

const fromDb = undefined;

// ✅ Using Array.includes()
const arr = fromDb || [];
const result1 = arr.includes('abc');
console.log(result1); // 👉️ false

// // ------------------------------------

// // ✅ Using String.includes()
// const str = fromDb || '';
// const result2 = str.includes('abc');
// console.log(result2); // 👉️ false

// ------------------------------------------------------------------

// // EXAMPLE 2 - Using optional chaining (?.) to solve the error

// // ✅ Using Array.includes()
// const arr = undefined;
// const result1 = arr?.includes('abc') || false;
// console.log(result1); // 👉️ false

// // ------------------------------------

// // ✅ Using String.includes()
// const str = undefined;
// const result2 = str?.includes('abc') || false;
// console.log(result2); // 👉️ false

// ------------------------------------------------------------------

// // EXAMPLE 3 - Using optional chaining (?.) to solve the error

// // ✅ Using Array.includes()
// const arr = undefined;
// const result1 = arr?.includes('abc') || false;
// console.log(result1); // 👉️ false

// // ------------------------------------

// // ✅ Using String.includes()
// const str = undefined;
// const result2 = str?.includes('abc') || false;
// console.log(result2); // 👉️ false

// ------------------------------------------------------------------

// // EXAMPLE 4 - Check if the value is of the correct type before calling `includes()`

// // ✅ Using Array.includes()
// const arr = undefined;

// if (Array.isArray(arr)) {
//   const result = arr.includes('abc');
//   console.log(result);
// } else {
//   console.log('The value is NOT an array');
// }

// // ------------------------------------

// // ✅ Using String.includes()
// const str = undefined;

// if (typeof str === 'string') {
//   const result = str.includes('abc');
//   console.log(result);
// } else {
//   console.log('The value is NOT a string');
// }

// ------------------------------------------------------------------

// // EXAMPLE 5 - Use the ternary operator to solve the error

// // ✅ Using Array.includes()
// const arr = undefined;

// const result1 = Array.isArray(arr) ? arr.includes('abc') : false;
// console.log(result1); // 👉️ false

// // --------------------------------------------------------

// // ✅ Using String.includes()
// const str = undefined;

// const result2 =
//   typeof str === 'string' ? str.includes('abc') : false;
// console.log(result2); // 👉️ false

// ------------------------------------------------------------------

// // Cannot read properties of null (reading 'includes') in JS

// // EXAMPLE 6 - Initialize the variable to an empty array or empty string

// const fromDb = null;

// // ✅ Using Array.includes()
// const arr = fromDb || [];
// const result1 = arr.includes('abc');
// console.log(result1); // 👉️ false

// // ------------------------------------

// // ✅ Using String.includes()
// const str = fromDb || '';
// const result2 = str.includes('abc');
// console.log(result2); // 👉️ false

// ------------------------------------------------------------------

// // EXAMPLE 7 - Using optional chaining (?.) to solve the error

// // ✅ Using Array.includes()
// const arr = null;
// const result1 = arr?.includes('abc') || false;
// console.log(result1); // 👉️ false

// // ------------------------------------

// // ✅ Using String.includes()
// const str = null;
// const result2 = str?.includes('abc') || false;
// console.log(result2); // 👉️ false

// ------------------------------------------------------------------

// // EXAMPLE 8 - Check if the value is of the correct type before calling `includes()`

// // ✅ Using Array.includes()
// const arr = null;

// if (Array.isArray(arr)) {
//   const result = arr.includes('abc');
//   console.log(result);
// } else {
//   console.log('The value is NOT an array');
// }

// // ------------------------------------

// // ✅ Using String.includes()
// const str = null;

// if (typeof str === 'string') {
//   const result = str.includes('abc');
//   console.log(result);
// } else {
//   console.log('The value is NOT a string');
// }

// ------------------------------------------------------------------

// // EXAMPLE 9 - Use the ternary operator to solve the error

// // ✅ Using Array.includes()
// const arr = null;

// const result1 = Array.isArray(arr) ? arr.includes('abc') : false;
// console.log(result1); // 👉️ false

// // --------------------------------------------------------

// // ✅ Using String.includes()
// const str = null;

// const result2 =
//   typeof str === 'string' ? str.includes('abc') : false;
// console.log(result2); // 👉️ false
