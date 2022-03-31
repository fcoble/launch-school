let objToCopy = {
    foo: 1,
    bar: 2,
    qux: 3,
  };
  
  let newObj = copyObj(objToCopy);
  console.log(newObj);        // => { foo: 1, bar: 2, qux: 3 }
  
  let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
  console.log(newObj2);       // => { foo: 1, qux: 3 }
  
  let newObj3 = copyObj(objToCopy, [ 'bar' ]);
  console.log(newObj3);       // => { bar: 2 }

  let newObj4 = copyObj(objToCopy, [ 'foo', 'bar' ]);
  console.log(newObj4);       // => { foo: 1, bar: 2 }

  function copyObj(objectToCopy, propertiesToCopy) {
      if (!propertiesToCopy) {
          return Object.assign({}, objectToCopy);
      }
      let objectToReturn = {};

      propertiesToCopy.forEach(element => {
        objectToReturn[element] = objToCopy[element];
      });

      return objectToReturn;
  }