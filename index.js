const { returns } = require("chai-spies");

function receivesAFunction(callback) {
    // Call the provided callback function
    callback();
  }

  function returnsANamedFunction() {
    function namedFunction() {
      console.log("Inside namedFunction");
    }
  
    return namedFunction;
  }

  function returnsAnAnonymousFunction() {
    return function() {
      console.log("Inside anonymous function");
    };
  }
  
  const myFunction = returnsAnAnonymousFunction();
  myFunction();
  