let myProtoObj = {
    foo: 1,
    bar: 2,
  };

let myObj  = Object.create(myProtoObj);

//exercise 7.
myObj.qux = 3;

console.log(myObj);