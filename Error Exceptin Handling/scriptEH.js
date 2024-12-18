//ERROR :  Due to any resons  the flow of execution is stopped that condition we call error
// Error is a just an event which disrupts normal execution of code.

//Types : 1) Compile time error : while parsing before running
//        2) Run time error  : While exicution of code

//Compile time error
// //Syntax Error
// console.log(1;)

// console.log(1;)
//             ^
// SyntaxError: missing ) after argument list

//Runtime Error :
// console.log(x);
// console.log(x);
//             ^
// ReferenceError: x is not defined

//Error Handling
//Try catch block

try {
  console.log("Inside Try");
  //block of code in which error may come
  console.log(x);
  console.log("After error ");
} catch (e) {
  //Error handling code / resolution //Error ke sath hum kya krna chahte hain //retry logic / custom error
  console.log("I am in the water.......!(catch)");
  // PS D:\Learning JS\Error Exceptin Handling> node scriptEH.js
  // Inside Try
  // I am in the water.......!(catch)
  // The error is  :  ReferenceError: x is not defined
  console.log("The error is  : ", e);
} finally {
  //Finally block :: chahe error aye na aye idc ill run every time
  console.log("Kohra hi kohra hain...");
}

// PS D:\Learning JS\Error Exceptin Handling> node scriptEH.js
// Inside Try
// I am in the water.......!(catch)
// The error is  :  ReferenceError: x is not defined
//     at Object.<anonymous> (D:\Learning JS\Error Exceptin Handling\scriptEH.js:27:15)
//     at Module._compile (node:internal/modules/cjs/loader:1565:14)
//     at Object..js (node:internal/modules/cjs/loader:1708:10)
//     at Module.load (node:internal/modules/cjs/loader:1318:32)
//     at Function._load (node:internal/modules/cjs/loader:1128:12)
//     at TracingChannel.traceSync (node:diagnostics_channel:322:14)
//     at wrapModuleLoad (node:internal/modules/cjs/loader:219:24)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:170:5)
//     at node:internal/main/run_main_module:36:49
// Kohra hi kohra hain...

//custom : user defined error usig throw keyword

try {
  console.log(x);
} catch (error) {
  throw new Error("Declare kr ki bhava adhi mg print kr");
}
// D:\Learning JS\Error Exceptin Handling\scriptEH.js:62
//   throw new Error("Declare kr ki bhava adhi mg print kr");
//   ^

// Error: Declare kr ki bhava adhi mg print kr
//     at Object.<anonymous> (D:\Learning JS\Error Exceptin Handling\scriptEH.js:62:9)
//     at Module._compile (node:internal/modules/cjs/loader:1565:14)
//     at Object..js (node:internal/modules/cjs/loader:1708:10)
//     at Module.load (node:internal/modules/cjs/loader:1318:32)
//     at Function._load (node:internal/modules/cjs/loader:1128:12)
//     at TracingChannel.traceSync (node:diagnostics_channel:322:14)
//     at wrapModuleLoad (node:internal/modules/cjs/loader:219:24)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:170:5)
//     at node:internal/main/run_main_module:36:49

// Node.js v22.12.0
// PS D:\Learning JS\Error Exceptin Handling>
