console.log("My favorite dinosaur is " + theropod);
  // ReferenceError: theropod is not defined

var sauropod = "apatosaurus";
sauropod();
  // TypeError: sauropod is not a function

if (sauropod === "apatosaurus") 
  console.log("We have the same favorite sauropod!");
}
  // SyntaxError: Unexpected token }
